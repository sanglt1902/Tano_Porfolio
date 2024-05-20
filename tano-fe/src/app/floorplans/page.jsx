import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_FLOORPLANS_SERVICE } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function Floorplans() {
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
                backgroundImage: `url(${BASE_URL}${representImages?.floorplansService?.data?.attributes?.serviceImages?.heroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Floorplans</h2>
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
                        <span>Floorplans</span>
                      </h2>
                    </div>
                    <p>
                      Floorplans are fundamental tools in architectural design,
                      providing a bird’s-eye view of a building's layout. These
                      plans showcase the arrangement of rooms, spaces, and
                      physical features at one level of a structure, helping to
                      visualize the spatial relationships and flow within the
                      building. Designers and architects use floorplans to
                      communicate the intended design, ensuring that all
                      stakeholders, from clients to builders, have a clear
                      understanding of the project's blueprint.
                    </p>
                    <p>
                      The importance of floorplans extends beyond mere
                      visualization; they are critical in the planning and
                      execution phases of construction. By offering detailed
                      dimensions and annotations, floorplans enable precise
                      material estimations and cost calculations, aiding in
                      budget management. They also facilitate efficient space
                      utilization, ensuring that each area serves its intended
                      purpose effectively. Floorplans can highlight potential
                      issues early in the design process, allowing for
                      adjustments before construction begins, thereby saving
                      time and resources.
                    </p>
                    <p>
                      Technological advancements have revolutionized floorplan
                      design, making it more accessible and accurate. Modern
                      software tools and applications allow designers to create
                      detailed and interactive floorplans with ease. Features
                      such as 3D rendering and virtual walkthroughs provide a
                      more immersive experience, helping clients to better
                      understand the proposed spaces. Additionally, these tools
                      support collaboration among various stakeholders,
                      enhancing communication and ensuring that the final design
                      aligns with the client's vision and requirements.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.floorplansService?.data?.attributes?.serviceImages?.representImage1?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.floorplansService?.data?.attributes?.serviceImages?.representImage2?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.floorplansService?.data?.attributes?.serviceImages?.representImage3?.data?.attributes?.url}`}
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
    query: GET_FLOORPLANS_SERVICE,
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
