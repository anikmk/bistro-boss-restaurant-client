import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const CheckOutForm = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item)=>total + item.price,0);
    const [error ,setError] = useState();
    const [clientSecrett,setClinetSecret] = useState('')
    const [tranjectionId,setTranjectionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClinetSecret(res.data.clientSecret);
        })
    },[axiosSecure,totalPrice])
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        })
        if(error){
            setError(`payment error${error.message}`)

        }
        else{
            console.log(paymentMethod)
            setError('')
        }
        // confirm card payment
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecrett,{
            payment_method: {
                card:card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name:user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log(paymentIntent,'succes payment')
            if(paymentIntent.status == 'succeeded'){
                setTranjectionId(paymentIntent)
                console.log('tranjection id',paymentIntent.id)
            }
        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style:{
                    base:{
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder':{
                            color: '#aab7c4',
                        },
                    },
                    invalid:{
                        color: '#9e2146',
                    },
                },
            }}
            ></CardElement>
            <button className="btn btn-primary mt-5" type="submit" disabled={!stripe || !clientSecrett}>
                Pay
            </button>
            {error}
            {
                tranjectionId && <p>your transection id: {tranjectionId.id}</p>
            }
        </form>
    );
};

export default CheckOutForm;