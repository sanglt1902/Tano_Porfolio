import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_TEAM_PAGE_HERO_BANNER, GET_OUR_TEAM } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function Team() {
  const heroBanner = await loadHeroBanner();
  const ourTeamInfo = await loadOurTeam();

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
                backgroundImage: `url(${BASE_URL}${heroBanner?.teamPageHeroBanner?.data?.attributes?.teamPageHeroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* team-page-section */}
        <section className="team-page-section">
          <div className="large-container">
            <div className="tabs-box">
              <div className="tab-btn-box centred">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn" data-tab="#Designer">
                    Designer
                  </li>
                  <li className="tab-btn" data-tab="#3D-Artist">
                    3D Artist
                  </li>
                  {/* <li className="tab-btn" data-tab="#graphics-design">
                    Graphics Design
                  </li> */}
                </ul>
              </div>
              <div className="tabs-content">
                <div className="tab active-tab" id="Designer">
                  <div className="row clearfix">
                    {ourTeamInfo?.ourTeamDetails?.data
                      ?.filter((person) =>
                        person?.attributes?.role.includes("Designer")
                      )
                      .map((person, index) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 team-block"
                          key={person?.id}
                        >
                          <div className="team-block-one">
                            <div className="inner-box">
                              <div className="image-box">
                                <figure className="image">
                                  <img
                                    src={`${BASE_URL}${person?.attributes?.teamPageImage?.data?.attributes?.url}`}
                                    alt=""
                                  />
                                </figure>
                                <ul className="social-links clearfix">
                                  <li>
                                    <a
                                      href={`${person?.attributes?.facebook}`}
                                      target="_blank"
                                    >
                                      <i className="icon-3" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={`${person?.attributes?.instagram}`}
                                      target="_blank"
                                    >
                                      <i className="icon-4" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="content-box">
                                <span className="count-text">0{index + 1}</span>
                                <h4>
                                  <a href={`/team/${person?.id}`}>
                                    {person?.attributes?.name}
                                  </a>
                                </h4>
                                <span className="designation">
                                  {person?.attributes?.level}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="tab" id="3D-Artist">
                  <div className="row clearfix">
                    {ourTeamInfo?.ourTeamDetails?.data
                      ?.filter((person) =>
                        person?.attributes?.role.includes("3D-Artist")
                      )
                      .map((person, index) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 team-block"
                          key={person?.id}
                        >
                          <div className="team-block-one">
                            <div className="inner-box">
                              <div className="image-box">
                                <figure className="image">
                                  <img
                                    src={`${BASE_URL}${person?.attributes?.teamPageImage?.data?.attributes?.url}`}
                                    alt=""
                                  />
                                </figure>
                                <ul className="social-links clearfix">
                                  <li>
                                    <a
                                      href={`${person?.attributes?.facebook}`}
                                      target="_blank"
                                    >
                                      <i className="icon-3" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={`${person?.attributes?.instagram}`}
                                      target="_blank"
                                    >
                                      <i className="icon-4" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="content-box">
                                <span className="count-text">0{index + 1}</span>
                                <h4>
                                  <a href={`/team/${person?.id}`}>
                                    {person?.attributes?.name}
                                  </a>
                                </h4>
                                <span className="designation">
                                  {person?.attributes?.level}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-page-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const loadHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_TEAM_PAGE_HERO_BANNER,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadOurTeam = async () => {
  const { data } = await getClient().query({
    query: GET_OUR_TEAM,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
