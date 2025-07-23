import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center responsive-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We craft thrilling games with dynamic AI, cross-platform performance, and engaging player experiences. Design stunning 3D worlds using Blender and Unreal Engine—realistic models to interactive spaces. Develop scalable web solutions with React.js and .NET Core, blending sleek frontends with powerful backends.
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
