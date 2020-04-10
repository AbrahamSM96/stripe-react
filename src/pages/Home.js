import React, { Fragment } from 'react';
import { Header } from '../components/Header';
import { ListOfCards } from '../components/ListOfCards';
import '../styles/HomeStyles.css';
export const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className='titles-home'>
        <h2 className='grey-text text-darken-3'>Zapatillas</h2>
      </div>
      <ListOfCards />
    </Fragment>
  );
};
