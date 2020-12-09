import {
   
    Row,
    
  } from "react-materialize";
  import "materialize-css";
  import Aos from "aos";
  import "aos/dist/aos.css";
  import React, {  useEffect } from "react";

 
  
  const Home = () => {

   useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);


      return (
        <div className="HomeScreen">
          <Row>
            <img data-aos="slide-up" className="HomeFace" src="https://purepng.com/public/uploads/large/purepng.com-stalinstalinjoseph-vissarionovich-stalinpolitical-leaderdictatorsoviet-union-1701528084177dxzxa.png" width="100%"/>
          </Row>
        </div>
      );
    
  }
  
  export default Home;
  