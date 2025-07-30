import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center responsive-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p className="service-desc">
            We create powerful and intelligent software solutions across web, mobile, and emerging platforms. From intuitive user experiences to robust back-end systems, we deliver scalable, secure, and future-ready applications. Our work integrates AI, cloud, and blockchain technologies to build innovative, high-performance digital products.
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
