import React from "react";
import LazyImage from './LazyImage';

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="responsive-section magical-testimonials">
      <div className="testimonials-background">
        <div className="floating-quotes">
          <div className="quote quote-1">"</div>
          <div className="quote quote-2">"</div>
          <div className="quote quote-3">"</div>
        </div>
      </div>
      
      <div className="container">
        <div className="section-title text-center testimonials-title">
          <div className="title-icon">
            <i className="fa fa-comments"></i>
          </div>
          <h2 className="magical-testimonials-title">
            What Our Clients <span className="emphasis">*Might*</span> Say
          </h2>
          <div className="title-sparkle">✨</div>
        </div>
        
        <div className="testimonials-grid">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="testimonial-card magical-testimonial" data-testimonial={i}>
                <div className="testimonial-inner">
                  <div className="quote-mark">"</div>
                  <div className="testimonial-image magical-image">
                    <div className="image-frame"></div>
                    <LazyImage src={d.img} alt={`${d.name} testimonial photo`} className="testimonial-photo" />
                    <div className="image-glow-effect"></div>
                  </div>
                  <div className="testimonial-content magical-content">
                    <p className="testimonial-text">"{d.text}"</p>
                    <div className="testimonial-meta">
                      <div className="author-name">{d.name}</div>
                      <div className="rating">
                        <span className="star">⭐</span>
                        <span className="star">⭐</span>
                        <span className="star">⭐</span>
                        <span className="star">⭐</span>
                        <span className="star">⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-shine"></div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
