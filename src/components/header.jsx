import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="responsive-section magical-header">
      <div className="hero-background">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
          <div className="orb orb-5"></div>
        </div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="intro">
        <div className="overlay magical-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center intro-text magical-intro">
                <div className="title-container">
                  <h1 className="magical-title">
                    {props.data ? (
                      <span className="title-words">
                        {props.data.title.split(' ').map((word, index) => (
                          <span key={index} className={`title-word word-${index + 1}`}>
                            {word}
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className="title-word">Loading</span>
                    )}
                  </h1>
                  <div className="title-underline">
                    <div className="underline-segment segment-1"></div>
                    <div className="underline-segment segment-2"></div>
                    <div className="underline-segment segment-3"></div>
                  </div>
                </div>
                
                <p className="magical-paragraph">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                
                <div className="cta-container">
                  <a href="#about" className="btn btn-custom btn-lg page-scroll magical-cta">
                    <span className="btn-text">Learn More</span>
                    <div className="btn-particles">
                      <span className="btn-particle particle-1"></span>
                      <span className="btn-particle particle-2"></span>
                      <span className="btn-particle particle-3"></span>
                      <span className="btn-particle particle-4"></span>
                    </div>
                    <div className="btn-ripple"></div>
                  </a>
                </div>
                
                <div className="scroll-indicator">
                  <div className="scroll-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
