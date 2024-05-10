import React from "react";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MainHeader from "../../components/MainHeader";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarCartItem from "../../components/SidebarCartItem";

import { GET_OUR_TEAM, GET_TEAM_MEMBER_DETAIL } from "@/graphql/query";
import { getClient } from "../../../../client";
import { BASE_URL } from "../../constants/url";

export default async function TeamMemberDetail({ params: { id } }) {
  const ourTeamInfo = await loadOurTeam();
  const teamMemberDetail = await loadTeamMemberDetail(id);

  const copiedArray = ourTeamInfo?.ourTeamDetails?.data.slice();
  const shuffledArray = copiedArray.sort(() => Math.random() - 0.5);
  const randomPeople = shuffledArray.slice(0, 3);

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
                backgroundImage: `url(${BASE_URL}${teamMemberDetail?.ourTeamDetail?.data?.attributes?.detailHeroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Team Details</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* team-details */}
        <section className="team-details">
          <div className="large-container">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img
                    src={`${BASE_URL}${teamMemberDetail?.ourTeamDetail?.data?.attributes?.detailRepresentImage?.data?.attributes?.url}`}
                    alt=""
                  />
                </figure>
                <ul className="social-links clearfix">
                  <li>
                    <a
                      href={`${teamMemberDetail?.ourTeamDetail?.data?.attributes?.facebook}`}
                      target="_blank"
                    >
                      <i className="icon-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${teamMemberDetail?.ourTeamDetail?.data?.attributes?.instagram}`}
                      target="_blank"
                    >
                      <i className="icon-4" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content-box">
                <h2>
                  {teamMemberDetail?.ourTeamDetail?.data?.attributes?.name}
                </h2>
                <span className="designation">
                  {teamMemberDetail?.ourTeamDetail?.data?.attributes?.level}
                </span>
                <ul className="social-links clearfix">
                  <li>
                    <a
                      href={`${teamMemberDetail?.ourTeamDetail?.data?.attributes?.facebook}`}
                      target="_blank"
                    >
                      <i className="icon-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${teamMemberDetail?.ourTeamDetail?.data?.attributes?.instagram}`}
                      target="_blank"
                    >
                      <i className="icon-4" />
                    </a>
                  </li>
                </ul>
                <p>
                  {
                    teamMemberDetail?.ourTeamDetail?.data?.attributes
                      ?.detailDescription
                  }
                </p>
                <ul className="info-list clearfix">
                  <li>
                    <span>Age :</span>{" "}
                    {teamMemberDetail?.ourTeamDetail?.data?.attributes?.age}{" "}
                    Years
                  </li>
                  <li>
                    <span>Contact Me :</span>{" "}
                    <a
                      href={`tel:${teamMemberDetail?.ourTeamDetail?.data?.attributes?.mobilePhoneNumber}`}
                      target="_blank"
                    >
                      {
                        teamMemberDetail?.ourTeamDetail?.data?.attributes
                          ?.mobilePhoneNumber
                      }
                    </a>
                  </li>
                  <li>
                    <span>Experience :</span>{" "}
                    {
                      teamMemberDetail?.ourTeamDetail?.data?.attributes
                        ?.experience
                    }{" "}
                    Years
                  </li>
                  <li>
                    <span>Email :</span>{" "}
                    <a
                      href={`mailto:${teamMemberDetail?.ourTeamDetail?.data?.attributes?.email}`}
                      target="_blank"
                    >
                      {teamMemberDetail?.ourTeamDetail?.data?.attributes?.email}
                    </a>
                  </li>
                  <li>
                    <span>Skills :</span>{" "}
                    {teamMemberDetail?.ourTeamDetail?.data?.attributes?.skills}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* team-details end */}
        {/* team-section */}
        <section className="team-section team-details-page">
          <div className="large-container">
            <div className="sec-title centred">
              <h2>
                Other Team <span>members</span>
              </h2>
            </div>
            <div className="row clearfix">
              {randomPeople.map((person, index) => (
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
        </section>
        {/* team-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const loadTeamMemberDetail = async (id) => {
  const { data } = await getClient().query({
    query: GET_TEAM_MEMBER_DETAIL,
    variables: {
      id: id,
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

const loadOurTeam = async () => {
  const { data } = await getClient().query({
    query: GET_OUR_TEAM,
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
