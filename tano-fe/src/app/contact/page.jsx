import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Contact() {
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
                  "url(assets/images/background/page-title-10.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* contact-page-section */}
        <section className="contact-page-section">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
          />
          <div className="large-container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                  <div className="sec-title">
                    <span className="sub-title">Contact Us</span>
                    <h2>Do you need any help? Send Message.</h2>
                  </div>
                  <form
                    method="post"
                    action="sendemail.php"
                    id="contact-form"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          required=""
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          required=""
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email *"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Message here"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          className="theme-btn btn-one"
                          type="submit"
                          name="submit-form"
                        >
                          Message Us
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <figure className="logo">
                    <a href="contact.html">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </figure>
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
                  </div>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="icon-17" />
                      <a href="tel:88123456987231">+88 12345 6987 231</a>
                    </li>
                    <li>
                      <i className="icon-18" />
                      <a href="mailto:info@envato.com">info@envato.com</a>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      380 St Kilda Road, Melbourne <br />
                      VIC 3004, Australia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-page-section end */}
        {/* google-map-section */}
        <section className="google-map-section">
          <div className="large-container">
            <div className="map-inner">
              <div
                className="google-map"
                id="contact-google-map"
                data-map-lat="40.712776"
                data-map-lng="-74.005974"
                data-icon-path="assets/images/icons/map-marker.png"
                data-map-title="Brooklyn, New York, United Kingdom"
                data-map-zoom={12}
                data-markers='{
                      "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                  }'
              ></div>
            </div>
          </div>
        </section>
        {/* google-map-section */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Contact;
