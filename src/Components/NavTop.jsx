import {
    NavItem,
    Navbar,
    Icon,
    Button,
    Col,
    CardTitle,
    Card,
    Row,
    CardPanel,
    MediaBox,
    Divider,
    Modal,
    DatePicker,
    Form,
    Carousel,
    Collapsible,
    CollapsibleItem,
  } from "react-materialize";
  import "materialize-css";
  import useIntersectionObserver from "../hooks/use-intersection-observer";
  import React, { Component } from "react";
  import { Link } from "react-router-dom";

  const NavTop = () => {
   
    return (
      <div className="">
          <Row>
<div className="text-black">
              <Col m={2} push="m3">
                  <h5 >
                  <Link className="Navtop" to="/home">Home</Link>

                  </h5>
                 </Col>
                 <Col m={2} push="m3">
                  <h5 className="">
                  <Link className="Navtop" to="/about">O nas</Link>
                  </h5>
                 </Col>
                 <Col m={2} push="m3">
                  <h5 className="">
                  <Link className="Navtop" to="/contact">Contact</Link>
                  </h5>
                 </Col>
                </div>
              
          </Row>
      </div>
    );
  };
  
  export default NavTop;
  