import { Image } from "./image";
import React, { useState } from "react";

export const HexagonalGallery = (props) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div id="gallery" className="hexagonal-tech-section">
      <div className="container">
        <div className="section-title">
          <h2>Technology Ecosystem</h2>
          <p>A 3D perspective of our technical mastery</p>
        </div>

        <div className="hexagonal-grid-container">
          <div className="hexagonal-grid">
            {props.data
              ? props.data.map((tech, index) => (
                  <div
                    key={`hex-${index}`}
                    className={`hex-item hex-${index}`}
                    style={{ 
                      '--index': index,
                      '--total': props.data.length,
                      '--delay': `${index * 0.1}s` 
                    }}
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="hex-inner">
                      <div className="hex-face hex-front">
                        <div className="hex-content">
                          <div className="tech-icon-hex">
                            <Image
                              title={tech.title}
                              largeImage={tech.largeImage}
                              smallImage={tech.smallImage}
                            />
                          </div>
                          
                          <div className="hex-label">
                            <span className="tech-name-hex">{tech.title}</span>
                          </div>
                          
                          <div className="hex-glow-ring"></div>
                        </div>
                      </div>

                      <div className="hex-face hex-back">
                        <div className="hex-info">
                          <div className="tech-details-hex">
                            <h4>{tech.title}</h4>
                            <div className="proficiency-meter">
                              <div className="meter-bar">
                                <div 
                                  className="meter-fill"
                                  style={{ '--proficiency': `${Math.floor(Math.random() * 30) + 70}%` }}
                                ></div>
                              </div>
                              <span className="proficiency-text">Expert Level</span>
                            </div>
                            
                            <div className="tech-tags">
                              <span className="tag">Production Ready</span>
                              <span className="tag">5+ Years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection Lines */}
                    {hoveredTech === index && (
                      <div className="connection-web">
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={`connection-${i}`}
                            className={`connection-line line-${i + 1}`}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              : [...Array(12)].map((_, i) => (
                  <div key={`loading-${i}`} className="hex-item hex-loading">
                    <div className="hex-inner">
                      <div className="hex-face hex-front">
                        <div className="loading-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Central Core */}
          <div className="central-core-hex">
            <div className="core-rings">
              <div className="core-ring ring-1"></div>
              <div className="core-ring ring-2"></div>
              <div className="core-ring ring-3"></div>
            </div>
            <div className="core-center">
              <span className="core-text">TECH</span>
              <span className="core-subtext">CORE</span>
            </div>
          </div>

          {/* Interactive Info Panel */}
          {hoveredTech !== null && props.data && (
            <div className="info-panel">
              <div className="panel-content">
                <h3>{props.data[hoveredTech]?.title}</h3>
                <div className="tech-stats">
                  <div className="stat">
                    <span className="stat-label">Experience</span>
                    <span className="stat-value">5+ Years</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Projects</span>
                    <span className="stat-value">50+</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Expertise</span>
                    <span className="stat-value">Expert</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3D Grid Background */}
        <div className="grid-3d-background">
          <div className="grid-lines-vertical"></div>
          <div className="grid-lines-horizontal"></div>
        </div>
      </div>
    </div>
  );
};