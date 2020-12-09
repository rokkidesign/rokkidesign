import "./App.css";
import "materialize-css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button, Card, Row, Col, Footer, Divider } from "react-materialize";
import React, { Component, useEffect } from "react";
import Lamps from "./Components/Lamps";
import Home from "./Components/Home";
import NavLeft from "./Components/NavLeft";
import NavTop from "./Components/NavTop";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Contact";


    

const App = () => {

  
  useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);

    return (
      <BrowserRouter>
        <div className="App">
          <Row>

              <div  className="NavLeft">
              <NavLeft /></div>
     

            <Col s={11} push="m1">
              
               <NavTop />
          
              <Switch>
                <Route path="/lamps" component={Lamps} />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/:any" component={Lamps} />
                <Route path="/" component={Home} />
              </Switch>
            </Col>
          </Row>

          <Footer
            className="footer"
            copyrights="&copy 2020 Copyright Text"
            links={
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Legal1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Legal 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            }
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            }
          >
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }


export default App;
