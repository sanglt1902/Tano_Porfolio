import React from "react";

function ScrollToTop() {
  return (
    <>
      {/*Scroll to top*/}
      <div className="scroll-to-top">
        <div>
          <div className="scroll-top-inner">
            <div className="scroll-bar">
              <div className="bar-inner" />
            </div>
            <div className="scroll-bar-text">Go To Top</div>
          </div>
        </div>
      </div>
      {/* Scroll to top end */}
    </>
  );
}

export default ScrollToTop;
