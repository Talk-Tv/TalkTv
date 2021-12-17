import React, { Component } from "react";
import banner1 from "../img/Featured artist/Folabi-Nuel.png";


export default class Promotion extends Component {
  render() {
    return (
        <div className="section">

            <div className="row">
              <h2  className="section-heading">Promotion</h2>
              <img
                  className="taltv__img"
                  src={banner1}
                  alt="news"
              />

                <h3 className="card-body">
                  Talk Tv Gospel offers a wide range of promotional service for all gospel artist who are looking to get their songs heard on a wider scale. we have years of experience in the gospel music industry and the right team to sky rocket your music to a whole new level. from artist consultation, artist development, artist branding and viral trends for your music. an awesome PR team to sustain your image. what are you waiting for? contact us now!
                  <br />
                  Read articles and trending topics in the health space
                </h3>
              </div>
          </div>
    );
  }
}
