import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import LazyImage from './LazyImage';

const Portfolio = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);



  if(!props.portfolioData){
    return null
  }
  return (
    <>
    <section id="portfolio" className="portfolio-section">
     <div className="section-title text-center">
          <h2>Our Portfolio</h2>
        </div>
      <div className="portfolio-slider-container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 400000,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="portfolio-swiper"
        >
          {props.portfolioData.map((project, projectIndex) => (
            <SwiperSlide key={projectIndex}>
              <div
                className="portfolio-item"
                onClick={() => setSelectedProject(project)}
              >
                {/* Conditional rendering for slider or single media */}
                {project.media.length > 1 ? (
                  <MediaSlider media={project.media} title={project.title} />
                ) : (
                  <div className="portfolio-media-container">
                    {project.media[0].type === "video" ? (
                      <video
                        controls
                        src={project.media[0].src}
                        className="portfolio-media video"
                        aria-label={`${project.title} demonstration video`}
                      >
                        <p>Your browser doesn't support HTML5 video. <a href={project.media[0].src}>Download the video</a> instead.</p>
                      </video>
                    ) : (
                      <LazyImage
                        src={project.media[0].src}
                        alt={`${project.title} project screenshot`}
                        className={`portfolio-media image ${
                          project.media[0].isLong ? "long-image" : ""
                        }`}
                      />
                    )}
                  </div>
                )}

                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <div className="portfolio-tech-item" key={techIndex}>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="tech-icon"
                        />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    {selectedProject && (
  <div className="portfolio-modal">
    <div className="modal-content">
      <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>

      <h3>{selectedProject.title}</h3>
      

      {selectedProject.media.length > 1 ? (
        <MediaSlider media={selectedProject.media} title={selectedProject.title} inModal={true}/>
      ) : (
        <div className="in-modal portfolio-media-container">
          {selectedProject.media[0].type === 'video' ? (
            <video controls src={selectedProject.media[0].src} className="portfolio-media video" aria-label={`${selectedProject.title} demonstration video`}>
              <p>Your browser doesn't support HTML5 video. <a href={selectedProject.media[0].src}>Download the video</a> instead.</p>
            </video>
          ) : (
            <LazyImage
              src={selectedProject.media[0].src}
              alt={`${selectedProject.title} project screenshot`}
              className={`portfolio-media image ${selectedProject.media[0].isLong ? 'long-image' : ''}`}
            />
          )}
        </div>
      )}
      <p className="modal-text">{selectedProject.description}</p>
    </div>
    <div className="modal-backdrop" onClick={() => setSelectedProject(null)}></div>
  </div>
)}
    </>
  );
};

const MediaSlider = ({ media, title, inModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + media.length) % media.length);
  };

  return (
    <div className="portfolio-media-slider">
      {media.length > 1 && ( // Show navigation only if there's more than one media item
        <>
          <button
            className="slider-arrow prev-arrow"
            onClick={(e) => {
              e.stopPropagation(); // prevent parent onClick
              goToPrevSlide();
            }}
          >
            &#10094;
          </button>
          <button
            className="slider-arrow next-arrow"
            onClick={(e) => {
              e.stopPropagation(); // prevent parent onClick
              goToNextSlide();
            }}
          >
            &#10095;
          </button>
        </>
      )}
      <div className="slider-content">
        {media.map((mediaItem, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }} // For horizontal slide
          >
            {mediaItem.type === "video" ? (
              <video
                controls
                src={mediaItem.src}
                className="slider-media video"
                aria-label={`${title} demonstration video ${index + 1}`}
              >
                <p>Your browser doesn't support HTML5 video. <a href={mediaItem.src}>Download the video</a> instead.</p>
              </video>
            ) : (
              <LazyImage
                src={mediaItem.src}
                alt={`${title} project screenshot ${index + 1}`}
                className={`slider-media image ${mediaItem.isLong ? "long-image" : ""} ${inModal ? "in-modal" : ""}`}
              />
            )}
          </div>
        ))}
      </div>
      {media.length > 1 && (
        <div className="slider-dots">
          {media.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // prevent parent onClick
                setCurrentSlide(index);
              }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};





export default Portfolio;
