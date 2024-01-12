import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Projects() {
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
                  "url(assets/images/background/page-title-4.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Our Project</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* project-page-section */}
        <section className="project-page-section">
          <div className="large-container">
            <div className="sec-title centred">
              <h2>
                Our Completed{" "}
                <span>
                  Architecture <br />
                  Projects
                </span>
              </h2>
            </div>
            <div className="sortable-masonry">
              <div className="filters centred">
                <ul className="filter-tabs filter-btns clearfix">
                  <li
                    className="active filter"
                    data-role="button"
                    data-filter=".all"
                  >
                    All
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".agency_minimal"
                  >
                    Agency Minimal
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".interior_design"
                  >
                    Interior Design
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".urban_design"
                  >
                    Urban Design
                  </li>
                </ul>
              </div>
              <div className="items-container row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all product interior_design urban_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/project/project-9.jpg" alt="" />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all agency_minimal urban_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="assets/images/project/project-10.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all product interior_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="assets/images/project/project-11.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all agency_minimal interior_design urban_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="assets/images/project/project-12.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all urban_design interior_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="assets/images/project/project-13.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all agency_minimal urban_design">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="assets/images/project/project-14.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h6>APEX</h6>
                        <p>San Diego, California</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project-page-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Projects;
