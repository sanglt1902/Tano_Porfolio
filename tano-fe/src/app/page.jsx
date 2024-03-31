import { getClient } from "../../client";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import MainHeader from "./components/MainHeader";
import ScrollToTop from "./components/ScrollToTop";
import SearchPopup from "./components/SearchPopup";
import SidebarCartItem from "./components/SidebarCartItem";

import {
  GET_HOME_HERO_BANNER,
  GET_HOME_GET_TO_KNOW,
  GET_HOME_VIDEOS,
  GET_PROJECTS_LIST,
  GET_ABOUT_CLIENT_SECTION,
} from "@/graphql/query";
import { BASE_URL } from "./constants/url";

export default async function Home() {
  const heroBanner = await loadHeroBanner();
  const getToKnowInfo = await loadGetToKnowInfo();
  const videos = await loadVideos();
  const projectsList = await loadProjectsList();
  const clientSection = await loadClientSection();

  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        <SearchPopup />
        <SidebarCartItem />
        <MainHeader />
        {/* banner-section */}
        <section className="banner-section centred">
          <div className="line-shape">
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div
            className="banner-carousel owl-carousel owl-theme owl-dots-none"
            id="sync1"
          >
            {heroBanner?.homeHeroBanner?.data?.attributes?.homeHeroBanner.map(
              (banner) => (
                <div className="slide-item" key={banner.id}>
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${BASE_URL}${banner?.Image?.data?.attributes?.url})`,
                    }}
                  />
                  <div className="auto-container">
                    <div className="content-box">
                      <div className="icon-box">
                        <img src="/assets/images/logo.png" alt="" />
                      </div>
                      <h2>
                        DESIGNING A BETTER, <br />
                        <span>MORE BEAUTIFUL WORLD SINCE</span> 2024
                      </h2>
                      <div className="btn-box">
                        <a href="/projects" className="theme-btn btn-one">
                          View All Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="banner-thumb-inner clearfix">
            <div
              className="owl-carousel owl-theme owl-dots-none owl-nav-none"
              id="sync2"
            >
              {heroBanner?.homeHeroBanner?.data?.attributes?.homeHeroBanner.map(
                (banner, index) => (
                  <div className="single-item" key={banner?.id}>
                    <span className="count-text">0{index + 1}</span>
                    <h6>{banner.name}</h6>
                    <p>{banner.location}</p>
                  </div>
                )
              )}
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
            </div>
          </div>
          <ul className="social-links clearfix">
            <li className="facebook">
              <a
                href="https://www.facebook.com/tano.studio.2024/"
                target="_blank"
              >
                <i className="icon-3" />
              </a>
            </li>
            <li className="youtube">
              <a
                href="https://www.youtube.com/channel/UCHD7UbZn3jZ0hzqA3Yo7FRA"
                className="fab fa-youtube"
                target="_blank"
              ></a>
            </li>
            <li className="twitter">
              <a href="#" target="_blank">
                <i className="icon-5" />
              </a>
            </li>
            <li className="linkedin">
              <a href="#" className="fab fa-linkedin-in" target="_blank" />
            </li>
          </ul>
        </section>
        {/* banner-section end */}
        {/* about-section */}
        <section className="about-section">
          <div
            className="shape-layer float-bob-y"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
          />
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div
                  data-animation-box=""
                  className="image-box p_relative d_block"
                >
                  <figure
                    data-animation-text=""
                    className="overlay-anim-white-bg image p_relative d_block"
                    data-animation="overlay-animation"
                  >
                    <img
                      src={`${BASE_URL}${getToKnowInfo?.homeGetToKnow?.data?.attributes?.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                  </figure>
                  <div className="text-inner">
                    <h6>
                      {getToKnowInfo?.homeGetToKnow?.data?.attributes?.name}
                    </h6>
                    <p>
                      {getToKnowInfo?.homeGetToKnow?.data?.attributes?.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box p_relative mr_50">
                  <div className="sec-title">
                    <span className="sub-title">GET TO KNOW</span>
                    <h2>
                      Your Trusted{" "}
                      <span>
                        Architecture <br />
                        Company
                      </span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Tano Studio is a beacon of innovation in the architecture
                      industry, renowned for its unwavering commitment to
                      excellence and client satisfaction. With a team of highly
                      skilled architects and designers, Tano Studio brings
                      dreams to life, crafting spaces that are both functional
                      and aesthetically pleasing. Through meticulous attention
                      to detail and a deep understanding of architectural
                      principles, the studio consistently delivers projects that
                      exceed expectations.
                    </p>
                    <p>
                      At Tano Studio, every project is a testament to our
                      dedication to quality and creativity. From residential
                      homes to commercial complexes, we approach each endeavor
                      with a fresh perspective, tailoring our designs to suit
                      the unique needs and preferences of our clients. Our
                      collaborative approach ensures that every aspect of the
                      design process is transparent and client-centric,
                      fostering a sense of trust and confidence. With Tano
                      Studio as your trusted architecture company, you can rest
                      assured that your vision will be realized with precision
                      and flair.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block">
                    <div className="quote-box">
                      <img src="assets/images/icons/icon-1.svg" alt="" />
                    </div>
                    <div className="inner">
                      <figure className="author-thumb">
                        <img
                          src={`${BASE_URL}${getToKnowInfo?.homeGetToKnow?.data?.attributes?.testimonial?.image?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                      <p>
                        {
                          getToKnowInfo?.homeGetToKnow?.data?.attributes
                            ?.testimonial?.description
                        }
                      </p>
                      <div className="designation">
                        {
                          getToKnowInfo?.homeGetToKnow?.data?.attributes
                            ?.testimonial?.role
                        }{" "}
                        -{" "}
                        <span>
                          {
                            getToKnowInfo?.homeGetToKnow?.data?.attributes
                              ?.testimonial?.name
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}
        {/* service-section */}
        <section className="service-section centred">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/architectural-visualization" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-2.png" alt="" />
                    </div>
                    <h4>Architectural Visualization</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/interior-visualization" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-3.png" alt="" />
                    </div>
                    <h4>Interior Visualization</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/character-modeling" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-4.png" alt="" />
                    </div>
                    <h4>Character Modeling</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/product-visualization" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-5.png" alt="" />
                    </div>
                    <h4>Product Visualization</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-section end */}
        {/* video-section */}
        <section className="video-section">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="single-item-carousel owl-carousel owl-theme owl-nav-none">
              {videos?.homeVideo?.data?.attributes?.homeVideo.map((video) => (
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: `url(${BASE_URL}${video?.image?.data?.attributes?.url})`,
                  }}
                  key={video.id}
                >
                  <div className="content-box">
                    <div className="text">
                      <h2>
                        {video?.type_1} <span>{video?.type_2}</span>
                      </h2>
                      <h4>
                        <i className="far fa-map-marker-alt" />
                        {video?.location}
                      </h4>
                    </div>
                    <div className="video-btn">
                      <a
                        href={video?.videoUrl}
                        className="lightbox-image"
                        data-caption=""
                        target="_blank"
                      >
                        <i className="icon-13" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* video-section end */}
        {/* project-section */}
        <section className="project-section">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="sec-title">
              <span className="sub-title">Portfolio</span>
              <h2>
                Our Completed <span>Architecture Projects</span>
              </h2>
            </div>
            <div className="carousel-content">
              <div className="five-item-carousel owl-carousel owl-theme owl-dots-none">
                {projectsList?.projectDetails?.data.map((project, index) => (
                  <div className="project-block-one" key={project?.id}>
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src={`${BASE_URL}${project?.attributes?.homeImage?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                      <div className="content-box">
                        <div className="text">
                          <h2>
                            <a href={`/projects/${project?.id}`}>
                              {project?.attributes?.name}
                            </a>
                          </h2>
                          <p>
                            <i className="far fa-map-marker-alt" />
                            {project?.attributes?.location}
                          </p>
                          <span className="big-text">0{index + 1}</span>
                        </div>
                        <div className="link">
                          <a href={`/projects/${project?.id}`}>
                            <i className="icon-7" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="more-btn centred">
              <a href="/projects" className="theme-btn btn-one">
                View All Projects
              </a>
            </div>
          </div>
        </section>
        {/* project-section end */}
        {/* clients-section */}
        <section className="clients-section">
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          />
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="auto-container">
            <div className="five-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
              {clientSection?.aboutClientSection?.data?.attributes?.aboutClientSection?.data.map(
                (client) => (
                  <figure className="clients-logo" key={client?.id}>
                    <img src={`${BASE_URL}${client?.attributes?.url}`} alt="" />
                  </figure>
                )
              )}
            </div>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const loadHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_HERO_BANNER,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadGetToKnowInfo = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_GET_TO_KNOW,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadVideos = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_VIDEOS,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadProjectsList = async () => {
  const { data } = await getClient().query({
    query: GET_PROJECTS_LIST,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadClientSection = async () => {
  const { data } = await getClient().query({
    query: GET_ABOUT_CLIENT_SECTION,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
