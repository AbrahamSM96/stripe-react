import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "react-materialize";

import "./styles.css";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleInput = (event) => {
    let fName = event.target.value;
    console.log(fName);
    return fName;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Payment</h3>
        <div className="form__details">
          <input
            id="last_name"
            type="text"
            className="validate"
            onChange={handleInput}
          />
          <label htmlFor="first_name">First Name</label>

          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <div className="form__cardContainer">
          <div className="form__cardContainer-card ">
            <label>Card number </label>

            <CardNumberElement className="cardNumberElement" />
          </div>

          <div className="form__cardContainer-cexpira">
            <div>
              <label>Expiration date </label>

              <CardExpiryElement className="cardExpiryElement" />
            </div>
            <div>
              <label>CVC</label>
              <CardCvcElement className="cardCVCElement" />
            </div>
          </div>

          <div className="button">
            <Button
              node="a"
              small
              style={{
                marginRight: "5px",
              }}
              waves="light"
              type="submit"
              disabled={!stripe}
            >
              Pay
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
