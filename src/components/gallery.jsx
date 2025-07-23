import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="tech-stack" className="text-center responsive-section">
      <div className="container">
        <div className="section-title">
          <h2>Technology Stack At Your Disposal</h2>
        </div>
        <div className="row">
          <div className="portfolio-items ">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-3 col-md-2 col-lg-1 main-gallery-item" // Adjusted grid classes

                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
