"use client";
import React from "react";
import { usePathname } from "next/navigation";

function AllServices() {
  const pathname = usePathname();

  return (
    <>
      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
        <div className="service-sidebar">
          <div className="category-widget">
            <h3>All Services</h3>
            <ul className="category-list clearfix">
              <li>
                <a
                  href="/architectural-visualization"
                  className={
                    pathname === "/architectural-visualization" ? "current" : ""
                  }
                >
                  Architectural Visualization
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/interior-visualization"
                  className={
                    pathname === "/interior-visualization" ? "current" : ""
                  }
                >
                  Interior Visualization
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/floorplans"
                  className={pathname === "/floorplans" ? "current" : ""}
                >
                  Floorplans
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/product-visualization"
                  className={
                    pathname === "/product-visualization" ? "current" : ""
                  }
                >
                  Product Visualization
                  <i className="icon-15" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServices;
