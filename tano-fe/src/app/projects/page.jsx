import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import {
  GET_PROJECT_PAGE_HERO_BANNER,
  GET_PROJECTS_LIST,
} from "@/graphql/query";
import { BASE_URL } from "../constants/url";
import { getClient } from "../../../client";

export default async function Projects() {
  const heroBanner = await loadProjectHeroBanner();
  const projectsList = await loadProjectsList();

  return (
    <>
      <style>{`
        .masonry-grid {
          column-count: 3;
        }

        .masonry-item {
          width: 100%;
          break-inside: avoid;
        }

        .inner-box {
          margin-bottom: 15px !important;
        }

        @media (max-width: 992px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .masonry-grid {
            column-count: 1;
          }
        }
      `}</style>
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
                backgroundImage: `url(${BASE_URL}${heroBanner?.projectPageHeroBanner?.data?.attributes?.projectPageHeroBanner?.data?.attributes?.url})`,
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
                Our Completed <span>Architecture Projects</span>
              </h2>
            </div>
            <div className="tabs-box">
              <div className="tab-btn-box centred">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn" data-tab="#All">
                    All
                  </li>
                  <li
                    className="tab-btn"
                    data-tab="#Architectural-Visualization"
                  >
                    Architectural Visualization
                  </li>
                  <li className="tab-btn" data-tab="#Interior-Visualization">
                    Interior Visualization
                  </li>
                  <li className="tab-btn" data-tab="#Floorplans">
                    Floorplans
                  </li>
                  <li className="tab-btn" data-tab="#Product-Visualization">
                    Product Visualization
                  </li>
                </ul>
              </div>
              <div className="tabs-content">
                <div className="tab active-tab" id="All">
                  <div className="masonry-grid">
                    {projectsList?.projectDetails?.data.map((project) => (
                      <div className="masonry-item" key={project?.id}>
                        <div className="project-block-two">
                          <a
                            className="inner-box"
                            href={`/projects/${project?.id}`}
                          >
                            <figure className="image-box">
                              <img
                                src={`${BASE_URL}${project?.attributes?.projectsPageImage?.data?.attributes?.url}`}
                                alt=""
                              />
                            </figure>
                            <div className="text">
                              <h6 className="color_light">
                                {project?.attributes?.name}
                              </h6>
                              <span className="color_orange">
                                {project?.attributes?.location}
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {[
                  "Architectural-Visualization",
                  "Interior-Visualization",
                  "Floorplans",
                  "Product-Visualization",
                ].map((category) => (
                  <div className="tab" id={category} key={category}>
                    <div className="masonry-grid">
                      {projectsList?.projectDetails?.data
                        .filter(
                          (project) =>
                            project?.attributes?.category === category
                        )
                        .map((project) => (
                          <div className="masonry-item" key={project?.id}>
                            <div className="project-block-two">
                              <a
                                className="inner-box"
                                href={`/projects/${project?.id}`}
                              >
                                <figure className="image-box">
                                  <img
                                    src={`${BASE_URL}${project?.attributes?.projectsPageImage?.data?.attributes?.url}`}
                                    alt=""
                                  />
                                </figure>
                                <div className="text">
                                  <h6 className="color_light">
                                    {project?.attributes?.name}
                                  </h6>
                                  <span className="color_orange">
                                    {project?.attributes?.location}
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
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

const loadProjectHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_PROJECT_PAGE_HERO_BANNER,
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

const loadProjectsList = async () => {
  const { data } = await getClient().query({
    query: GET_PROJECTS_LIST,
    variables: {
      publicationState: "LIVE",
      start: 0, // Start from the first entry
      limit: -1, // Set the limit to the number of entries you want to retrieve
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
