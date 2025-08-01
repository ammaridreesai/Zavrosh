import React, { useState, useEffect } from "react";
import LazyImage from './LazyImage';

export const TeamConstellation = (props) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInteractive(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMemberClick = (member, index) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

  if (!props.data) return <div>Loading constellation...</div>;

  // Calculate orbital positions
  const getOrbitalPosition = (index, total) => {
    const angle = (360 / total) * index;
    const radius = 280 + (index % 3) * 60; // Varying orbital distances
    const speed = 30 + (index * 5); // Different orbital speeds
    return { angle, radius, speed };
  };

  return (
    <div id="team" className="constellation-team-section">
      <div className="space-background">
        <div className="nebula-clouds">
          <div className="nebula cloud-1"></div>
          <div className="nebula cloud-2"></div>
          <div className="nebula cloud-3"></div>
        </div>
        
        <div className="cosmic-dust">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="dust-particle"
              style={{
                '--delay': `${i * 0.05}s`,
                '--duration': `${15 + (i % 10)}s`,
                '--size': `${1 + (i % 2)}px`,
                '--opacity': Math.random() * 0.8
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h2 className="constellation-title">
            <span className="galaxy-word">Team</span>
            <span className="galaxy-word">Constellation</span>
          </h2>
          <p className="constellation-subtitle">
            Explore our stellar team members in their natural habitat
          </p>
        </div>

        <div className="solar-system">
          {/* Central Star (Company Core) */}
          <div className="central-star">
            <div className="star-core">
              <div className="star-flare flare-1"></div>
              <div className="star-flare flare-2"></div>
              <div className="star-flare flare-3"></div>
              <div className="star-flare flare-4"></div>
              
              <div className="star-center">
                <div className="company-logo">
                  <span className="logo-text">TEAM CORE</span>
                </div>
              </div>

              <div className="energy-rings">
                <div className="energy-ring ring-1"></div>
                <div className="energy-ring ring-2"></div>
                <div className="energy-ring ring-3"></div>
              </div>
            </div>
          </div>

          {/* Orbital Team Members */}
          <div className="orbital-system">
            {props.data.map((member, index) => {
              const orbital = getOrbitalPosition(index, props.data.length);
              const isSelected = selectedMember === index;
              
              return (
                <div
                  key={`orbit-${index}`}
                  className={`orbital-path orbit-${index}`}
                  style={{
                    '--radius': `${orbital.radius}px`,
                    '--duration': `${orbital.speed}s`,
                    '--delay': `${index * 2}s`
                  }}
                >
                  <div 
                    className={`team-planet ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleMemberClick(member, index)}
                    style={{ '--orbit-angle': `${orbital.angle}deg` }}
                  >
                    <div className="planet-atmosphere">
                      <div className="atmosphere-layer layer-1"></div>
                      <div className="atmosphere-layer layer-2"></div>
                    </div>

                    <div className="planet-surface">
                      <div className="member-avatar">
                        <LazyImage
                          src={member.img}
                          alt={member.name}
                          className="avatar-image"
                        />
                      </div>
                      
                      <div className="planet-glow"></div>
                      
                      {/* Member Info Satellite */}
                      <div className="info-satellite">
                        <div className="satellite-content">
                          <h4 className="member-name">{member.name}</h4>
                          <p className="member-role">{member.job}</p>
                        </div>
                      </div>
                    </div>

                    {/* Orbital Trail */}
                    <div className="orbital-trail">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="trail-dot"
                          style={{ '--trail-delay': `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>

                    {/* Connection Lines to Center */}
                    {isSelected && (
                      <div className="connection-beam">
                        <div className="beam-particles">
                          {[...Array(12)].map((_, i) => (
                            <div 
                              key={i} 
                              className="beam-particle"
                              style={{ '--particle-delay': `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Guide */}
          {isInteractive && (
            <div className="interaction-guide">
              <div className="guide-pulse"></div>
              <span>Click any team member to explore</span>
            </div>
          )}
        </div>

        {/* Selected Member Details Panel */}
        {selectedMember !== null && (
          <div className="member-details-panel">
            <div className="panel-background">
              <div className="panel-stars">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="panel-star"></div>
                ))}
              </div>
            </div>
            
            <div className="panel-content">
              <div className="member-spotlight">
                <div className="spotlight-image">
                  <LazyImage
                    src={props.data[selectedMember].img}
                    alt={props.data[selectedMember].name}
                    className="spotlight-avatar"
                  />
                  <div className="spotlight-ring"></div>
                </div>
                
                <div className="spotlight-info">
                  <h3>{props.data[selectedMember].name}</h3>
                  <h4>{props.data[selectedMember].job}</h4>
                  
                  <div className="member-bio">
                    <p>A stellar professional bringing expertise and innovation to every project. 
                       Leading our team with dedication and technical excellence.</p>
                  </div>
                  
                  <div className="member-achievements">
                    <div className="achievement">
                      <span className="achievement-icon">🚀</span>
                      <span className="achievement-text">5+ Years Experience</span>
                    </div>
                    <div className="achievement">
                      <span className="achievement-icon">⭐</span>
                      <span className="achievement-text">50+ Projects Completed</span>
                    </div>
                    <div className="achievement">
                      <span className="achievement-icon">🏆</span>
                      <span className="achievement-text">Industry Expert</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                className="close-panel"
                onClick={() => setSelectedMember(null)}
              >
                <span className="close-icon">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Constellation Map */}
        <div className="constellation-map">
          <div className="map-title">Team Constellation Map</div>
          <div className="mini-members">
            {props.data.map((member, index) => (
              <div
                key={`mini-${index}`}
                className={`mini-member ${selectedMember === index ? 'active' : ''}`}
                onClick={() => handleMemberClick(member, index)}
              >
                <div className="mini-avatar">
                  <LazyImage src={member.img} alt={member.name} />
                </div>
                <span className="mini-name">{member.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};