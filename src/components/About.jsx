import React, { Component } from "react";
import banner1 from "../img/headset.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from "swiper";


export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="section-one section">
          <div id="about" className="section-heading">About Us</div>

          <div className="row-container">
            <div className="row">
              <div className="image"></div>
              <div className="text">
                <div className="card-body">
                  TalkTv is your number one leading gospel entertainment network in Africa.
                  TalkTv is your number one leading gospel entertainment network in Africa.
                </div>
              </div>
            </div>
            {/* //////// Right ///// */}

            <div className="row">
              <div className="talk">Our Story</div>
              <div className="text">
                <div className="heading">
                  TalkTv is your number one leading gospel entertainment network in Africa.
                </div>
                <div className="card-body">
                  We are the number one leading gospel entertainment network in Africa,
                  the mandate to reach the world with relatable and inspiring contents was launched in June 17 2020.
                  We cover everything gospel from music, to events, to sermons, to our own spirit inspired content,
                  we are an online television network and we are across all social platforms from YouTube, Facebook, Instagram, twitter and Tiktok
                  <br />
                  Read articles and trending topics in the health space
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="events" className="latest_artist">
          <h2>New Events</h2>
            <Swiper
                className={"artist__container"}
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 10
                  },
                  "768": {
                    "slidesPerView": 1,
                    "spaceBetween": 10
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 10
                  }
                }}

                // navigation={true}
            >
              <SwiperSlide>
                <div className="artist__content">
                  <img
                      className="taltv__img"
                      src={banner1}
                      alt="news"
                  />
                  <h3>Frank Edward</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum neque tenetur facta ncing elit.

                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="artist__content">
                  <img
                      className="taltv__img"
                      src={banner1}
                      alt="news"
                  />
                  <h3>Frank Edward</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum neque tenetur facilis corporis ratione fugiat quaerat consequatur nam, magni expedita necessitatibusLorem, ipsum dolor sit amet consectetur adipisicing elit.
                   </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="artist__content">
                  <img
                      className="taltv__img"
                      src={banner1}
                      alt="news"
                  />
                  <h3>Frank Edward</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum neque tenetur facilis corporis ratione fugiat quaerat consequatur nam, magni expedita necessitatibusLorem, ipsum dolor sit amet consectetur adipisicing elit.
                     necessitatibusLorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="artist__content">
                  <img
                      className="taltv__img"
                      src={banner1}
                      alt="news"
                  />
                  <h3>Frank Edward</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     necessitatibusLorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
              </SwiperSlide>

            </Swiper>
        </div>

      </div>
    );
  }
}
