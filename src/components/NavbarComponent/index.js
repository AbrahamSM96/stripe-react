import React, { Fragment } from "react";
import { Navbar, NavItem, Icon, Tabs, Tab, Input } from "react-materialize";
import { Link } from "@reach/router";
import "./styles.css";
export const NavbarComponent = () => {
  return (
    <Fragment>
      <Navbar
        className="grey-text text-darken-3"
        alignLinks="left"
        brand={
          <Link
            className="brand-title brand-logo grey-text text-darken-3"
            to="/"
          >
            Strappy
          </Link>
        }
        centerLogo
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Navbar search>
          <Icon>search</Icon>
        </Navbar>

        <NavItem>
          <Link to="/">Home </Link>
        </NavItem>
      </Navbar>
    </Fragment>
  );
};
