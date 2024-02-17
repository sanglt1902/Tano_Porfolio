import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function OurServices() {
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
                  "url(assets/images/background/page-title-2.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Services</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* about-style-three */}
        <section className="about-style-three">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}
          />
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title">
                    <span className="sub-title">Who We are</span>
                    <h2>
                      About the{" "}
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
                      duis leo in quis arcu enim. Vulputate velit mattis
                      tincidunt nunc sed mauris, sit amet ullamcorper.
                      Ullamcorper nunc mauris nunc proin sollicitudin mattis
                      viverra purus congue.
                    </p>
                    <p>
                      Enim auctor est et, amet. Ante ridiculus sed eget felis,
                      aliquam venenatis. Amet dolor feugiat ligula gravida a
                      malesuada eu adipiscing volutpat.
                    </p>
                    <a href="about.html" className="theme-btn btn-one">
                      About Info
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                <div data-animation-box="" className="image-box">
                  <figure
                    data-animation-text=""
                    className="overlay-anim-white-bg image image-1"
                    data-animation="overlay-animation"
                  >
                    <img src="assets/images/resource/about-3.jpg" alt="" />
                  </figure>
                  <figure
                    data-animation-text=""
                    className="overlay-anim-white-bg image image-2"
                    data-animation="overlay-animation"
                  >
                    <img src="assets/images/resource/about-4.jpg" alt="" />
                  </figure>
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-8.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-style-three end */}
        {/* service-style-two */}
        <section className="service-style-two centred">
          <div
            className="bg-layer parallax-bg"
            data-parallax='{"y": 100}'
            style={{
              backgroundImage: "url(assets/images/background/service-bg.jpg)",
            }}
          />
          <div className="large-container">
            <div className="sec-title">
              <span className="sub-title">Serivcess</span>
              <h2>
                Solutions we <span>provide</span>.
              </h2>
            </div>
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
                    <h4>Interior Visualization</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                    <h4>Character Modeling</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <a href="service-details-2.html" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-9.png" alt="" />
                    </div>
                    <h4>Interior Visualization</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                      <img src="assets/images/icons/icon-10.png" alt="" />
                    </div>
                    <h4>Architecture</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                      <img src="assets/images/icons/icon-11.png" alt="" />
                    </div>
                    <h4>Character Modeling</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
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
                      <img src="assets/images/icons/icon-12.png" alt="" />
                    </div>
                    <h4>Discr Design</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas ame
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-style-two end */}
        {/* service-section */}
        <section className="service-section service-page centred">
          <div className="large-container">
            <div className="sec-title">
              <span className="sub-title">Serivcess</span>
              <h2>
                Our included <span>service</span>
              </h2>
            </div>
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
                    <h4>Interior Visualization</h4>
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
                    <h4>Character Modeling</h4>
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
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <a href="service-details-2.html" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-9.png" alt="" />
                    </div>
                    <h4>Interior Visualization</h4>
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
                      <img src="assets/images/icons/icon-10.png" alt="" />
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
                      <img src="assets/images/icons/icon-11.png" alt="" />
                    </div>
                    <h4>Character Modeling</h4>
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
                      <img src="assets/images/icons/icon-12.png" alt="" />
                    </div>
                    <h4>Discr Design</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-section end */}
        {/* testimonial-style-three */}
        <section className="testimonial-style-three">
          <div className="large-container">
            <div className="inner-container">
              <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="quote">“</div>
                    <h4 className="text">
                      Integer sed id adipiscing viverra turpis sit gravida nec
                      semper. Velit eu consequat turpis faucibus lacus, arcu
                      nibh. At bibendum facilisis imperdiet sed rhoncus, pretium
                      nulla.
                    </h4>
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img
                          src="assets/images/resource/testimonial-1.jpg"
                          alt=""
                        />
                      </figure>
                      <h4>Liam Noah</h4>
                      <span className="designation">UX/ UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="quote">“</div>
                    <h4 className="text">
                      Integer sed id adipiscing viverra turpis sit gravida nec
                      semper. Velit eu consequat turpis faucibus lacus, arcu
                      nibh. At bibendum facilisis imperdiet sed rhoncus, pretium
                      nulla.
                    </h4>
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img
                          src="assets/images/resource/testimonial-1.jpg"
                          alt=""
                        />
                      </figure>
                      <h4>Liam Noah</h4>
                      <span className="designation">UX/ UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="quote">“</div>
                    <h4 className="text">
                      Integer sed id adipiscing viverra turpis sit gravida nec
                      semper. Velit eu consequat turpis faucibus lacus, arcu
                      nibh. At bibendum facilisis imperdiet sed rhoncus, pretium
                      nulla.
                    </h4>
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img
                          src="assets/images/resource/testimonial-1.jpg"
                          alt=""
                        />
                      </figure>
                      <h4>Liam Noah</h4>
                      <span className="designation">UX/ UI Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-style-three end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default OurServices;
