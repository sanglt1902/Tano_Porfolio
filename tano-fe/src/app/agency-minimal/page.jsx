import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function AgencyMinimal() {
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
                  "url(assets/images/background/page-title-3.jpg)",
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Agency Minimal</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* service-details */}
        <section className="service-details">
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="text">
                    <div className="sec-title">
                      <h2>
                        Agency <span>Minimal</span>
                      </h2>
                    </div>
                    <p>
                      Consequat metus, non cursus dolor vitae orci. Mauris etiam
                      sed vitae cras vel dolor at urna. Gravida mi tincidunt
                      dictum vitae. Euismod ullamcorper sit blandit quis.
                      Consectetur pellentesque amet bibendum faucibus nisl. Non
                      vestibulum convallis nunc nec. Bibendum nunc et congue
                      venenatis malesuada morbi ut quam massa. Non eu quis
                      lacus, volutpat diam aliquam tristique. Morbi massa
                      facilisi diam quis cras pellentesque aliquam donec orci.
                    </p>
                    <p>
                      Et dictum diam tempus orci tristique volutpat sed. Metus
                      quam hendrerit sed massa amet, amet, mauris mi, nunc.
                      Nulla ut egestas congue at id est elit. Sagittis, egestas
                      at nibh mauris at molestie a. Nunc ac aliquam nibh ac, et
                      nunc, arcu feugiat. Quis arcu faucibus tempus lacinia
                      lacus cras lacus. Consequat, feugiat eget facilisi dictum
                      quis. Viverra tempus, nisl, aliquet consectetur tortor
                      pellentesque. Eu pharetra, nunc proin diam ut.
                    </p>
                    <p>
                      Urna etiam arcu ligula tortor sociis libero. Adipiscing
                      pharetra est, nisi, in sit. Aliquam imperdiet consectetur
                      ipsum mauris ac nunc praesent pellentesque hendrerit.
                      Varius duis nulla tincidunt mauris, maecenas hendrerit
                      tellus. Congue pellentesque mus metus id urna, sit.
                      Maecenas sagittis, in consequat faucibus tristique quisque
                      lectus. Tincidunt vel commodo nec augue blandit lacus.
                      Diam eros, odio nunc congue enim ultrices rhoncus
                      imperdiet. Fringilla orci suspendisse elit mauris, vitae.
                      Commodo enim vulputate egestas in.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src="assets/images/service/service-1.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src="assets/images/service/service-2.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src="assets/images/service/service-3.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AllServices />
            </div>
          </div>
        </section>
        {/* service-details end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default AgencyMinimal;
