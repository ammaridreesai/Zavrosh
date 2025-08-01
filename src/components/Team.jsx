import React from "react";
import LazyImage from './LazyImage';

export const Team = (props) => {
  return (
    <div id="team" className="text-center responsive-section magical-team">
      <div className="team-background">
        <div className="team-sparkles">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">⭐</div>
          <div className="sparkle sparkle-3">💫</div>
          <div className="sparkle sparkle-4">✨</div>
        </div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center section-title team-section-title">
            <div className="team-title-wrapper">
              <h2 className="magical-team-title">
                <span className="team-title-word">Meet</span>
                <span className="team-title-word highlight">the Team</span>
              </h2>
              <div className="team-title-underline"></div>
            </div>
            <p className="team-description">
              Meet the talented individuals behind our success. Our team is
              a dynamic group of professionals passionate about delivering
              innovative software and AI-driven solutions. Together, we
              strive to bring your ideas to life through cutting-edge
              technology, creativity, and collaboration.
            </p>
            
            <div className="team-grid">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      className="team-member magical-team-card"
                      data-member={i}
                    >
                      <div className="team-card-inner">
                        <div className="team-image-wrapper">
                          <div className="image-glow"></div>
                          <LazyImage
                            src={d.img}
                            alt={`${d.name} - ${d.job}`}
                            className="team-img magical-team-img"
                          />
                          <div className="hover-overlay">
                            <div className="social-links">
                              <div className="social-icon">💼</div>
                              <div className="social-icon">🚀</div>
                            </div>
                          </div>
                        </div>
                        <div className="team-info magical-team-info">
                          <h4 className="team-name">{d.name}</h4>
                          <p className="team-role">{d.job}</p>
                        </div>
                        <div className="card-particles">
                          <span className="card-particle p1"></span>
                          <span className="card-particle p2"></span>
                          <span className="card-particle p3"></span>
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
