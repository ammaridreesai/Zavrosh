import React, { useState, useEffect, useRef } from "react";
import LazyImage from './LazyImage';

export const TeamFloating = (props) => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (!props.data) return <div>Loading team...</div>;

  // Debug: Log the team data
  console.log('TeamFloating - Team data:', props.data);
  
  return (
    <div id="team" className="floating-team-section" ref={containerRef}>
      {/* Dynamic Background */}
      <div className="floating-background">
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        <div className="mesh-gradient">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="mesh-point"
              style={{
                '--delay': `${i * 0.2}s`,
                '--duration': `${8 + (i % 4)}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>

      <div className="container">
        <div className="section-title">
          <h2 className="floating-title">
            <span className="title-line">Meet Our</span>
            <span className="title-line highlight">Extraordinary Team</span>
          </h2>
          <p className="floating-subtitle">
            Talented individuals crafting digital excellence through innovation and expertise
          </p>
        </div>

        <div className="floating-grid">
          {props.data.map((member, index) => {
            console.log(`TeamFloating - Member ${index}:`, member.name, 'Image:', member.img);
            return (
            <div
              key={`floating-${index}`}
              className={`floating-card ${hoveredMember === index ? 'active' : ''}`}
              style={{
                '--index': index,
                '--delay': `${index * 0.1}s`,
                '--x-offset': `${(index % 3) * 20 - 20}px`,
                '--y-offset': `${Math.floor(index / 3) * 15 - 15}px`
              }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card Background Effects */}
              <div className="card-aurora">
                <div className="aurora-layer layer-1"></div>
                <div className="aurora-layer layer-2"></div>
                <div className="aurora-layer layer-3"></div>
              </div>

              <div className="card-content">
                {/* Member Image */}
                <div className="image-container">
                  <div className="image-frame" style={{ 
                    position: 'relative',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f0f0f0'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#ff0000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      textAlign: 'center'
                    }}>
                      TEST<br/>{member.name}<br/>{member.img}
                    </div>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="member-photo"
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        zIndex: 10
                      }}
                      onError={(e) => {
                        console.log('Team image FAILED to load:', member.img);
                        e.target.style.display = 'none';
                      }}
                      onLoad={(e) => {
                        console.log('Team image LOADED successfully:', member.img);
                        e.target.previousElementSibling.style.display = 'none';
                      }}
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="social-links">
                          <div className="social-link">💼</div>
                          <div className="social-link">🔗</div>
                          <div className="social-link">📧</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="floating-elements">
                    <div className="floating-icon icon-1">⭐</div>
                    <div className="floating-icon icon-2">💡</div>
                    <div className="floating-icon icon-3">🚀</div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.job}</p>
                  
                  <div className="member-stats">
                    <div className="stat-item">
                      <span className="stat-icon">📊</span>
                      <span className="stat-text">Expert</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🎯</span>
                      <span className="stat-text">5+ Years</span>
                    </div>
                  </div>

                  {/* Skill Indicators */}
                  <div className="skill-indicators">
                    {['Leadership', 'Innovation', 'Excellence'].map((skill, i) => (
                      <div 
                        key={skill} 
                        className="skill-dot"
                        style={{ '--skill-delay': `${i * 0.2}s` }}
                      >
                        <span className="skill-tooltip">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Particles */}
                <div className="card-particles">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`card-particle particle-${i + 1}`}
                      style={{ '--particle-delay': `${i * 0.3}s` }}
                    ></div>
                  ))}
                </div>

                {/* Magnetic Lines */}
                <div className="magnetic-lines">
                  <div className="magnetic-line line-1"></div>
                  <div className="magnetic-line line-2"></div>
                  <div className="magnetic-line line-3"></div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="hover-glow"></div>
            </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="team-stats">
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedication</div>
          </div>
        </div>

        {/* Interactive Quote */}
        {hoveredMember !== null && (
          <div className="member-quote">
            <div className="quote-content">
              <div className="quote-text">
                "Innovation and dedication drive everything we do. Together, we create digital experiences that matter."
              </div>
              <div className="quote-author">
                - {props.data[hoveredMember]?.name}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ambient Particles */}
      <div className="ambient-particles">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="ambient-particle"
            style={{
              '--delay': `${i * 0.2}s`,
              '--duration': `${10 + (i % 5)}s`,
              '--size': `${2 + (i % 3)}px`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};