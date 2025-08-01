import { Image } from "./image";
import React, { useState } from "react";

export const CategorizedGallery = (props) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorize technologies (you can adjust these based on your actual tech data)
  const categorizeData = (data) => {
    if (!data) return {};
    
    const categories = {
      frontend: ['React', 'Javascript', 'Typescript', 'Angular', 'Next JS', 'Bootstrap', 'Tailwind'],
      backend: ['Node', 'Django', 'Flask', 'Express', 'Nest JS', 'PHP', 'Python'],
      mobile: ['Flutter', 'Swift', 'Kotlin', 'Android'],
      design: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
      database: ['PostgreSQL', 'SQL', 'MongoDB'],
      cloud: ['Azure', 'AWS'],
      gamedev: ['Unity', 'Unreal', 'Blender', '3DS Max'],
      languages: ['C#', 'C++', 'Java', 'Python', 'Javascript', 'Typescript']
    };
    
    const categorized = {
      all: data,
      frontend: [],
      backend: [],
      mobile: [],
      design: [],
      database: [],
      cloud: [],
      gamedev: [],
      languages: []
    };
    
    data.forEach(tech => {
      Object.keys(categories).forEach(category => {
        if (categories[category].some(cat => tech.title.toLowerCase().includes(cat.toLowerCase()))) {
          categorized[category].push({...tech, skillLevel: Math.floor(Math.random() * 30) + 70}); // Random skill level 70-100%
        }
      });
    });
    
    return categorized;
  };

  const categorizedData = categorizeData(props.data);
  
  const categoryInfo = {
    all: { name: 'All Technologies', icon: '🌟', color: '#667eea' },
    frontend: { name: 'Frontend', icon: '🎨', color: '#e74c3c' },
    backend: { name: 'Backend', icon: '⚙️', color: '#2ecc71' },
    mobile: { name: 'Mobile', icon: '📱', color: '#f39c12' },
    design: { name: 'Design', icon: '🎯', color: '#9b59b6' },
    database: { name: 'Database', icon: '🗄️', color: '#34495e' },
    cloud: { name: 'Cloud', icon: '☁️', color: '#3498db' },
    gamedev: { name: 'Game Dev', icon: '🎮', color: '#e67e22' },
    languages: { name: 'Languages', icon: '💻', color: '#1abc9c' }
  };

  return (
    <div id="gallery" className="categorized-tech-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Technology Arsenal</h2>
          <p>Explore our expertise across different domains</p>
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {Object.keys(categoryInfo).map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={{ '--category-color': categoryInfo[category].color }}
            >
              <span className="category-icon">{categoryInfo[category].icon}</span>
              <span className="category-name">{categoryInfo[category].name}</span>
              <span className="category-count">
                {categorizedData[category]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="tech-grid">
          {categorizedData[activeCategory]?.map((tech, index) => (
            <div 
              key={`${tech.title}-${index}`} 
              className="tech-card"
              style={{ 
                '--animation-delay': `${index * 0.1}s`,
                '--skill-level': `${tech.skillLevel || 85}%`
              }}
            >
              <div className="tech-card-inner">
                <div className="tech-icon-container">
                  <Image
                    title={tech.title}
                    largeImage={tech.largeImage}
                    smallImage={tech.smallImage}
                  />
                  <div className="tech-glow"></div>
                </div>
                
                <div className="tech-info">
                  <h3 className="tech-name">{tech.title}</h3>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: tech.skillLevel ? `${tech.skillLevel}%` : '85%' }}>
                      <div className="skill-spark"></div>
                    </div>
                    <span className="skill-percentage">{tech.skillLevel || 85}%</span>
                  </div>
                </div>

                <div className="tech-overlay">
                  <div className="tech-details">
                    <span className="proficiency-label">Proficiency</span>
                    <div className="proficiency-stars">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`star ${i < Math.floor((tech.skillLevel || 85) / 20) ? 'filled' : ''}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--delay': `${i * 0.5}s`,
                '--duration': `${8 + (i % 4)}s`,
                '--size': `${4 + (i % 3)}px`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};