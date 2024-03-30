import React from "react";
import Loader from "../components/Loader";

function ComingSoon() {
  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        {/* comingsoon-section */}
        <section className="comingsoon-section centred">
          <div
            className="bg-layer"
            style={{
              backgroundImage:
                "url(assets/images/background/comingsoon-bg.jpg)",
            }}
          />
          <div className="large-container">
            <div className="inner-box">
              <figure className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="" />
                </a>
              </figure>
              <h3>Our website is under construction</h3>
              <h2>Coming Soon</h2>
              <div className="timer p_relative d_block">
                <div
                  className="cs-countdown"
                  data-countdown="01/24/2024 05:06:59"
                />
              </div>
              <div className="form-inner">
                <h4>Sign up for our latest news &amp; articles.</h4>
                <form action="/" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      required=""
                    />
                    <button type="submit" className="theme-btn btn-one">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="btn-box">
                <a href="/" className="theme-btn btn-one">
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*comingsoon-section end */}
      </div>
    </>
  );
}

export default ComingSoon;
