import React, { Component } from "react";
import banner1 from "../img/event poster/XPERINCE.png";
import banner2 from "../img/event poster/yMR.png";
import banner3 from "../img/event poster/wafBEC-2021.png";
import banner4 from "../img/event poster/SOUR-AWARD.png";
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
                  Talk Tv Gospel Entertainment is a mandate given to our founder to create a space for the gospel world were believer can grow in the light of God
                </div>
                <div className="card-body">
                  We are going to achieve this through Fun and exciting and entertaining Christian relatable contents.
                  We also function in giving the latest Gosoel News and Gist. Conferences and Gospel Event Updates. Event Coverage.
                  Gospel Entertainment and Lifestyle News and Updates about your favorite preachers. Gospel Music Artist and so much more. We thrive to be the best Gospel Entertainment Platform in Africar not just Nigeria.
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
                  <h3>The Experience</h3>
                  <p>
                    This 2021, The Experience will be the 16th edition of the gospel concert and promises to exceed expectations.
                    The event will hold at The Rock Cathedral (registration required) and be live-streamed on all social media platforms.
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
                  <h3>YMR</h3>
                  <p>
                    Young Ministers Retreat (YMR 2021) is an annual revival program organized to set men on fire and equip men for the end time move of God. The 72 hour program is filled with a mix of intense prayers, fiery worship, evangelistic outreach, Impartations and transforming word sessions.
                    It is hosted by the Amazing Pastor Daniel Olawande
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
                  <h3>WAFBEC 2021</h3>
                  <p>
                    The 2021 edition of the West Africa Faith Believers Convention (WAFBEC) organised by Covenant Nation will be taking place from the 3rd - 8th of January 2021.

                    The theme of the event is "Manifesting His Kingdom"

                    Established in 2013, WAFBEC is a faith conference born in worship and intercession designed to address eternal issues and also things that are going on in time. It is prophetic, relevant and an impartation of grace. It is a time of prayer, teaching and prophecy. The emphasis is on God’s Word and the move of the Spirit.

                    There will be 70 Sessions teaching God’s Word. The format will be teaching conferences in the morning where every aspect of the truth will be taught, followed by evening meetings where the ministration of the Word will be combined with the move of the Holy Spirit.
                    </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="artist__content">
                  <img
                      className="taltv__img"
                      src={banner4}
                      alt="news"
                  />
                  <h3>SOAR AWARDS 2022</h3>
                  <p>
                    The SOAR Awards, presented by SOAR Radio, is the first Gospel internet radio on the official Nielsen BDS National airplay panel. The forthcoming 2022 edition to be hosted by Todd Dulaney, will be honoring William Murphy, Dorinda Clark Cole, and John Hannah.

                    Come March 7th, 2022, Sammie Okposo will be attending the SOAR awards at Rockford, Illinois, USA. Other international gospel artirtes billed for the award ceremony include Tasha Cobbs Leonard, Karen Clark Sheard, Kierra Sheard, Tim Bowman, Jonathan McReynolds, William Murphy, Da Truth, Anthony Brown, and more.
                    </p>
                </div>
              </SwiperSlide>

            </Swiper>
        </div>

      </div>
    );
  }
}
