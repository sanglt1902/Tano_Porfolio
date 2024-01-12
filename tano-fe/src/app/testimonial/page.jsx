import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Testimonial() {
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
                  "url(assets/images/background/page-title-7.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* testimonial-style-two */}
        <section className="testimonial-style-two testimonial-page">
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
        {/* testimonial-section */}
        <section className="testimonial-section testimonial-page">
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
                <div className="thumb-item">
                  <div className="quote-box">
                    <img src="assets/images/icons/icon-7.png" alt="" />
                  </div>
                  <div className="thumb-box">
                    <div
                      className="thumb thumb-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/thumb-1.jpg)",
                      }}
                    />
                    <div
                      className="thumb thumb-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/thumb-2.jpg)",
                      }}
                    />
                    <div
                      className="thumb thumb-3"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/thumb-3.jpg)",
                      }}
                    />
                    <div
                      className="thumb thumb-4"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/thumb-4.jpg)",
                      }}
                    />
                    <div
                      className="thumb thumb-5"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/thumb-5.jpg)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div className="carousel-content">
                  <div className="sec-title">
                    <span className="sub-title">Client Testimonial</span>
                    <h2>
                      Our Client gave{" "}
                      <span>
                        us <br />
                        Feedback
                      </span>
                    </h2>
                  </div>
                  <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="quote">“</div>
                        <h4 className="text">
                          Integer sed id adipiscing viverra turpis sit gravida
                          nec semper. Velit eu consequat turpis faucibus lacus,
                          arcu nibh. At bibendum facilisis imperdiet sed
                          rhoncus, pretium nulla. Tortor leo nisl gravida
                          convallis. Adipiscing suscipit erat aliquam est tortor
                          massa sed facilisis. Elementum dictum enim eget
                          pellentesque malesuada. <span>”</span>
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
                          Integer sed id adipiscing viverra turpis sit gravida
                          nec semper. Velit eu consequat turpis faucibus lacus,
                          arcu nibh. At bibendum facilisis imperdiet sed
                          rhoncus, pretium nulla. Tortor leo nisl gravida
                          convallis. Adipiscing suscipit erat aliquam est tortor
                          massa sed facilisis. Elementum dictum enim eget
                          pellentesque malesuada. <span>”</span>
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
                          Integer sed id adipiscing viverra turpis sit gravida
                          nec semper. Velit eu consequat turpis faucibus lacus,
                          arcu nibh. At bibendum facilisis imperdiet sed
                          rhoncus, pretium nulla. Tortor leo nisl gravida
                          convallis. Adipiscing suscipit erat aliquam est tortor
                          massa sed facilisis. Elementum dictum enim eget
                          pellentesque malesuada. <span>”</span>
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
            </div>
          </div>
        </section>
        {/* testimonial-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Testimonial;
