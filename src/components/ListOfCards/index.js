import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import axios from 'axios';

import { Cards } from '../Cards';

export const ListOfCards = () => {
  const [products, setProducts] = useState([]);
  const API = 'http://0.0.0.0:8000/products';
  useEffect(() => {
    axios.get(API).then((result) => {
      const listProd = result.data;
      setProducts(listProd);
    });
  }, []);

  return (
    <Fragment>
      <Row>
        {products.map((prod) => (
          <Col m={4} s={12} key={prod.id}>
            <Cards key={prod.id} {...prod} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};
