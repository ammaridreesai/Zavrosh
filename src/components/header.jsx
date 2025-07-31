import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="responsive-section">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
