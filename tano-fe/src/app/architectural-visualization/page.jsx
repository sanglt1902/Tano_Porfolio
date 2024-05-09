import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_ARCHITECTURAL_VISUALIZATION_SERVICE } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function AgencyMinimal() {
  const representImages = await loadRepresentImages();
  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        <SidebarCartItem />
        <MainHeader />
        {/* page-title */}
        <section className="page-title centred">
          <div className="outer-container">
            <div
              className="bg-layer"
              style={{
                backgroundImage: `url(${BASE_URL}${representImages?.architecturalVisualizationService?.data?.attributes?.serviceImages?.heroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Architectural Visualization</h2>
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
                        Architectural <span>Visualization</span>
                      </h2>
                    </div>
                    <p>
                      Architectural visualization is a crucial aspect of modern
                      architecture, allowing designers and clients to visualize
                      proposed structures before they are built. Through
                      advanced software and techniques, architectural
                      visualization brings designs to life with stunning detail
                      and realism. From residential homes to commercial
                      complexes, architectural visualization provides a clear
                      representation of how a project will look, feel, and
                      function in its intended environment. By incorporating
                      elements such as lighting, materials, and landscaping,
                      visualizations help stakeholders make informed decisions
                      and ensure that the final product meets their
                      expectations.
                    </p>
                    <p>
                      In architectural visualization, 3D modeling plays a
                      central role in creating realistic representations of
                      buildings and spaces. Architects and designers use
                      specialized software to construct digital models that
                      accurately depict every aspect of a project, from its
                      overall form to intricate interior details. These models
                      serve as the foundation for the visualization process,
                      allowing for precise manipulation and refinement to
                      achieve the desired aesthetic and functionality. With
                      advancements in technology, 3D modeling has become
                      increasingly sophisticated, enabling architects to explore
                      complex designs and visualize them with unparalleled
                      realism.
                    </p>
                    <p>
                      The impact of architectural visualization extends beyond
                      the design phase, influencing various stages of a
                      project&apos;s lifecycle. Visualizations aid in
                      communication between architects, clients, and
                      stakeholders, facilitating a shared understanding of
                      design concepts and objectives. They also serve as
                      powerful marketing tools, allowing developers to showcase
                      projects to potential buyers or investors. Additionally,
                      architectural visualization contributes to the broader
                      discourse on architecture and urban planning, fostering
                      innovation and creativity within the industry. Overall,
                      architectural visualization plays a vital role in shaping
                      the built environment, empowering designers to transform
                      ideas into tangible realities.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.architecturalVisualizationService?.data?.attributes?.serviceImages?.representImage1?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.architecturalVisualizationService?.data?.attributes?.serviceImages?.representImage2?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.architecturalVisualizationService?.data?.attributes?.serviceImages?.representImage3?.data?.attributes?.url}`}
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

const loadRepresentImages = async () => {
  const { data } = await getClient().query({
    query: GET_ARCHITECTURAL_VISUALIZATION_SERVICE,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
