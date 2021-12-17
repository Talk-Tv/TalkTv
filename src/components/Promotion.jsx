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
                  Got a medical question? Our versatile teams aims to provide
                  verified and yet relevant information about a variety of
                  health topicsGot a medical question? Our versatile teams aims to provide
                  verified and yet relevant information about a variety of
                  health topicsGot a medical question? Our versatile teams aims to provide
                  verified and yet relevant information about a variety of
                  health topics
                  <br />
                  Read articles and trending topics in the health space
                </h3>
              </div>
          </div>
    );
  }
}
