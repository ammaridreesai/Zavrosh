import React, { useState, useEffect, Suspense } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { TeamProfessional as Team } from './components/Team-Professional';

// Lazy load components
const Header = React.lazy(() =>
  import("./components/header").then((module) => ({ default: module.Header }))
);
const Features = React.lazy(() =>
  import("./components/features").then((module) => ({
    default: module.Features,
  }))
);
const About = React.lazy(() =>
  import("./components/about").then((module) => ({ default: module.About }))
);
const Services = React.lazy(() =>
  import("./components/services").then((module) => ({
    default: module.Services,
  }))
);
const Portfolio = React.lazy(() => import("./components/portfolio"));
const Gallery = React.lazy(() =>
  import("./components/gallery-orbital").then((module) => ({ default: module.OrbitalGallery }))
);
const Contact = React.lazy(() =>
  import("./components/contact").then((module) => ({ default: module.Contact }))
);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  if (!landingPageData || Object.keys(landingPageData).length === 0) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="root">
      <Navigation />
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Header...
          </div>
        }
      >
        <Header data={landingPageData.Header} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Features...
          </div>
        }
      >
        <Features data={landingPageData.Features} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading About...
          </div>
        }
      >
        <About data={landingPageData.About} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Services...
          </div>
        }
      >
        <Services data={landingPageData.Services} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Portfolio...
          </div>
        }
      >
        <Portfolio portfolioData={landingPageData.Portfolio} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Tech Stack...
          </div>
        }
      >
        <Gallery data={landingPageData.Gallery} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Team...
          </div>
        }
      >
        <Team data={landingPageData.Team} />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-section">
            <div className="loading-spinner"></div> Loading Contact...
          </div>
        }
      >
        <Contact data={landingPageData.Contact} />
      </Suspense>
    </div>
  );
};

export default App;
