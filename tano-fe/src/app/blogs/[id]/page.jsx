import React from "react";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MainHeader from "../../components/MainHeader";
import ScrollToTop from "../../components/ScrollToTop";
import SearchPopup from "../../components/SearchPopup";
import SidebarCartItem from "../../components/SidebarCartItem";

function BlogDetail() {
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
                  "url(/assets/images/background/page-title-9.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Blog Details</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* sidebar-page-container */}
        <section className="sidebar-page-container">
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <figure className="upper-image">
                    <img src="/assets/images/news/news-9.jpg" alt="" />
                  </figure>
                  <div className="news-post">
                    <div className="news-block-two">
                      <div className="inner-box">
                        <div className="content-box">
                          <ul className="post-info clearfix">
                            <li>
                              <i className="icon-16" />
                              <a href="blog-details.html">Author &nbsp;,</a>
                            </li>
                            <li>16/02/2022</li>
                          </ul>
                          <h3>
                            A Brief History on the Beginnings of Modern
                            Architecture
                          </h3>
                          <div className="text">
                            <p>
                              Penatibus vitae diam commodo in aliquet.
                              Elementum, mauris a justo, sit vestibulum
                              convallis elit. Lacus venenatis eget pulvinar
                              mauris. Sit bibendum congue facilisi elementum sed
                              habitant diam bibendum. Eu eleifend bibendum
                              ultrices mollis et.
                            </p>
                            <p>
                              Blandit enim arcu faucibus tristique sed lobortis
                              hendrerit. Ut in mus arcu vel. Urna a, venenatis
                              ac lectus nunc, elit, ultricies nulla. Diam ut
                              elit nullam enim viverra in. Eu, etiam massa massa
                              volutpat cursus eros viverra. Euismod in augue
                              facilisis cras sed fringilla. Suspendisse neque
                              consectetur malesuada lectus molestie semper
                              turpis. Leo ullamcorper volutpat netus massa
                              varius nunc. Risus cursus vel vitae mi malesuada.
                              Scelerisque integer aliquet rutrum nisl diam dolor
                              ipsum. Dictum sagittis, dolor, volutpat morbi
                              ullamcorper. Vestibulum semper ante viverra erat
                              habitant nisl scelerisque feugiat. Quis non
                              iaculis pellentesque nunc pharetra, fringilla
                              pretium. Vitae massa orci, pharetra ultricies
                              tellus.
                            </p>
                            <p>
                              Quis tellus purus ac pulvinar felis, at. Morbi ut
                              donec quis id proin ut. Elementum nunc, mauris id
                              sed in tellus aenean donec eget. Sollicitudin
                              iaculis dui in id. A congue at et tellus. Lectus
                              bibendum elementum adipiscing tortor. Sollicitudin
                              nibh enim luctus ut sed turpis consectetur at.
                              Mattis cursus sit a velit. Elementum eget sit
                              vitae sed mauris venenatis, eu, iaculis erat.
                              Elementum facilisis vitae tristique risus
                              pharetra, ac id nullam. Aliquet tellus sagittis,
                              ipsum condimentum sem blandit eu, imperdiet.
                              Adipiscing iaculis velit lorem nisi, aliquam est
                              nunc, posuere. Tempus sapien, libero nulla nunc,
                              ultricies nam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-one">
                      <blockquote>
                        <div className="quote">
                          <img src="/assets/images/icons/quote-1.png" alt="" />
                        </div>
                        <p>
                          Euismod aenean malesuada fermentum aliquet. Phasellus
                          elementum nisl sapien sed quam blandit elit proin
                          bibendum. Felis aliquet viverra eu vel in. Interdum
                          mauris, sit nulla aliquam et id volutpat.
                        </p>
                        <span className="name">Valinteno Rose</span>
                      </blockquote>
                      <div className="image-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image">
                              <img
                                src="/assets/images/news/news-10.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image">
                              <img
                                src="/assets/images/news/news-11.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          Penatibus vitae diam commodo in aliquet. Elementum,
                          mauris a justo, sit vestibulum convallis elit. Lacus
                          venenatis eget pulvinar mauris. Sit bibendum congue
                          facilisi elementum sed habitant diam bibendum. Eu
                          eleifend bibendum ultrices mollis et.
                        </p>
                      </div>
                    </div>
                    <div className="comment-box">
                      <div className="comment">
                        <figure className="thumb-box">
                          <img src="/assets/images/news/comment-1.jpg" alt="" />
                        </figure>
                        <div className="comment-inner">
                          <div className="comment-info">
                            <h6>
                              Robert Misse <span>29 October 2022</span>
                            </h6>
                          </div>
                          <p>
                            Penatibus vitae diam commodo in aliquet. Elementum,
                            mauris a justo, sit vestibulum convallis elit. Lacus
                            venenatis eget pulvinar mauris.
                          </p>
                          <a href="blog-details.html" className="reply-btn">
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comments-form-area">
                      <h3>Leave a Reply</h3>
                      <form
                        action="blog-details.html"
                        method="post"
                        className="comment-form"
                      >
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
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
                            <button type="submit" className="theme-btn btn-one">
                              Message Us
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar">
                  <div className="sidebar-widget search-widget">
                    <div className="search-inner">
                      <h3>
                        <span>Search Your</span> Keyword
                      </h3>
                      <form action="blog-details.html" className="search-form">
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            placeholder="Search"
                            required=""
                          />
                          <button type="submit">
                            <i className="icon-1" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget category-widget">
                    <div className="widget-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        <li>
                          <a href="blog-details.html" className="current">
                            Agency Minimal
                            <i className="icon-15" />
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-2.html">
                            Interior Design
                            <i className="icon-15" />
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-3.html">
                            Urban Design
                            <i className="icon-15" />
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-4.html">
                            Decor Plan
                            <i className="icon-15" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget tags-widget">
                    <div className="widget-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="tags-list clearfix">
                        <li>
                          <a href="blog-details.html">Design</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Interior</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Agency</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Minimal</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Decor Plan</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Urban</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sidebar-page-container end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default BlogDetail;
