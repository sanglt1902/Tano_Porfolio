import React from "react";

function Loader() {
  return (
    <>
      {/* mouse-pointer */}
      <div className="mouse-pointer" id="mouse-pointer" />
      {/* mouse-pointer end */}
      {/* preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="t" className="letters-loading">
                  t
                </span>
                <span data-text-preloader="a" className="letters-loading">
                  a
                </span>
                <span data-text-preloader="n" className="letters-loading">
                  n
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  o
                </span>
                <span data-text-preloader="-" className="letters-loading">
                  -
                </span>
                <span data-text-preloader="s" className="letters-loading">
                  s
                </span>
                <span data-text-preloader="t" className="letters-loading">
                  t
                </span>
                <span data-text-preloader="u" className="letters-loading">
                  u
                </span>
                <span data-text-preloader="d" className="letters-loading">
                  d
                </span>
                <span data-text-preloader="i" className="letters-loading">
                  i
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  o
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* preloader end */}
    </>
  );
}

export default Loader;
