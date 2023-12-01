import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const [error ,setError] = useState();
    const stripe = useStripe();
    const elements = useElements();
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
            setError('')
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
            <button className="btn btn-primary mt-5" type="submit" disabled={!stripe}>
                Pay
            </button>
            {error}
        </form>
    );
};

export default CheckOutForm;