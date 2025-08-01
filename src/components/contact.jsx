import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_4t0520f", "template_ysuvx0g", e.target, "IQRWrnLskn2jksLh4")
      .then(
        (result) => {
          setSubmitSuccess(true);
          showNotification('Message sent successfully! 🚀', 'success');
          clearState();
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          showNotification('Failed to send message. Please try again. 😢', 'error');
          console.error('EmailJS error:', error);
          setIsSubmitting(false);
        }
      );
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `magic-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };
  return (
    <div>
      <div id="contact" className="responsive-section">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title contact-hero">
                <div className="contact-title-wrapper">
                  <div className="contact-icon-group">
                    <i className="fa fa-rocket contact-icon-1"></i>
                    <i className="fa fa-heart contact-icon-2"></i>
                    <i className="fa fa-comments contact-icon-3"></i>
                  </div>
                  <h2 className="gradient-text animated-title">
                    <span className="title-line-1">Ready to Play?</span>
                    <span className="title-line-2">Let's Talk</span>
                  </h2>
                  <div className="title-underline">
                    <div className="underline-dot"></div>
                    <div className="underline-line"></div>
                    <div className="underline-dot"></div>
                  </div>
                </div>
                <p className="contact-description">
                  <i className="fa fa-magic description-icon"></i>
                  Got a question, a project, or just wanna slide into our DMs? Fill out the form below — whether you want a quickie or a long-term play, we promise to blow your mind and reply faster than your WiFi cuts out right before the best part.
                </p>
              </div>

              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button 
                  type="submit" 
                  className={`btn btn-custom btn-lg ${isSubmitting ? 'submitting' : ''} ${submitSuccess ? 'success' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending Magic...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <i className="fa fa-check"></i>
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="section-title" style={{ marginTop: "50px" }}>
                <h2>Claim Your Free Tease & Talk</h2>
                <p>
                  Let’s get intimate with your business tech needs. Book a free call with me — I’ll lock it in tight on my calendar and make sure we spark something hot, fast, and unforgettable.
                </p>
                <div className="booking-widget">
                  <iframe
                    src="https://calendly.com/syedzubair95590/kick-off" // Replace with your Calendly link
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a Free Consulting Call"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 offset-md-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
