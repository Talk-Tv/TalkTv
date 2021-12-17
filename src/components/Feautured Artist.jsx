import React, { Component } from "react";
import banner1 from "../img/Featured artist/Folabi-Nuel.png";
import banner2 from "../img/Featured artist/Guc.png";
import banner3 from "../img/Featured artist/Mercy-chinwo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default class FeauturedArtist extends Component {
  render() {
    return (
      <div>
          <div id="artists" className="latest__artist">
              <h2>Featured Artist</h2>
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
                          "slidesPerView": 1,
                          "spaceBetween": 10
                      }
                  }}
              >
                  <SwiperSlide>
                      <div className="artist__content">
                          <img
                              className="taltv__img"
                              src={banner1}
                              alt="news"
                          />
                          <h3>Folabi-Nuel</h3>
                          <p>
                              Folabi-Nuel is an award winning artist and a great gospel musician of our time.
                          </p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="artist__content">
                          <img
                              className="taltv__img"
                              src={banner2}
                              alt="news"
                          />
                          <h3>Guc</h3>
                          <p>
                               Guc is an award winning artist and a great gospel musician of our time.
                          </p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="artist__content">
                          <img
                              className="taltv__img"
                              src={banner3}
                              alt="news"
                          />
                          <h3>Mercy Chinwo</h3>
                          <p>
                              Mercy Chinwo is an award winning artist and a great gospel musician of our time.
                          </p>
                      </div>
                  </SwiperSlide>

              </Swiper>
          </div>

      </div>
    );
  }
}
