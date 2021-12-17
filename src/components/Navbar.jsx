import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SmoothScroll from 'smooth-scroll';
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from "swiper";

export default function Navbar() {

  var scroll = new SmoothScroll('a[href*="#"]');
  useEffect(() => {

    var navToggle = document.querySelector(".mobile-nav-toggle");
    let mobileNav = document.querySelector(".mobile-nav");

    if (navToggle) {

      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");
      });
    }


  }, [] );

  return (
    <>
      <div id="home" className="navbar-container">
        <div className="logo-container">
          <div className="logo"></div>
           {/*<div className="logo-text">TalkTv</div>*/}
        </div>
        <div className="links-container left">
          <a href="/#home" className="link" >
            Home
          </a>
          <a href="/#about" className="link" >
            About
          </a>
          <a href="/#events" className="link">
            Events
          </a>
          <a href="/#artists" className="link">
            Artist
          </a>
          <a href="/#promo" className="link" >
            Promotion
          </a>

        </div>
        {/*<div className="links-container right">*/}
        {/*  <Link className="link btn-reverse" to="/signup">*/}
        {/*    Contact*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
      <div className="mobile-nav-toggle"></div>
      <div className="mobile-nav">
        <div className="logo"></div>

        <a href="/#home" className="mobile-nav-item">
          Home
        </a>
        <a href="/#about" className="mobile-nav-item">
          About
        </a>
        <a href="/#events" className="mobile-nav-item">
          Events
        </a>
        <a href="/#artists" className="mobile-nav-item">
          Artist
        </a>
        <a href="/#promo" className="mobile-nav-item">
          Promotion
        </a>

      </div>
    </>
  );
}
