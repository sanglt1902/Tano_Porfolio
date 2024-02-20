import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

import { GET_CONTACT_HERO_BANNER } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function Contact() {
  const heroBanner = await loadHeroBanner();

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
                backgroundImage: `url(${BASE_URL}${heroBanner?.contactHeroBanner?.data?.attributes?.contactHeroBanner?.data?.attributes?.url})`,
              }}
            />
            <div className="large-container">
              <div className="title-box">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}
        {/* contact-page-section */}
        <section className="contact-page-section">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
          />
          <div className="large-container">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-4 content-column">
              <div className="content-box">
                <figure className="logo">
                  <a href="#">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </figure>
                <div className="text">
                  <p>
                    Tano Studio welcomes inquiries and collaboration
                    opportunities from clients and partners seeking innovative
                    architectural and design solutions. With a commitment to
                    excellence and a passion for creativity, we strive to exceed
                    expectations and deliver transformative outcomes for every
                    project. Whether you&apos;re an individual homeowner
                    embarking on a renovation journey or a commercial developer
                    planning a large-scale construction endeavor, our team is
                    here to guide you through the process with professionalism
                    and expertise. Contact us today to discuss your project
                    requirements, and let&apos;s embark on a journey to bring
                    your vision to life.
                  </p>
                </div>
                <ul className="info-list clearfix">
                  <li>
                    <i className="icon-17" />
                    <a href="tel:0394438632">039 443 8632</a>
                  </li>
                  <li>
                    <i className="icon-18" />
                    <a href="mailto:tano-studio@gmail.com">
                      tano-studio@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    123 Main Street, Luton Town, USA
                  </li>
                </ul>
              </div>
            </div>
            {/* google-map-section */}
            <section className="google-map-section col-lg-12 col-md-12 col-sm-12">
              <div className="map-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8461894952356!2d-74.36187212491225!3d40.52289064917267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c82d29c39ead%3A0x2dd9cbf8366d1316!2s123%20Main%20St%2C%20Edison%2C%20NJ%2008817%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1708435058145!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
            {/* google-map-section */}
          </div>
        </section>
        {/* contact-page-section end */}
        <ScrollToTop />
      </div>
    </>
  );
}

const loadHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_CONTACT_HERO_BANNER,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
