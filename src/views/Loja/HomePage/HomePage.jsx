import React from "react";

import Navbar from "../../../components/Navbar/Navbar.jsx";
import Header from "../../../components/Header/Header.jsx";
import Carousel from '../../../components/Carousel/Carousel.jsx';

function HomePage(){
  return(
        <div>
          <Navbar signed={false}/>
          <Header />
          <Carousel />
        </div>
  );
}

export default HomePage;