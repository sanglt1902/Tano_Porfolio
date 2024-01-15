import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SearchPopup from "../components/SearchPopup";
import SidebarCartItem from "../components/SidebarCartItem";

function Contact() {
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
                backgroundImage:
                  "url(assets/images/background/page-title-10.jpg)",
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
            <div className="row align-items-center">
              {/* <div className="col-lg-5 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                  <div className="sec-title">
                    <span className="sub-title">Contact Us</span>
                    <h2>Do you need any help? Send Message.</h2>
                  </div>
                  <form
                    method="post"
                    action="sendemail.php"
                    id="contact-form"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          required=""
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          required=""
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email *"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Message here"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          className="theme-btn btn-one"
                          type="submit"
                          name="submit-form"
                        >
                          Message Us
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <figure className="logo">
                    <a href="#">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                      nisl tincidunt tristique egestas non vitae. Pulvinar quis
                      duis leo in quis arcu enim. Vulputate velit mattis
                      tincidunt nunc sed mauris, sit amet ullamcorper.
                      Ullamcorper nunc mauris nunc proin sollicitudin mattis
                      viverra purus congue.
                    </p>
                  </div>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="icon-17" />
                      <a href="tel:0394438632">0394438632</a>
                    </li>
                    <li>
                      <i className="icon-18" />
                      <a href="mailto:tanodesign@gmail.com">
                        tanodesign@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      87 Lê Văn Huân, phường 13, quận Tân Bình <br />
                      Thành phố Hồ Chí Minh, Việt Nam
                    </li>
                  </ul>
                </div>
              </div>
              {/* google-map-section */}
              <section className="google-map-section col-lg-6 col-md-12 col-sm-12">
                <div className="map-inner">
                  {/* <div
                className="google-map"
                id="contact-google-map"
                data-map-lat="10.805276438939202"
                data-map-lng="106.64087302506933"
                data-icon-path="assets/images/icons/map-marker.png"
                data-map-title="Ward 13, Tan Binh District, Ho Chi Minh City, Vietnam"
                data-map-zoom={12}
                data-markers='{
                      "marker-1": [10.805276438939202, 106.64087302506933, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                  }'
              ></div> */}
                  <iframe
                    className="google-map"
                    id="contact-google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.081761073718!2d106.6382873757362!3d10.805049858663697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295acca758a5%3A0xac1a35618ce61a3a!2zODcgTMOqIFbEg24gSHXDom4sIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705316391742!5m2!1svi!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
              {/* google-map-section */}
            </div>
          </div>
        </section>
        {/* contact-page-section end */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default Contact;
