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
                              Folabi Nuel is a singer, songwriter, worship Leader, Recording artist and preacher with a mandate to bring people to a consciousness of who God His and how to be more like Him.. His debut single "God of Heaven" peaked at #1 on the Rhythm 93.7 Fm's "Holy Holla Top 5'' Gospel chart for several months.
                              His debut album 'Good God'' which features some of Nigeria's finest musicians such as Florocka, Wole Oni also topped the charts with ''Good God feat. Florocka peaking at #1.
                              He has since then featured on several world class events such as the yearly ''Make Music Lagos'' which features some of Nigeria's top acts.
                              He has shared the stage with music greats such as Tim Godfrey & Travis Greene Tour.
                              He was listed by Voyage ATL Magazine Atlanta as one of 10 inspiring creatives.
                              He was also nominated for 2018 category at the just concluded Africa gospel and Media Awards UK.
                              Folabi Nuel is an artist with a difference. combining jazz, rock and pop to create a unique sound that brings people to the consciousness of who God is.
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
                          <h3>Minister Guc</h3>
                          <p>
                              GUC is a fast-rising gospel minister in songs and chants. He is the crooner of “All That Matters”  a song that is now a global anthem because of the solemn tune and the message behind it. The Eezee Tee Straboy has since then been making waves in the Gospel industry.

                              A powerful worshipper whose songs have helped a lot of people connect and feel closer to God. His latest song Obinigwe is moving like wide fire across the Country and Africa
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
                              Mercy Chinwo is a Nigerian singer-songwriter, actress, and comedian. She started singing at age 8 in her church children’s choir. Eventually, in 2012, she came to the spotlight after winning in the popular talent show ‘Nigerian Idols’.
                              Mercy is widely known for her hit single Excess Love (2018). The song earned her national and international recognition and sealed her status as one of the best vocalists in the Nigerian Gospel music ministry.
                          </p>
                      </div>
                  </SwiperSlide>

              </Swiper>
          </div>

      </div>
    );
  }
}
