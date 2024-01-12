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
                  href="/agency-minimal"
                  className={pathname === "/agency-minimal" ? "current" : ""}
                >
                  Agency Minimal
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/interior-design"
                  className={pathname === "/interior-design" ? "current" : ""}
                >
                  Interior Design
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/urban-design"
                  className={pathname === "/urban-design" ? "current" : ""}
                >
                  Urban Design
                  <i className="icon-15" />
                </a>
              </li>
              <li>
                <a
                  href="/decor-plan"
                  className={pathname === "/decor-plan" ? "current" : ""}
                >
                  Decor Plan
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
