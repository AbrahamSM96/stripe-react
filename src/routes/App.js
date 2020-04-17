import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { Home } from "../pages/Home";
import Detail from "../pages/Detail";

import { NavbarComponent } from "../components/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent";

const App = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <Router>
        <Home path="/" />
        <Detail path="/detail/:detailId" />
      </Router>
      <FooterComponent />
    </Fragment>
  );
};
export default App;
