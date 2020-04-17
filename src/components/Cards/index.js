import React, { Fragment } from "react";
import { Link } from "@reach/router";
import { Card, CardTitle } from "react-materialize";

import "./styles.css";

export const Cards = ({ image, title, price, id }, props) => {
  return (
    <Fragment>
      <Link to={`/detail/${id}`} className="grey-text text-darken-3">
        <Card
          className="cardComponent"
          header={
            <div className="wrapperImage">
              <CardTitle image={image}></CardTitle>
            </div>
          }
          title={<h6>{title}</h6>}
        >
          <p className="grey-text text-darken-3">${price}</p>
        </Card>
        {/* <div className="cards-detail">
          <h6 className="grey-text text-darken-3">{title}</h6>
          <p className="grey-text text-darken-3">${price}</p>
        </div> */}
      </Link>
    </Fragment>
  );
};
