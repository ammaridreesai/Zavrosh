import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Portfolio = (props) => {
  const [selectedNiche, setSelectedNiche] = useState("Web/App Development"); // Default niche
  const [filteredData, setFilteredData] = useState([]);
  const swiperRef = useRef(null);
  const [changeSlide, setChangeSlide] = useState(false);

  useEffect(() => {
    // Filter data based on the selected niche
    if (props.data && props.data[selectedNiche]) {
      setFilteredData(props.data[selectedNiche]);
      setChangeSlide(!changeSlide);
    }
  }, [selectedNiche, props.data]);
  useEffect(() => {
    changeSlide
      ? swiperRef.current?.slideNext()
      : swiperRef.current?.slidePrev();
  }, [changeSlide]);

  return (
    <div id="portfolio" className="responsive-section">
      <div className="section-title">
        <h2>Our Portfolio</h2>
      </div>

      {/* Niche Selector */}
      {/*<div className="niche-selector">*/}
      {/*  {Object.keys(props.data || {}).map((niche, index) => (*/}
      {/*    <button*/}
      {/*      key={index}*/}
      {/*      onClick={() => setSelectedNiche(niche)}*/}
      {/*      className={selectedNiche === niche ? "active" : ""}*/}
      {/*    >*/}
      {/*      {niche}*/}
      {/*    </button>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 100000000000000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance
        }}
      >
        {filteredData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-item-r">
              <h3>{item.title}</h3>
              <div className="media-container">
                {item.media.type === "image" ? (
                  <img
                    src={item.media.src}
                    alt={item.title}
                    className="media stylish-media"
                  />
                ) : (
                  <video
                    key={item.media.src}
                    controls
                    muted
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    className="media stylish-media"
                  >
                    <source src={item.media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="technologies">
                {item.technologies.map((tech, techIndex) => (
                  <img key={techIndex} src={tech.icon} alt={tech.name} />
                ))}
              </div>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
