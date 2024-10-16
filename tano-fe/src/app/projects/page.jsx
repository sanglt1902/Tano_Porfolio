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
                    data-filter=".Architectural-Visualization"
                  >
                    Architectural Visualization
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".Interior-Visualization"
                  >
                    Interior Visualization
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".Floorplans"
                  >
                    Floorplans
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".Product-Visualization"
                  >
                    Product Visualization
                  </li>
                </ul>
              </div>
              <div className="items-container row clearfix">
                {projectsList?.projectDetails?.data.map((project) => (
                  <div
                    className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column all ${project?.attributes?.category}`}
                    key={project?.id}
                  >
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
      limit: 100, // Set the limit to the number of entries you want to retrieve
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
