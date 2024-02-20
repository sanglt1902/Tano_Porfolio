import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_PRODUCT_VISUALIZATION_SERVICE } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function DecorPlan() {
  const representImages = await loadRepresentImages();
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
                backgroundImage: `url(${BASE_URL}${representImages?.productVisualizationService?.data?.attributes?.serviceImages?.heroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Product Visualization</h2>
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
                        Product <span>Visualization</span>
                      </h2>
                    </div>
                    <p>
                      Product visualization is a dynamic field within the realm
                      of digital design and marketing, focused on creating
                      immersive and photorealistic representations of products
                      for promotional and sales purposes. Leveraging advanced
                      computer graphics technologies, product visualization
                      artists meticulously craft digital renderings and
                      animations that showcase products in their best light,
                      highlighting features, functionalities, and design
                      aesthetics. From consumer electronics to automotive
                      vehicles, furniture, and fashion apparel, product
                      visualization spans various industries, providing brands
                      and manufacturers with powerful visual assets to engage
                      customers and drive sales.
                    </p>
                    <p>
                      In the competitive landscape of modern commerce, product
                      visualization serves as a strategic tool for brands to
                      differentiate themselves, communicate value propositions,
                      and create compelling brand experiences. Through
                      high-fidelity renderings and interactive presentations,
                      companies can showcase product details, customization
                      options, and usage scenarios, allowing customers to
                      envision products in their lives before making purchasing
                      decisions. With the rise of e-commerce platforms and
                      digital marketing channels, product visualization has
                      become increasingly integral to online retail strategies,
                      enabling brands to stand out in crowded marketplaces and
                      foster deeper connections with consumers.
                    </p>
                    <p>
                      The process of product visualization involves a blend of
                      technical expertise and creative vision, as artists
                      utilize cutting-edge software tools and rendering
                      techniques to achieve stunning visual results. From 3D
                      modeling and texturing to lighting, shading, and
                      rendering, product visualization artists meticulously
                      craft every aspect of the digital representation, striving
                      for realism, accuracy, and visual impact. By harnessing
                      the power of digital visualization, brands can transcend
                      physical limitations, reaching global audiences with
                      captivating product experiences that inspire confidence,
                      drive engagement, and foster brand loyalty.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.productVisualizationService?.data?.attributes?.serviceImages?.representImage1?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.productVisualizationService?.data?.attributes?.serviceImages?.representImage2?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.productVisualizationService?.data?.attributes?.serviceImages?.representImage3?.data?.attributes?.url}`}
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
    query: GET_PRODUCT_VISUALIZATION_SERVICE,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
