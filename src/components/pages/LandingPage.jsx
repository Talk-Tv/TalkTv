import React, { Component, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Header from "../Header";
import Promotion from "../Promotion";
import About from "../About";
import FeauturedArtist from "../Feautured Artist"
import "../../scss/navbar.scss";
import "../../scss/footer.scss";
import "../../scss/header.scss";
import "../../scss/about.scss";
import "../../scss/artist.scss";
import "../../scss/promotion.scss";

export default class LandingPage extends Component {

  render() {

    return (
      <div className="Landing-page">
        <Navbar />
        <Header />
        <About />
        <FeauturedArtist />
        <Promotion />
        <Footer />
      </div>
    );
  }
}

