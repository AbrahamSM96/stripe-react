import React from 'react';
import { Parallax } from 'react-materialize';
import './styles.css';

export const Header = () => {
  return (
    <div>
      <Parallax
        image={
          <img
            alt='img-header'
            src='https://reddotbest.com/wp-content/uploads/2019/01/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600-e1547776347138-1080x720.jpg'
          />
        }
        options={{
          responsiveThreshold: 0,
        }}
      >
        <div className='titles'>
          <h2 className='header center'>Strappy</h2>
          <h5 className='header center'>
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </h5>
        </div>
      </Parallax>
    </div>
  );
};
