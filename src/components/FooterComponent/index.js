import React from "react";
import { Footer } from "react-materialize";
import "./styles.css";

export const FooterComponent = () => {
  return (
    <Footer
      copyrights="Made with love AbrahamSM"
      // moreLinks={
      //   <a className='grey-text text-lighten-4 right' href='#!'>
      //     More
      //   </a>
      // }
      className="footer"
    >
      <h5 className="grey-text text-darken-3 ">Footer Content</h5>
      <p className="grey-text text-darken-3">
        You can use rows and columns here to organize your footer content.
      </p>
    </Footer>
  );
};
