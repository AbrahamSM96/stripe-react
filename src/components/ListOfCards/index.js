import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import axios from "axios";
import Loader from "react-loaders";

import { Cards } from "../Cards";

export const ListOfCards = () => {
  const [error, setError] = useState([null]);
  const [loading, setLoading] = useState([true]);
  const [products, setProducts] = useState([]);
  const [numberOfItemShow, setNumberOfItemShow] = useState([12]);
  const API = "http://localhost:8000/products";
  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        const listProd = result.data.slice(0, numberOfItemShow);
        setLoading(false);
        setProducts(listProd);
        console.log(listProd);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    if (numberOfItemShow + 4 <= products.length) {
      const addItems = (numberOfItemShow = numberOfItemShow + 4);
      console.log(addItems);

      setNumberOfItemShow(addItems);
    } else {
      setNumberOfItemShow(products);
    }
  };

  return (
    <Fragment>
      {loading && <Loader type="ball-grid-pulse" active color="#000000" />}
      <Row>
        {products.map((prod) => (
          <Col m={3} s={12} key={prod.id}>
            <Cards key={prod.id} {...prod} />
          </Col>
        ))}
      </Row>
      <button onClick={() => handleSubmit()}>click</button>
    </Fragment>
  );
};
