import React, { Fragment } from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import { CardElement } from 'react-stripe-elements';
import { Cards } from '../Cards';

export const DetailCard = () => {
  return (
    <Fragment>
      <Row>
        <Col m={6} s={12}>
          <div>
            <img src='' alt='' />
            <h1 className='grey-text text-darken-3'>title</h1>
            <h3 className='grey-text text-darken-3'>price</h3>
            <h3 className='grey-text text-darken-3'>description</h3>
          </div>
        </Col>
        <Col m={6} s={12}>
          >
          <div>
            <h3 className='grey-text text-darken-3'>card details</h3>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
