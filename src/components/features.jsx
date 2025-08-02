export const Features = (props) => {
  return (
    <div id="features" className="text-center responsive-section magical-features-v2">
      <div className="features-bg-wrapper">
        <div className="animated-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        <div className="floating-elements">
          <div className="floating-element el-1">💼</div>
          <div className="floating-element el-2">🚀</div>
          <div className="floating-element el-3">💡</div>
          <div className="floating-element el-4">⚡</div>
          <div className="floating-element el-5">🎯</div>
        </div>
      </div>
      
      <div className="container">
        <div className="features-header">
          <div className="section-badge">
            <span className="badge-text">Industries We Dominate</span>
            <div className="badge-glow"></div>
          </div>
          
          <h2 className="features-main-title">
            <span className="title-line">Masters of</span>
            <span className="title-line highlight-gradient">Every Domain</span>
          </h2>
          
          <p className="features-subtitle">
            From healthcare heartbeats to financial flows, we penetrate every industry 
            with precision and passion that delivers results.
          </p>
        </div>
        
        <div className="features-showcase">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="feature-showcase-item" 
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="showcase-card">
                    <div className="card-background"></div>
                    <div className="card-shine"></div>
                    
                    <div className="icon-section">
                      <div className="icon-orbit">
                        <div className="orbit-ring ring-1"></div>
                        <div className="orbit-ring ring-2"></div>
                        <div className="orbit-ring ring-3"></div>
                        <i className={`${d.icon} showcase-icon`}></i>
                      </div>
                      <div className="icon-pulse"></div>
                    </div>
                    
                    <div className="content-section">
                      <h3 className="showcase-title">{d.title}</h3>
                      <div className="title-underline"></div>
                      <p className="showcase-description">{d.text}</p>
                      
                      {/* <div className="card-action">
                        <span className="action-text">Explore Expertise</span>
                        <div className="action-arrow">→</div>
                      </div> */}
                    </div>
                    
                    <div className="card-particles">
                      <span className="particle p-1"></span>
                      <span className="particle p-2"></span>
                      <span className="particle p-3"></span>
                      <span className="particle p-4"></span>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
