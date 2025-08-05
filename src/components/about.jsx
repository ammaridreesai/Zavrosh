import React from "react";
import LazyImage from "./LazyImage";

export const About = (props) => {
  return (
    <div id="about" className="responsive-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <LazyImage
              src="img/aboutus.png"
              className="img-fluid bg-black"
              alt="Zavrosh company logo"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
