import React from "react";

import {

  Row,
  CardPanel,

  Col,
 
} from "react-materialize";
import "materialize-css";
import Divider from "react-materialize/lib/Divider";
// import "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import MapIn from "./MapIn";
 import Button from "react-materialize/lib/Button";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col m={4} s={12} offset="m1">
            <Button
              className="z-depth-2 orange "
              large
              target="blank"
              node="a"
              href="https://www.google.com/maps/place/PHU+Madej-Pak+s.c./@50.0790093,20.4400488,15z/data=!4m5!3m4!1s0x0:0x63f37e03c8726c6f!8m2!3d50.0790093!4d20.4400488"
            >
              Google Maps
            </Button>
            <a className="btn-large orange " href="tel:+48123454397">
              Zadzwoń
            </a>
            <CardPanel className="white z-depth-2">
              <h5 className="center">Formularz Kontaktowy</h5>
              <Row></Row>
              <Divider />
              <Row></Row>
              <div className="center ">
                <form id="contact-form">
                  <Row>
                    <Col m={6} s={12}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Col>
                    <Col m={6} s={12}>
                      <div className="form-group">
                        <label htmlFor="name">Company's Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Col>
                  </Row>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn orange">
                    Submit
                  </button>
                </form>
              </div>
            </CardPanel>
            <CardPanel className="white z-depth-2">
              W razie zainteresowania lub w celu uzyskania dodatkowych
              informacji prosimy o kontakt za pomocą formularza zgłoszeniowego
              lub z naszym biurem od poniedziałku do piątku, w godzinach od 8:00
              do 16:00. Nasi doradcy przedstawią specjalnie przygotowaną ofertę
              oraz odpowiedzą na wszystkie Państwa pytania.
              <Row></Row>
              <br />
              PHU Madej-pak s.c
              <br />
              Dziewin 333
              <br />
              32-708 Dziewin
              <br />T : +48 12 345 43 97
              <br />
              E: biuro@madejpak.pl
            </CardPanel>
          </Col>

          <Col m={1} s={0} />
          <Col m={5} s={12}>
          <Row></Row><Row></Row><Row></Row>
            {/* <CardPanel className="white z-depth-2">
              <div id="map" style={{ height: 500 }}>
                <MapIn />
              </div>
            </CardPanel> */}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Contact;
