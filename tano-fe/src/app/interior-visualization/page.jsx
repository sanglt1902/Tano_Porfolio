import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_INTERIOR_DESIGN_SERVICE } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function InteriorDesign() {
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
                backgroundImage: `url(${BASE_URL}${representImages?.interiorDesignService?.data?.attributes?.serviceImages?.heroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Interior Visualization</h2>
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
                        Interior <span>Visualization</span>
                      </h2>
                    </div>
                    <p>
                      Interior visualization is a dynamic field within the realm
                      of design and architecture, focusing on the creation of
                      realistic representations of interior spaces. Utilizing
                      cutting-edge software and techniques, interior
                      visualization brings interior design concepts to life with
                      remarkable detail and accuracy. Designers use these
                      visualizations to convey their ideas to clients, allowing
                      them to visualize how a space will look and feel once
                      completed. From residential interiors to commercial spaces
                      such as offices, retail stores, and hospitality venues,
                      interior visualization plays a crucial role in the design
                      process, helping stakeholders make informed decisions and
                      ensuring that the final design meets their expectations.
                    </p>
                    <p>
                      At the heart of interior visualization is 3D rendering
                      technology, which enables designers to create lifelike
                      images of interior spaces. By digitally constructing
                      detailed models of rooms, furnishings, lighting, and decor
                      elements, designers can simulate the look and atmosphere
                      of a space with incredible realism. Through the
                      manipulation of materials, textures, and lighting effects,
                      interior visualizations evoke the intended mood and
                      ambiance of a design concept. This level of detail allows
                      clients and designers to explore different design options,
                      experiment with color schemes, and visualize the spatial
                      layout before any physical work begins.
                    </p>
                    <p>
                      Interior visualization serves as a powerful communication
                      tool throughout the design process, facilitating
                      collaboration between designers, clients, and other
                      stakeholders. By presenting photorealistic images and
                      virtual walkthroughs of proposed designs, interior
                      visualizations provide a clear understanding of how the
                      final space will look and function. Clients can provide
                      feedback and make informed decisions based on these
                      visualizations, leading to more effective design
                      solutions. Additionally, interior visualization enhances
                      marketing efforts by allowing designers to showcase their
                      work in portfolios, presentations, and marketing
                      materials, attracting potential clients and highlighting
                      the unique aspects of their design expertise.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.interiorDesignService?.data?.attributes?.serviceImages?.representImage1?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.interiorDesignService?.data?.attributes?.serviceImages?.representImage2?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.interiorDesignService?.data?.attributes?.serviceImages?.representImage3?.data?.attributes?.url}`}
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
    query: GET_INTERIOR_DESIGN_SERVICE,
    variables: {
      publicationState: "LIVE",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};
