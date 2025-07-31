import React from "react";
import LazyImage from './LazyImage';

export const Team = (props) => {
  return (
    <div id="team" className="text-center responsive-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center section-title">
            <div className="row justify-content-center">
              <div className="col-12 text-center section-title">
                <h2>Meet the Team</h2>
                <p>
                  Meet the talented individuals behind our success. Our team is
                  a dynamic group of professionals passionate about delivering
                  innovative software and AI-driven solutions. Together, we
                  strive to bring your ideas to life through cutting-edge
                  technology, creativity, and collaboration.
                </p>
              </div>
            </div>
            <div id="row">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      className="col-lg-3 col-md-6 col-sm-6 col-6 team-member"
                    >
                      <div className="team-card">
                        <div className="team-image-wrapper">
                          <LazyImage
                            src={d.img}
                            alt={`${d.name} - ${d.job}`}
                            className="team-img"
                          />
                        </div>
                        <div className="team-info">
                          <h4 className="team-name">{d.name}</h4>
                          <p className="team-role">{d.job}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
