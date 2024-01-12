import Loader from "./components/Loader";
import MainHeader from "./components/MainHeader";
import SearchPopup from "./components/SearchPopup";
import SidebarCartItem from "./components/SidebarCartItem";

function NotFound() {
  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        <SearchPopup />
        <SidebarCartItem />
        <MainHeader />
        {/* error-section */}
        <section className="error-section centred">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(assets/images/background/error-bg.jpg)",
            }}
          />
          <div className="auto-container">
            <div className="inner-box">
              <h2>404</h2>
              <h3>Sorry We Can&apos;t Find That Page!</h3>
              <h4>
                Thi page you are looking for was moved, removed, renamed or
                never existed
              </h4>
              <div className="form-inner">
                <form action="error.html" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      required=""
                    />
                    <button type="submit">
                      <i className="icon-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* error-section end */}
      </div>
    </>
  );
}

export default NotFound;
