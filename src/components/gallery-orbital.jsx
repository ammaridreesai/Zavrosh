import { Image } from "./image";
import React from "react";

export const OrbitalGallery = (props) => {
  return (
    <div id="gallery" className="orbital-tech-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Technology Universe</h2>
          <p>Explore our constellation of cutting-edge technologies</p>
        </div>

        <div className="orbital-container">
          {/* Central Hub */}
          <div className="central-hub">
            <div className="hub-core">
              <div className="pulse-ring"></div>
              <div className="pulse-ring pulse-ring-2"></div>
              <div className="hub-text">
                <span className="hub-title">TECH</span>
                <span className="hub-subtitle">STACK</span>
              </div>
            </div>
          </div>

          {/* Orbital Rings */}
          <div className="orbital-ring ring-1">
            {props.data
              ? props.data.slice(0, 6).map((d, i) => (
                  <div 
                    key={`orbit-1-${i}`} 
                    className={`orbital-tech orbit-item-${i + 1}`}
                    style={{ '--delay': `${i * 0.5}s` }}
                  >
                    <div className="tech-sphere">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                      <div className="tech-tooltip">
                        <span>{d.title}</span>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>

          <div className="orbital-ring ring-2">
            {props.data
              ? props.data.slice(6, 12).map((d, i) => (
                  <div 
                    key={`orbit-2-${i}`} 
                    className={`orbital-tech orbit-item-${i + 1}`}
                    style={{ '--delay': `${(i * 0.7) + 3}s` }}
                  >
                    <div className="tech-sphere">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                      <div className="tech-tooltip">
                        <span>{d.title}</span>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>

          <div className="orbital-ring ring-3">
            {props.data
              ? props.data.slice(12).map((d, i) => (
                  <div 
                    key={`orbit-3-${i}`} 
                    className={`orbital-tech orbit-item-${i + 1}`}
                    style={{ '--delay': `${(i * 0.9) + 6}s` }}
                  >
                    <div className="tech-sphere">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                      <div className="tech-tooltip">
                        <span>{d.title}</span>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>

          {/* Connecting Lines */}
          <svg className="connection-lines" viewBox="0 0 800 800">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            {/* Add dynamic connecting lines here */}
          </svg>
        </div>
      </div>
    </div>
  );
};