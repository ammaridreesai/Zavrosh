import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center responsive-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Kinks</h2>
          <p className="service-desc">
            We dominate web, mobile, and emerging platforms with powerful, intelligent software that knows exactly how to please. From silky-smooth user experiences to rock-hard back-end systems, we build scalable, secure, and future-ready applications that never quit. Our work gets down with AI, cloud, and blockchain — tying together cutting-edge tech to create digital products that perform like they’re under your complete control.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-lg-3 col-sm-1">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
