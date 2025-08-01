import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center responsive-section">
      <div className="services-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="section-title services-hero">
          <div className="kinks-title-wrapper">
            <div className="title-decorations">
              <div className="deco-line deco-line-left"></div>
              <div className="deco-diamond"></div>
              <div className="deco-line deco-line-right"></div>
            </div>
            <h2 className="kinks-title">
              <span className="kinks-word kinks-our">Our</span>
              <span className="kinks-word kinks-main">Kinks</span>
            </h2>
            <div className="title-glow"></div>
          </div>
          <p className="service-desc kinks-description">
            <span className="highlight-text">We dominate</span> web, mobile, and emerging platforms with powerful, intelligent software that knows exactly how to please. From <span className="highlight-text">silky-smooth</span> user experiences to <span className="highlight-text">rock-hard</span> back-end systems, we build scalable, secure, and future-ready applications that never quit. Our work gets down with AI, cloud, and blockchain — tying together cutting-edge tech to create digital products that perform like they're under your <span className="highlight-text">complete control</span>.
          </p>
        </div>
        
        <div className="services-grid">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="service-card" data-tilt>
                <div className="service-inner">
                  <div className="service-icon-wrapper">
                    <div className="icon-glow"></div>
                    <i className={d.icon} data-service-icon></i>
                    <div className="icon-particles">
                      <span className="particle particle-1"></span>
                      <span className="particle particle-2"></span>
                      <span className="particle particle-3"></span>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{d.name}</h3>
                    <p className="service-text">{d.text}</p>
                  </div>
                  <div className="service-overlay"></div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
