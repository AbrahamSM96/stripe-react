import React from "react";
import { DetailCard } from "../components/DetailCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_SQFR2xXdf4XYuOEOW77GMyK8007GCzPuQh");

const Detail = () => {
  return (
    <Elements stripe={stripePromise}>
      <DetailCard />
    </Elements>
  );
};

export default Detail;
