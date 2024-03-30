import React from "react";

function SearchPopup() {
  return (
    <>
      {/*Search Popup*/}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <a href="/">
                <img src="/assets/images/logo.png" alt="" />
              </a>
            </figure>
            <div className="close-search pull-right">
              <span className="far fa-times" />
            </div>
          </div>
          <div className="overlay-layer" />
          <div className="auto-container">
            <div className="search-form">
              <form method="post" action="/">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      defaultValue=""
                      placeholder="Type your keyword and hit"
                      required=""
                    />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPopup;
