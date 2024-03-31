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
                  <div className="content-box">
                    <h4>About Us</h4>
                    <p>
                      Tano Studio excels in architectural excellence, crafting
                      inspiring spaces with precision and creativity. Our
                      collaborative approach and commitment to innovation ensure
                      projects that surpass expectations, marrying beauty with
                      functionality.
                    </p>
                    <a href="/about" className="theme-btn btn-one">
                      About Us
                    </a>
                  </div>
                  <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        314 Ngo Quyen street, Ward 10, Ho Chi Minh city, Viet
                        Nam
                      </li>
                      <li>
                        <a href="tel:0394438632" target="_blank">
                          039 443 8632
                        </a>
                      </li>
                      <li>
                        <a href="tanostudio0@gmail.com" target="_blank">
                          tanostudio0@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-box">
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/tano.studio.2024/"
                        target="_blank"
                      >
                        <i className="icon-3" />
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/channel/UCHD7UbZn3jZ0hzqA3Yo7FRA"
                        className="fab fa-youtube"
                        target="_blank"
                      ></a>
                    </li>
                    <li className="twitter">
                      <a href="#" target="_blank">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li className="linkedin">
                      <a
                        href="#"
                        className="fab fa-linkedin-in"
                        target="_blank"
                      />
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
