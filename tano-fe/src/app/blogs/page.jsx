import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Blogs() {
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
                  "url(assets/images/background/page-title-8.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Our Blog</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* news-section */}
        <section className="news-section blog-grid">
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>16/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          A Brief History on the Beginnings of Modern
                          Architecture
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-4.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>15/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Electric Feel And Of Other Things Lacinia eget
                          consecte sed convallis.
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-5.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>14/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Hop deco is an interactive platform that puts you in
                          touch
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-6.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>13/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Many of our projects cannot be featured in this
                          section
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-7.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>12/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Aenean tristique justo et nibh molestie, non porttitor
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-8.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>11/02/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Nulla vitae cursus quam, nec ultrices nibh Quisque.
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                        nisl tincidunt tristique egestas non vitae. Pulvinar
                        quis duis leo in quis arcu enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* news-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Blogs;
