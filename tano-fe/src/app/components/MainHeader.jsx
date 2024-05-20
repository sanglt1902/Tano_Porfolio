"use client";
import React from "react";
import { usePathname } from "next/navigation";

function MainHeader() {
  const pathname = usePathname();

  const servicesPaths = [
    "/our-services",
    "/architectural-visualization",
    "/interior-visualization",
    "/floorplans",
    "/product-visualization",
  ];

  return (
    <>
      {/* main header */}
      <header className="main-header">
        {/* header-lower */}
        <div className="header-lower">
          <div
            className="shape"
            style={{
              backgroundImage: "url(/assets/images/shape/shape-1.png)",
            }}
          />
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className={pathname === "/" ? "current" : ""}>
                      <a href="/">Home</a>
                    </li>
                    <li className={pathname === "/about" ? "current" : ""}>
                      <a href="/about">About</a>
                    </li>
                    <li
                      className={
                        servicesPaths.includes(pathname)
                          ? "dropdown current fix-underline-position"
                          : "dropdown fix-underline-position"
                      }
                    >
                      <a href="#">Services</a>
                      <ul>
                        {/* <li>
                          <a href="/our-services">Our Services</a>
                        </li> */}
                        <li>
                          <a href="/architectural-visualization">
                            Architectural Visualization
                          </a>
                        </li>
                        <li>
                          <a href="/interior-visualization">
                            Interior Visualization
                          </a>
                        </li>
                        <li>
                          <a href="/floorplans">Floorplans</a>
                        </li>
                        <li>
                          <a href="/product-visualization">
                            Product Visualization
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathname.includes("/projects") ? "current" : ""
                      }
                    >
                      <a href="/projects">Projects</a>
                    </li>
                    <li className={pathname.includes("/team") ? "current" : ""}>
                      <a href="/team">Our Team</a>
                      {/* <ul>
                        <li>
                          <a href="/team">Our Team</a>
                        </li>
                        <li>
                          <a href="/testimonial">Testimonial</a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li>
                      <a href="/blogs">Blog</a>
                    </li> */}
                    <li className={pathname === "/contact" ? "current" : ""}>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="menu-right-content">
                {/* <div className="search-box-outer search-toggler">
                  <i className="icon-1" />
                </div> */}
                <div className="nav-btn nav-toggler navSidebar-button">
                  <i className="icon-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area clearfix">
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
              <div className="menu-right-content">
                {/* <div className="search-box-outer search-toggler">
                  <i className="icon-1" />
                </div> */}
                <div className="nav-btn nav-toggler navSidebar-button">
                  <i className="icon-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/">
              <img src="/assets/images/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>314 Ngo Quyen street, Ward 10, Ho Chi Minh city, Viet Nam</li>
              <li>
                <a href="tel:0394438632" target="_blank">
                  039 443 8632
                </a>
              </li>
              <li>
                <a href="mailto:tanostudio0@gmail.com" target="_blank">
                  tanostudio0@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
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
                <a href="#" className="fab fa-linkedin-in" target="_blank" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </>
  );
}

export default MainHeader;
