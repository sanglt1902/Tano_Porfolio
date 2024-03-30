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
            </div>
          </div>
        </section>
        {/* error-section end */}
      </div>
    </>
  );
}

export default NotFound;
