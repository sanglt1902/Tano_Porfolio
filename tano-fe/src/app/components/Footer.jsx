import React from "react";

function Footer() {
  return (
    <>
      {/* main-footer */}
      <footer className="main-footer">
        <figure className="image-layer-1">
          <img src="/assets/images/resource/footer-1.jpg" alt="" />
        </figure>
        <figure className="image-layer-2">
          <img src="/assets/images/resource/footer-2.jpg" alt="" />
        </figure>
        <figure className="image-layer-3">
          <img src="/assets/images/resource/footer-3.jpg" alt="" />
        </figure>
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/background/footer-bg.jpg)",
          }}
        />
        <div className="large-container">
          <div className="sec-title centred">
            <span className="sub-title">Contact Us</span>
            <h2>
              Do you need any help? <br />
              Send Message.
            </h2>
            <a href="index.html">
              <i className="icon-7" />
            </a>
          </div>
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="contact-widget footer-widget">
                  <div className="widget-title">
                    <h3>Office Info</h3>
                  </div>
                  <div className="widget-content">
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
                        380 St Kilda Road, Melbourne VIC 3004, Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 offset-xl-3 footer-column">
                <div className="subscribe-widget footer-widget">
                  <div className="widget-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    <form action="contact.html" method="post">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                        <button type="submit">Send</button>
                      </div>
                    </form>
                    <ul className="social-links clearfix">
                      <li>
                        <h4>Social Network :</h4>
                      </li>
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
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom centred">
            <div className="copyright">
              <h4>
                Copyright By © <a href="index.html">Inventarc</a> - 2022
              </h4>
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
    </>
  );
}

export default Footer;
