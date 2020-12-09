import {

  Col,

  Row,

  MediaBox,
  Divider,

  Collapsible,
  CollapsibleItem,
} from "react-materialize";
import "materialize-css";
import useIntersectionObserver from "../hooks/use-intersection-observer";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Lamps = () => {
  let name1 = "SOFA";
  let img1 =
    "https://scandicsofa.pl/userdata/public/gfx/cd2331749f3a9c8147e15554259c02a2.jpg";
  let img11 =
    "https://scandicsofa.pl/userdata/public/gfx/7799/sofa-orkide-main2.jpg";
  let img12 =
    "https://scandicsofa.pl/userdata/public/assets/products/category/scandicsofa-category-sofa.jpg";
  let img13 =
    "https://scandicsofa.pl/userdata/public/gfx/da6a1efca4d38b6a99bfafffcbc18754.jpg";

  let disc1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  let disc11 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  let name2 = "SOFA";
  let img2 =
    "https://scandicsofa.pl/userdata/public/gfx/cd2331749f3a9c8147e15554259c02a2.jpg";
  let img21 =
    "https://scandicsofa.pl/userdata/public/gfx/7799/sofa-orkide-main2.jpg";
  let img22 =
    "https://scandicsofa.pl/userdata/public/assets/products/category/scandicsofa-category-sofa.jpg";
  let img23 =
    "https://scandicsofa.pl/userdata/public/gfx/da6a1efca4d38b6a99bfafffcbc18754.jpg";

  let disc2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div className="">
      <Row>
        <Collapsible className="z-depth-0" accordion>
          <CollapsibleItem
            expanded={false}
            header={
              <Row>
                <div data-aos="flip-up">
                  <Col m={3} push="m1">
                    <img src={img1} width="100%" />
                  </Col>
                
                <Col m={5} push="m2">
                  <div className="left-align">
                    <h3>
                      {name1}
                      <Divider />{" "}
                    </h3>
                    <p>{disc1}</p>
                  </div>
                </Col>
                </div>
              </Row>
            }
            node="div"
          >
            <Row>
              <div ref={ref}>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img11}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img12}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img13}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>

                <Col m={5} push="m2">
                  <div className="left-align">
                    <p>{disc11}</p>
                  </div>
                </Col>
              </div>
            </Row>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header={
              <Row>
                <div data-aos="flip-up">
                <Col m={5} push="m1">
                  <div className="left-align">
                    <h3>{name2}</h3>
                    <p>{disc2}</p>
                  </div>
                </Col>
                <Col m={3} push="m2">
                  <img src={img2} width="100%" />
                </Col>
              </div></Row>
            }
            node="div"
          >
            <Row>
              <Col m={5} push="m1">
                <div className="left-align">
                  <h3>{name2}</h3>
                  <p>{disc2}</p>
                </div>
              </Col>
              <Col m={3} push="m2">
                <img src={img1} width="100%" />
              </Col>
            </Row>
          </CollapsibleItem>
        

          <CollapsibleItem
            expanded={false}
            header={
              <Row>
                <div data-aos="flip-up">
                  <Col m={3} push="m1">
                    <img src={img1} width="100%" />
                  </Col>
                
                <Col m={5} push="m2">
                  <div className="left-align">
                    <h3>
                      {name1}
                      <Divider />{" "}
                    </h3>
                    <p>{disc1}</p>
                  </div>
                </Col>
                </div>
              </Row>
            }
            node="div"
          >
            <Row>
              <div ref={ref}>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img11}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img12}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>
                <Col m={1} push="m1">
                  {isVisible && (
                    <MediaBox
                      id={img13}
                      options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                      }}
                    >
                      <img alt="" src={img11} width="100%" />
                    </MediaBox>
                  )}
                </Col>

                <Col m={5} push="m2">
                  <div className="left-align">
                    <p>{disc11}</p>
                  </div>
                </Col>
              </div>
            </Row>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header={
              <Row>
                <div data-aos="flip-up">
                <Col m={5} push="m1">
                  <div className="left-align">
                    <h3>{name2}</h3>
                    <p>{disc2}</p>
                  </div>
                </Col>
                <Col m={3} push="m2">
                  <img src={img2} width="100%" />
                </Col>
              </div></Row>
            }
            node="div"
          >
            <Row>
              <Col m={5} push="m1">
                <div className="left-align">
                  <h3>{name2}</h3>
                  <p>{disc2}</p>
                </div>
              </Col>
              <Col m={3} push="m2">
                <img src={img1} width="100%" />
              </Col>
            </Row>
          </CollapsibleItem>
        
        </Collapsible>
      </Row>
    </div>
  );
};

export default Lamps;
