import React, { useState, useEffect, useRef } from "react";

export const TeamProfessional = (props) => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for magnetic effects
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

  return (
    <div id="team" className="professional-team-section" ref={containerRef}>
      {/* Animated Background */}
      <div className="pro-background">
        <div className="gradient-mesh">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`mesh-gradient gradient-${i + 1}`}
              style={{ '--delay': `${i * 0.5}s` }}
            />
          ))}
        </div>
        
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="float-element"
              style={{
                '--delay': `${i * 0.3}s`,
                '--duration': `${8 + (i % 4)}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="mouse-follower-pro"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-decoration">
            <div className="deco-line line-1"></div>
            <div className="deco-circle"></div>
            <div className="deco-line line-2"></div>
          </div>
          
          <h2 className="pro-title">
            <span className="title-word" style={{ '--delay': '0.1s' }}>Meet</span>
            <span className="title-word" style={{ '--delay': '0.2s' }}>Our</span>
            <span className="title-word highlight" style={{ '--delay': '0.3s' }}>Elite</span>
            <span className="title-word" style={{ '--delay': '0.4s' }}>Team</span>
          </h2>
          
          <p className="pro-subtitle">
            Exceptional talent, extraordinary results. Our team combines creativity, 
            technical excellence, and passion to deliver world-class solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className={`team-grid-pro ${isVisible ? 'grid-visible' : ''}`}>
          {props.data.map((member, index) => (
            <div
              key={`pro-${index}`}
              className={`team-card-pro ${activeCard === index ? 'active' : ''}`}
              style={{
                '--index': index,
                '--delay': `${index * 0.15}s`
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Effects */}
              <div className="card-bg-effects">
                <div className="shimmer-effect"></div>
                <div className="gradient-border"></div>
                <div className="hover-glow-pro"></div>
              </div>

              {/* Member Photo */}
              <div className="photo-container-pro">
                <div className="photo-frame">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="member-photo-pro"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="photo-fallback">
                    <div className="fallback-icon">👤</div>
                    <span>{member.name}</span>
                  </div>
                </div>
                
                <div className="photo-overlay">
                  <div className="social-icons">
                    <div className="social-icon">🔗</div>
                    <div className="social-icon">💼</div>
                    <div className="social-icon">📧</div>
                  </div>
                </div>

                {/* Floating Particles around photo */}
                <div className="photo-particles">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`photo-particle particle-${i + 1}`}
                      style={{ '--particle-delay': `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Member Info */}
              <div className="member-info-pro">
                <h3 className="member-name-pro">{member.name}</h3>
                <p className="member-role-pro">{member.job}</p>
                
                <div className="expertise-tags">
                  {['Expert', 'Leader', 'Innovator'].map((tag, i) => (
                    <span 
                      key={tag} 
                      className="expertise-tag"
                      style={{ '--tag-delay': `${i * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="member-stats-pro">
                  <div className="stat-item-pro">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat-item-pro">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
              </div>

              {/* Card Decorations */}
              <div className="card-decorations">
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
              </div>

              {/* Magnetic Lines */}
              <div className="magnetic-field">
                <div className="field-line line-1"></div>
                <div className="field-line line-2"></div>
                <div className="field-line line-3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statistics */}
        <div className={`team-overview ${isVisible ? 'overview-visible' : ''}`}>
          <div className="overview-card">
            <div className="overview-number">
              <span className="number-animate" data-target="8">0</span>
            </div>
            <div className="overview-label">Expert Team Members</div>
          </div>
          
          <div className="overview-card">
            <div className="overview-number">
              <span className="number-animate" data-target="150">0</span>+
            </div>
            <div className="overview-label">Projects Delivered</div>
          </div>
          
          <div className="overview-card">
            <div className="overview-number">
              <span className="number-animate" data-target="5">0</span>+
            </div>
            <div className="overview-label">Years Experience</div>
          </div>
          
          <div className="overview-card">
            <div className="overview-number">
              <span className="number-animate" data-target="100">0</span>%
            </div>
            <div className="overview-label">Client Satisfaction</div>
          </div>
        </div>

        {/* Interactive Quote */}
        {activeCard !== null && (
          <div className="team-quote-pro">
            <div className="quote-container">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                Excellence isn't a skill, it's an attitude. We bring passion, 
                innovation, and technical mastery to every project we touch.
              </p>
              <div className="quote-author">
                — {props.data[activeCard]?.name}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ambient Effects */}
      <div className="ambient-effects">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="ambient-dot"
            style={{
              '--delay': `${i * 0.4}s`,
              '--duration': `${6 + (i % 3)}s`,
              '--size': `${2 + (i % 2)}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};