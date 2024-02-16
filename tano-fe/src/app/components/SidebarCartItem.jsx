import React from "react";

function SidebarCartItem() {
  return (
    <>
      {/* sidebar cart item */}
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-overlay xs-overlay-2 xs-bg-black" />
        <div className="xs-overlay xs-overlay-3 xs-bg-black" />
        <div className="xs-overlay xs-overlay-4 xs-bg-black" />
        <div className="xs-overlay xs-overlay-5 xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/assets/images/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                      nisl tincidunt tristique egestas non vitae.
                    </p>
                    <p>
                      Enim auctor est et, amet. Ante ridiculus sed eget felis,
                      aliquam venenatis. Amet dolor feugiat ligula gravida a
                      malesuada volutpat.
                    </p>
                    <a href="/about" className="theme-btn btn-one">
                      About Us
                    </a>
                  </div>
                  <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>87 Lê Văn Huân, phường 13, quận Tân Bình <br />
                      Thành phố Hồ Chí Minh, Việt Nam</li>
                      <li>
                        <a href="tel:0394438632">0394438632</a>
                      </li>
                      <li>
                        <a href="mailto:info@example.com">tanodesign@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-box">
                    <li className="facebook">
                      <a href="#" className="fab fa-facebook-f" />
                    </li>
                    <li className="twitter">
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li className="linkedin">
                      <a href="#" className="fab fa-linkedin-in" />
                    </li>
                    <li className="instagram">
                      <a href="#" className="fab fa-instagram" />
                    </li>
                    <li className="youtube">
                      <a href="#" className="fab fa-youtube" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END sidebar widget item */}
    </>
  );
}

export default SidebarCartItem;
