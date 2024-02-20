import React from "react";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_CHARACTER_MODELING_SERVICE } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function UrbanDesign() {
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
                backgroundImage: `url(${BASE_URL}${representImages?.characterModelingService?.data?.attributes?.serviceImages?.heroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Character Modeling</h2>
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
                        Character <span>Modeling</span>
                      </h2>
                    </div>
                    <p>
                      Character modeling is a specialized discipline within the
                      realm of 3D computer graphics, focusing on the creation of
                      digital characters for various purposes, including
                      animation, gaming, film, and virtual reality. This process
                      involves sculpting, shaping, and detailing digital models
                      to represent lifelike characters with distinct
                      personalities, features, and expressions. Character
                      modeling artists use a variety of software tools and
                      techniques to bring characters to life, paying close
                      attention to anatomical accuracy, facial expressions, and
                      unique traits that define each character&apos;s identity
                      and narrative role.
                    </p>
                    <p>
                      The art of character modeling requires a combination of
                      technical skill and artistic creativity, as artists must
                      balance realism with stylization to achieve compelling and
                      believable character designs. Beginning with a concept or
                      reference artwork, artists sculpt digital models using
                      specialized software such as ZBrush or Blender, refining
                      shapes, proportions, and details to create visually
                      appealing characters. From humanoids to creatures,
                      monsters, and fantastical beings, character modeling spans
                      a wide range of styles and genres, catering to diverse
                      storytelling needs across various media platforms.
                    </p>
                    <p>
                      Character modeling plays a crucial role in storytelling
                      and visual communication, enabling artists to convey
                      emotions, personalities, and narrative themes through
                      their creations. Whether creating iconic characters for
                      animated films, immersive gaming experiences, or virtual
                      reality environments, character modelers collaborate
                      closely with writers, directors, and animators to ensure
                      that characters resonate with audiences and enhance the
                      overall storytelling experience. Through meticulous
                      attention to detail and artistic vision, character
                      modelers breathe life into digital characters,
                      transforming them from mere polygons into memorable and
                      engaging personalities that captivate audiences worldwide.
                    </p>
                  </div>
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.characterModelingService?.data?.attributes?.serviceImages?.representImage1?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 small-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.characterModelingService?.data?.attributes?.serviceImages?.representImage2?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 big-column">
                        <figure className="image">
                          <img
                            src={`${BASE_URL}${representImages?.characterModelingService?.data?.attributes?.serviceImages?.representImage3?.data?.attributes?.url}`}
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
    query: GET_CHARACTER_MODELING_SERVICE,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
