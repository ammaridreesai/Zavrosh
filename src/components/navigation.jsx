export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top magical-nav">
      <div className="nav-particles">
        <div className="particle nav-particle-1"></div>
        <div className="particle nav-particle-2"></div>
        <div className="particle nav-particle-3"></div>
      </div>
      
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed magical-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar magical-bar"></span>
            <span className="icon-bar magical-bar"></span>
            <span className="icon-bar magical-bar"></span>
          </button>
          <a className="navbar-brand page-scroll magical-brand" href="#page-top">
            <div className="logo-wrapper">
              <img
                src="img/logo.svg"
                alt="Zavrosh Company Logo"
                className="magical-logo"
              />
              <div className="logo-glow"></div>
            </div>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right magical-nav-list">
            <li className="nav-item">
              <a href="#features" className="page-scroll magical-nav-link">
                <span className="nav-text">Features</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="page-scroll magical-nav-link">
                <span className="nav-text">About</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="page-scroll magical-nav-link">
                <span className="nav-text">Services</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="page-scroll magical-nav-link">
                <span className="nav-text">Portfolio</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="page-scroll magical-nav-link">
                <span className="nav-text">Tech Stack</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="page-scroll magical-nav-link">
                <span className="nav-text">Testimonials</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="page-scroll magical-nav-link">
                <span className="nav-text">Team</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="page-scroll magical-nav-link contact-special">
                <span className="nav-text">Contact</span>
                <div className="nav-hover-effect special-effect"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
