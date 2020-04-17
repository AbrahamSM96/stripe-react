import React, { Fragment } from "react";
import { PaymentForm } from "../PaymentForm";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";
import { Cards } from "../Cards";
import "./styles.css";

export const DetailCard = () => {
  return (
    <div className="detailContainer">
      <Row>
        <Col m={6} s={12}>
          <div>
            <img src="" alt="" />
            <h1 className="grey-text text-darken-3">title</h1>
            <h3 className="grey-text text-darken-3">price</h3>
            <h3 className="grey-text text-darken-3">description</h3>
          </div>
        </Col>
        <Col m={6} s={12}>
          >
          <div>
            <PaymentForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};
