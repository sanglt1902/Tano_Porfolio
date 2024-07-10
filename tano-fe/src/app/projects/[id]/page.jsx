import React from "react";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MainHeader from "../../components/MainHeader";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarCartItem from "../../components/SidebarCartItem";
import MarkdownToHtml from "../../components/MarkdownToHtml";

import { GET_PROJECT_DETAIL } from "@/graphql/query";
import { BASE_URL } from "../../constants/url";
import { getClient } from "../../../../client";

export default async function ProjectDetail({ params: { id } }) {
  const projectDetail = await loadProjectDetail(id);
  const strapiMarkdownContent =
    projectDetail?.projectDetail?.data?.attributes?.description;

  const category =
    projectDetail?.projectDetail?.data?.attributes?.category.split("-");
  const firstCharCategory = category[0];
  const secondCharCategory = category[1];

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
                backgroundImage: `url(${BASE_URL}${projectDetail?.projectDetail?.data?.attributes?.detailPageHeroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Project Details</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* project-details */}
        <section className="project-details">
          <div className="outer-container">
            <div className="inner-container">
              <div className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                {projectDetail?.projectDetail?.data?.attributes?.detailPageImage?.data.map(
                  (project, index) => (
                    <div className="project-block-two" key={index}>
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src={`${BASE_URL}${project?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="content-one max-width-1010">
                <div className="sec-title">
                  <h2>
                    {firstCharCategory}
                    <span> {secondCharCategory}</span>
                  </h2>
                </div>
                <div className="text">
                  <MarkdownToHtml markdownContent={strapiMarkdownContent} />
                </div>
              </div>
              <div className="content-two max-width-1010">
                <div className="sec-title">
                  <h2>
                    Find out the <span>design solution</span>
                  </h2>
                  <p>
                    {
                      projectDetail?.projectDetail?.data?.attributes
                        ?.designSolutionContent
                    }
                  </p>
                </div>
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img
                          src={`${BASE_URL}${projectDetail?.projectDetail?.data?.attributes?.designSolutionImage1?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img
                          src={`${BASE_URL}${projectDetail?.projectDetail?.data?.attributes?.designSolutionImage2?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project-details end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const loadProjectDetail = async (id) => {
  const { data } = await getClient().query({
    query: GET_PROJECT_DETAIL,
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
