import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Team() {
  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        <SearchPopup />
        <SidebarCartItem />
        <MainHeader />
        {/* page-title */}
        <section className="page-title centred">
          <div className="outer-container">
            <div
              className="bg-layer"
              style={{
                backgroundImage: "url(assets/images/background/page-title.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* team-page-section */}
        <section className="team-page-section">
          <div className="large-container">
            <div className="tabs-box">
              <div className="tab-btn-box centred">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn" data-tab="#tab-1">
                    Web Development
                  </li>
                  <li className="tab-btn" data-tab="#tab-2">
                    UI/UX Design
                  </li>
                  <li className="tab-btn" data-tab="#tab-3">
                    Graphics Design
                  </li>
                </ul>
              </div>
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-1">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-1.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-2.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-3.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-4.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-5.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-6.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-2">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-5.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-6.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-1.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-2.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-3.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-4.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-3">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-3.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-4.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-5.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-6.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">03</span>
                            <h4>
                              <a href="team-details.html">Michel Watson</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-1.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">01</span>
                            <h4>
                              <a href="team-details.html">Gaurav Bhalla</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/team/team-2.jpg" alt="" />
                            </figure>
                            <ul className="social-links clearfix">
                              <li>
                                <a href="index.html">
                                  <i className="icon-3" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-4" />
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="icon-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content-box">
                            <span className="count-text">02</span>
                            <h4>
                              <a href="team-details.html">Haris Gulati</a>
                            </h4>
                            <span className="designation">Architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-page-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Team;
