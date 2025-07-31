import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="gallery" className="tech-stack-section">
      <div className="container">
        <div className="section-title">
          <h2>Technology Stack At Your Disposal</h2>
        </div>

        <div className="tech-stack-gallery">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="tech-item">
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                  <span className="tech-title">{d.title}</span>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
