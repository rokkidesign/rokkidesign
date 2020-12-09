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
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const NavLeft = () => {
   

  return (
    <div className="">
      <Row>
        <h5 data-aos="zoom-out"  className="/white-text">Rokki Design</h5>{" "}
      </Row>
      
      <Row>
          <div  className="ButtonLeftnav">
      <Link to="/lamps">
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Link></div>
      </Row>
      <Row>
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Row>
      <Row>
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Row>
      <Row>
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Row>
      <Row>
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Row>
      <Row>
        <img
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-26-512.png"
          width="80%"
        />
      </Row>
    </div>
  );
};

export default NavLeft;
