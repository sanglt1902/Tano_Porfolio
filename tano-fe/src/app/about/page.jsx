import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

const About = () => {
  return (
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
              <h2>ABOUT</h2>
            </div>
          </div>
        </div>
      </section>
      {/* page-title end */}
      {/* about-section */}
      <section className="about-section alternat-2">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
        />
        <div className="large-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div
                data-animation-box=""
                className="image-box p_relative d_block"
              >
                <figure
                  data-animation-text=""
                  className="overlay-anim-white-bg image p_relative d_block"
                  data-animation="overlay-animation"
                >
                  <img src="assets/images/resource/about-2.jpg" alt="" />
                </figure>
                <div className="curve-text">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-5.png)",
                    }}
                  />
                  <span className="curved-circle">
                    Welcome To Our Inventarc
                  </span>
                  <div className="text">
                    <div className="inner">
                      <h2>
                        10<span>Years</span>
                      </h2>
                      <h3>Experience</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box p_relative mr_50">
                <div className="sec-title">
                  <span className="sub-title">GET TO KNOW</span>
                  <h2>
                    Your Trusted{" "}
                    <span>
                      Architecture <br />
                      Company
                    </span>
                  </h2>
                </div>
                <div className="text">
                  <p>
                    Penatibus turpis vel eget cursus ut et. Lacus velit,
                    venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                    nisl tincidunt tristique egestas non vitae. Pulvinar quis
                    duis leo in quis arcu enim. Vulputate velit mattis tincidunt
                    nunc sed mauris, sit amet ullamcorper. Ullamcorper nunc
                    mauris nunc proin sollicitudin mattis viverra purus congue.
                  </p>
                  <p>
                    Enim auctor est et, amet. Ante ridiculus sed eget felis,
                    aliquam venenatis. Amet dolor feugiat ligula gravida a
                    malesuada eu adipiscing volutpat.
                  </p>
                </div>
                <div className="btn-box">
                  <a href="about.html" className="theme-btn btn-one">
                    All Informamtion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
      {/* service-section */}
      <section className="service-section centred">
        <div className="large-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <a href="service-details-2.html" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-2.png" alt="" />
                  </div>
                  <h4>Interior Design</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <a href="service-details-2.html" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-3.png" alt="" />
                  </div>
                  <h4>Architecture</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <a href="service-details-3.html" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-4.png" alt="" />
                  </div>
                  <h4>Urban Design</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <a href="service-details-4.html" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-5.png" alt="" />
                  </div>
                  <h4>Discr Design</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}
      {/* testimonial-style-two */}
      <section className="testimonial-style-two">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/background/testimonial-bg.jpg)",
          }}
        />
        <div className="large-container">
          <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            <div className="testimonial-block-two">
              <div className="inner-box">
                <div className="quote">“</div>
                <p>
                  Integer sed id adipiscing viverra turpis sit gravida nec
                  semper. Velit eu consequat turpis faucibus lacus, arcu nibh.
                  At bibendum facilisis imperdiet sed rhoncus, pretium nulla.
                  Tortor leo nisl gravida convallis. Adipiscing suscipit erat.
                </p>
                <div className="author-box">
                  <figure className="author-thumb">
                    <img
                      src="assets/images/resource/testimonial-2.jpg"
                      alt=""
                    />
                  </figure>
                  <h4>Liam Noah</h4>
                  <span className="designation">UX/ UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block-two">
              <div className="inner-box">
                <div className="quote">“</div>
                <p>
                  Integer sed id adipiscing viverra turpis sit gravida nec
                  semper. Velit eu consequat turpis faucibus lacus, arcu nibh.
                  At bibendum facilisis imperdiet sed rhoncus, pretium nulla.
                  Tortor leo nisl gravida convallis. Adipiscing suscipit erat.
                </p>
                <div className="author-box">
                  <figure className="author-thumb">
                    <img
                      src="assets/images/resource/testimonial-3.jpg"
                      alt=""
                    />
                  </figure>
                  <h4>James Bond</h4>
                  <span className="designation">UX/ UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block-two">
              <div className="inner-box">
                <div className="quote">“</div>
                <p>
                  Integer sed id adipiscing viverra turpis sit gravida nec
                  semper. Velit eu consequat turpis faucibus lacus, arcu nibh.
                  At bibendum facilisis imperdiet sed rhoncus, pretium nulla.
                  Tortor leo nisl gravida convallis. Adipiscing suscipit erat.
                </p>
                <div className="author-box">
                  <figure className="author-thumb">
                    <img
                      src="assets/images/resource/testimonial-4.jpg"
                      alt=""
                    />
                  </figure>
                  <h4>Haris Gulati</h4>
                  <span className="designation">UX/ UI Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-style-two end */}
      {/* clients-section */}
      <section className="clients-section about-page">
        <div className="auto-container">
          <div className="five-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
            <figure className="clients-logo">
              <a href="index.html">
                <img src="assets/images/clients/clients-1.png" alt="" />
              </a>
            </figure>
            <figure className="clients-logo">
              <a href="index.html">
                <img src="assets/images/clients/clients-2.png" alt="" />
              </a>
            </figure>
            <figure className="clients-logo">
              <a href="index.html">
                <img src="assets/images/clients/clients-3.png" alt="" />
              </a>
            </figure>
            <figure className="clients-logo">
              <a href="index.html">
                <img src="assets/images/clients/clients-4.png" alt="" />
              </a>
            </figure>
            <figure className="clients-logo">
              <a href="index.html">
                <img src="assets/images/clients/clients-5.png" alt="" />
              </a>
            </figure>
          </div>
        </div>
      </section>
      {/* clients-section end */}
      {/* team-section */}
      <section className="team-section about-page">
        <div className="large-container">
          <div className="sec-title centred">
            <span className="sub-title">Professional</span>
            <h2>Our Team</h2>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
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
        </div>
      </section>
      {/* team-section end */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
