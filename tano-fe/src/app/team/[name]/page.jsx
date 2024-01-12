import React from "react";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MainHeader from "../../components/MainHeader";
import ScrollToTop from "../../components/ScrollToTop";
import SearchPopup from "../../components/SearchPopup";
import SidebarCartItem from "../../components/SidebarCartItem";

function TeamMemberDetail() {
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
                backgroundImage:
                  "url(/assets/images/background/page-title-6.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Team Details</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* team-details */}
        <section className="team-details">
          <div className="large-container">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="/assets/images/team/team-7.jpg" alt="" />
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
                <h2>Jason Brown</h2>
                <span className="designation">UX / UI Designer</span>
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
                <p>
                  Consequat metus, non cursus dolor vitae orci. Mauris etiam sed
                  vitae cras vel dolor at urna. Gravida mi tincidunt dictum
                  vitae. Euismod ullamcorper sit blandit quis. Consectetur
                  pellentesque amet bibendum faucibus nisl. Non vestibulum
                  convallis nunc nec. Bibendum nunc et congue venenatis
                  malesuada morbi ut quam massa. Non eu quis lacus, volutpat
                  diam aliquam tristique. Morbi massa facilisi diam quis cras
                  pellentesque aliquam donec orci.
                </p>
                <ul className="info-list clearfix">
                  <li>
                    <span>Age :</span> 29 Years
                  </li>
                  <li>
                    <span>Contact Me :</span>{" "}
                    <a href="tel:1234567890123">+1 234-5678-90123</a>
                  </li>
                  <li>
                    <span>Experience :</span> 5 Years
                  </li>
                  <li>
                    <span>Email :</span>{" "}
                    <a href="mailto:jasonbrown@info.com">jasonbrown@info.com</a>
                  </li>
                  <li>
                    <span>Skills :</span> SolidWorks, AutoCAD, 3ds Max
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* team-details end */}
        {/* team-section */}
        <section className="team-section team-details-page">
          <div className="large-container">
            <div className="sec-title centred">
              <h2>
                Other Team <span>members</span>
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div className="team-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src="/assets/images/team/team-4.jpg" alt="" />
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
                        <img src="/assets/images/team/team-5.jpg" alt="" />
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
                        <img src="/assets/images/team/team-6.jpg" alt="" />
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
        </section>
        {/* team-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default TeamMemberDetail;
