import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p style={{marginBottom: "20px"}}>
            Meet the crew that knows how to take your projects by the reins and drive them hard. We’re passionate tech maestros who don’t just build software — we tease, shape, and perfect every line until it delivers a full-blown digital orgasm of performance and satisfaction.
            Fueled by creativity and cutting-edge technology, we dive deep, push limits, and bring your wildest ideas to life with precision and flair. When you work with us, expect a ride that’s intense, exciting, and impossible to forget.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6">
                  <div>
                    {" "}
                    <img src={d.img} alt="..." />
                    <div >
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
