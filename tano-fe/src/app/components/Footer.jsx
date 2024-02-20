import Image from "next/image";
import { GET_FOOTER_IMAGES } from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

async function Footer() {
  const images = await loadData();
  const footerImages = images?.footerImage?.data?.attributes?.footerImages;

  return (
    <>
      {/* main-footer */}
      <footer className="main-footer">
        <figure className="image-layer-1">
          <Image
            src={`${BASE_URL}${footerImages?.data[0]?.attributes?.url}`}
            unoptimized
            width={149}
            height={149}
            alt="Footer Image 1"
          />
        </figure>
        <figure className="image-layer-2">
          <Image
            src={`${BASE_URL}${footerImages?.data[1]?.attributes?.url}`}
            unoptimized
            width={231}
            height={231}
            alt="Footer Image 2"
          />
        </figure>
        <figure className="image-layer-3">
          <Image
            src={`${BASE_URL}${footerImages?.data[2]?.attributes?.url}`}
            unoptimized
            width={231}
            height={231}
            alt="Footer Image 3"
          />
        </figure>
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${BASE_URL}${images?.footerImage?.data?.attributes?.background?.data?.attributes?.url})`,
          }}
        />
        <div className="large-container">
          <div className="sec-title centred">
            <span className="sub-title">Contact Us</span>
            <h2>Do you need any help?</h2>
            <a href="/">
              <i className="icon-7" />
            </a>
          </div>
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="contact-widget footer-widget">
                  <div className="widget-title">
                    <h3>Office Info</h3>
                  </div>
                  <div className="widget-content">
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
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 offset-xl-3 footer-column">
                <div className="subscribe-widget footer-widget">
                  <div className="widget-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    {/* <form action="contact.html" method="post">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                        <button type="submit">Send</button>
                      </div>
                    </form> */}
                    <ul className="social-links clearfix">
                      <li>
                        <h4>Social Network :</h4>
                      </li>
                      <li>
                        <a href="/">
                          <i className="icon-3" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="icon-4" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="icon-5" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#" className="fab fa-linkedin-in" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-bottom centred">
            <div className="copyright">
              <h4>
                Copyright By © <a href="/">Inventarc</a> - 2024
              </h4>
            </div>
          </div> */}
        </div>
      </footer>
      {/* main-footer end */}
    </>
  );
}

export default Footer;

const loadData = async () => {
  const { data } = await getClient().query({
    query: GET_FOOTER_IMAGES,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};
