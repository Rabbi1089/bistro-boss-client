import React from "react";
import SectionTitle from "../../../components/section title/SectionTitle";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.PAYMENT_API_PK);
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>dashBoard || payment</title>
      </Helmet>
      <SectionTitle
        heading="payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
