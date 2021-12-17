import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="divider">
          <div className="col">
            <div className="logo"></div>
            <a href="#about" className="link">About Us</a>
            <a href="#contact" className="link">Contact</a>
            <div className="copyright">&copy; TalkTv</div>
          </div>

          <div className="col-row col">
            <a href="#.">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
            <a href="#.">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a href="#.">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>

        </div>

        <div className="divider">

          <div className="col" style={{ marginRight: 5 }}>
            <div className="text" style={{ marginLeft: 0, marginBottom: 20 }}>
              Subscribe to our newsletter
            </div>

            <div className="input-container">
              <input placeholder="Email Address" />
              <div className="btn-white">Ok</div>
            </div>
          </div>

          <div className="address col">
            <div className="text">11, Evergreen Rd, Agidingbi, Ikeja</div>
            <div className="text">+234 811 053 9771</div>
            <div className="text">talktvnaija1@gmail.com</div>
          </div>
        </div>
      </footer>
    );
  }
}
