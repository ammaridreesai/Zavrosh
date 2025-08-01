import React, { useState, useEffect } from "react";
import LazyImage from './LazyImage';

export const TeamCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating || !props.data) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % props.data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, props.data]);

  const handleMemberClick = (index) => {
    setActiveIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000); // Resume after 10s
  };

  if (!props.data) return <div>Loading team...</div>;

  return (
    <div id="team" className="carousel-team-section">
      <div className="cosmic-background">
        <div className="stars-field">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="star" 
              style={{
                '--delay': `${i * 0.1}s`,
                '--duration': `${3 + (i % 4)}s`,
                '--size': `${1 + (i % 3)}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h2 className="carousel-title">
            <span className="word">Meet</span>
            <span className="word highlight">Our</span>
            <span className="word">Stellar</span>
            <span className="word">Team</span>
          </h2>
          <p className="carousel-subtitle">
            Navigate through our constellation of talented professionals
          </p>
        </div>

        <div className="carousel-container">
          <div 
            className="team-carousel"
            style={{ '--active-index': activeIndex }}
          >
            {props.data.map((member, index) => {
              const angle = (360 / props.data.length) * index;
              const isActive = index === activeIndex;
              const offset = (index - activeIndex + props.data.length) % props.data.length;
              
              return (
                <div
                  key={`member-${index}`}
                  className={`carousel-member ${isActive ? 'active' : ''}`}
                  style={{
                    '--angle': `${angle}deg`,
                    '--offset': offset,
                    '--total': props.data.length
                  }}
                  onClick={() => handleMemberClick(index)}
                >
                  <div className="member-card">
                    <div className="card-glow"></div>
                    <div className="member-image-container">
                      <div className="image-ring"></div>
                      <LazyImage
                        src={member.img}
                        alt={member.name}
                        className="member-image"
                      />
                      <div className="member-aura"></div>
                    </div>
                    
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.job}</p>
                      
                      {isActive && (
                        <div className="member-details">
                          <div className="skill-tags">
                            <span className="skill-tag">Expert</span>
                            <span className="skill-tag">Leader</span>
                          </div>
                          <div className="member-stats">
                            <div className="stat">
                              <span className="stat-number">5+</span>
                              <span className="stat-label">Years</span>
                            </div>
                            <div className="stat">
                              <span className="stat-number">50+</span>
                              <span className="stat-label">Projects</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="card-particles">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`particle particle-${i + 1}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button 
              className="control-btn prev"
              onClick={() => handleMemberClick((activeIndex - 1 + props.data.length) % props.data.length)}
            >
              <span className="btn-icon">◀</span>
            </button>
            
            <div className="member-indicators">
              {props.data.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleMemberClick(index)}
                >
                  <div className="indicator-pulse"></div>
                </div>
              ))}
            </div>
            
            <button 
              className="control-btn next"
              onClick={() => handleMemberClick((activeIndex + 1) % props.data.length)}
            >
              <span className="btn-icon">▶</span>
            </button>
          </div>

          {/* Active Member Spotlight */}
          <div className="member-spotlight">
            <div className="spotlight-content">
              <h2>{props.data[activeIndex]?.name}</h2>
              <h3>{props.data[activeIndex]?.job}</h3>
              <div className="spotlight-description">
                <p>Leading our team with expertise and innovation, bringing years of experience to every project.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-rotation indicator */}
        <div className="rotation-status">
          <div className={`rotation-indicator ${isAutoRotating ? 'active' : 'paused'}`}>
            <span className="indicator-text">
              {isAutoRotating ? '🔄 Auto-rotating' : '⏸️ Paused'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};