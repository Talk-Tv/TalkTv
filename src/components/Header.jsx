import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from "swiper";
import banner from "../img/images11.png"
import banner1 from "../img/images12.png"
import banner2 from "../img/images13.png"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <Swiper
                className={"swipe"}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
            >
                <SwiperSlide>
                    <figure className="talktv__figure">
                        <img
                            className="taltv__img"
                            src={banner}
                            alt="talktv"
                        />
                        <figcaption className="talktv__figcaption">
                            <div className="talktv">
                                <div className="talk__content">
                                    <div className="container">
                                        <h4>Welcome</h4>
                                        <h1>TALK <span className="color">TV</span></h1>
                                        <p>
                                            TalkTv gospel entertainment is the number one leading gospel Entertainment platform on Africa. We are making Jesus favor. Through enticing gospel content.
                                        </p>

                                        <div className="talktv__content__btn">
                                            {/*<button className="started__btn">*/}
                                            {/*    Get Started*/}
                                            {/*</button>*/}
                                            <button className="talk__btn">Talk Music</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className="talktv__figure">
                        <img
                            className="taltv__img"
                            src={banner1}
                            alt="talktv"
                        />
                        <figcaption className="talktv__figcaption">
                            <div className="talktv">
                                <div className="talk__content">
                                    <div className="container">
                                        <h4>Welcome</h4>
                                        <h1>TALK <span className="color">TV</span></h1>
                                        <p>
                                            Listen to spirit filled messages from your favorite preacher.
                                        </p>


                                        <div className="talktv__content__btn">
                                            {/*<button className="started__btn">*/}
                                            {/*    Get Started*/}
                                            {/*</button>*/}
                                            <button className="talk__btn">Talk Music</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className="talktv__figure">
                        <img
                            className="taltv__img"
                            src={banner2}
                            alt="talktv"
                        />
                        <figcaption className="talktv__figcaption">
                            <div className="talktv">
                                <div className="talk__content">
                                    <div className="container">
                                        <h4>Welcome</h4>
                                        <h1>TALK <span className="color">TV</span></h1>
                                        <p>
                                            Follow up your Favorite Gospel artist with the latest gist and updates.
                                        </p>

                                        <div className="talktv__content__btn">
                                            {/*<button className="started__btn">*/}
                                            {/*    Get Started*/}
                                            {/*</button>*/}
                                            <button className="talk__btn">Talk Music</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>


            </Swiper>
        </header>


    );
  }
}
