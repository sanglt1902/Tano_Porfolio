import React from "react";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MainHeader from "../../components/MainHeader";
import ScrollToTop from "../../components/ScrollToTop";
import SearchPopup from "../../components/SearchPopup";
import SidebarCartItem from "../../components/SidebarCartItem";

function ProjectDetail() {
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
                  "url(/assets/images/background/page-title-5.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Project Details</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* project-details */}
        <section className="project-details">
          <div className="auto-container">
            <div className="inner-container">
              <div className="project-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/project/project-15.jpg" alt="" />
                  </figure>
                  <div className="text">
                    <h6>APEX</h6>
                    <p>San Diego, California</p>
                  </div>
                </div>
              </div>
              <div className="content-one">
                <div className="sec-title">
                  <h2>
                    Interior <span>Design</span>
                  </h2>
                </div>
                <div className="text">
                  <p>
                    Consequat metus, non cursus dolor vitae orci. Mauris etiam
                    sed vitae cras vel dolor at urna. Gravida mi tincidunt
                    dictum vitae. Euismod ullamcorper sit blandit quis.
                    Consectetur pellentesque amet bibendum faucibus nisl. Non
                    vestibulum convallis nunc nec. Bibendum nunc et congue
                    venenatis malesuada morbi ut quam massa. Non eu quis lacus,
                    volutpat diam aliquam tristique. Morbi massa facilisi diam
                    quis cras pellentesque aliquam donec orci.
                  </p>
                  <p>
                    Et dictum diam tempus orci tristique volutpat sed. Metus
                    quam hendrerit sed massa amet, amet, mauris mi, nunc. Nulla
                    ut egestas congue at id est elit. Sagittis, egestas at nibh
                    mauris at molestie a. Nunc ac aliquam nibh ac, et nunc, arcu
                    feugiat. Quis arcu faucibus tempus lacinia lacus cras lacus.
                    Consequat, feugiat eget facilisi dictum quis. Viverra
                    tempus, nisl, aliquet consectetur tortor pellentesque. Eu
                    pharetra, nunc proin diam ut.
                  </p>
                  <p>
                    Urna etiam arcu ligula tortor sociis libero. Adipiscing
                    pharetra est, nisi, in sit. Aliquam imperdiet consectetur
                    ipsum mauris ac nunc praesent pellentesque hendrerit. Varius
                    duis nulla tincidunt mauris, maecenas hendrerit tellus.
                    Congue pellentesque mus metus id urna, sit. Maecenas
                    sagittis, in consequat faucibus tristique quisque lectus.
                    Tincidunt vel commodo nec augue blandit lacus. Diam eros,
                    odio nunc congue enim ultrices rhoncus imperdiet. Fringilla
                    orci suspendisse elit mauris, vitae. Commodo enim vulputate
                    egestas in.
                  </p>
                </div>
              </div>
              <div className="content-two">
                <div className="sec-title">
                  <h2>
                    Find out the{" "}
                    <span>
                      design <br />
                      solution
                    </span>
                    .
                  </h2>
                  <p>
                    Consequat metus, non cursus dolor vitae orci. Mauris etiam
                    sed vitae cras vel dolor at urna. Gravida mi tincidunt
                    dictum vitae. Euismod ullamcorper sit blandit quis.
                    Consectetur pellentesque amet bibendum faucibus nisl. Non
                    vestibulum convallis nunc nec. Bibendum nunc et congue
                    venenatis malesuada morbi ut quam massa. Non eu quis lacus,
                    volutpat diam aliquam tristique. Morbi massa facilisi diam
                    quis cras pellentesque aliquam donec orci.
                  </p>
                </div>
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img
                          src="/assets/images/project/project-16.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img
                          src="/assets/images/project/project-17.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project-details end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default ProjectDetail;
