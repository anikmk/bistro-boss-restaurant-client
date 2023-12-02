import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    
    return (
        <div>
            <SectionTitle Heading='please pay to eat' subHadding='payment'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;