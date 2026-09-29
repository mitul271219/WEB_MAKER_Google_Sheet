import React, { useEffect, useRef, useState } from "react";
import './HeroSection.css';


export const HeroSection_Web = () => {

        const heroRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Website images
  const websiteImages = [
    {
      image:
        "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/1011557-640w.png",
      alt: "Real estate website design",
    },
    {
      image:
        "https://cdn.dreamtemplate.com/product/images/215/9834/20140625055007.jpg",
      alt: "Business website design",
    },
  ];

  // ===============================
  // HERO SCROLL ANIMATION
  // ===============================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentHero = heroRef.current;

    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
    };
  }, []);

  // ===============================
  // AUTO IMAGE SLIDER
  // ===============================
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % websiteImages.length;
      });
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
   <>

             <section
      ref={heroRef}
      className={`hero-section ${visible ? "hero-visible" : ""}`}
      id="home"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>

      <div className="hero-grid"></div>

      <div className="hero-container">
        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">
          {/* Badge */}
          <div className="hero-label">
            <span className="status-dot"></span>

            <span>DIGITAL PARTNERS FOR LOCAL BUSINESS</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            We build websites that <span>build businesses.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            WEB_MAKER helps local businesses create a powerful digital presence
            with modern websites, Google Business setup, WhatsApp integration
            and reliable maintenance.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              <span>Get Started</span>
              <span className="primary-arrow">↗</span>
            </a>

            <a href="#services" className="hero-secondary-btn">
              <span>Explore Services</span>
              <span className="secondary-arrow">→</span>
            </a>
          </div>

          {/* Mini Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <strong>01</strong>
              <span>Websites</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>02</strong>
              <span>Digital Growth</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>03</strong>
              <span>Support</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="hero-visual">
          <div className="image-shadow"></div>

          <div className="website-card">
            {/* Browser Top */}
            <div className="browser-bar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="browser-url">yourwebsite.com</div>

              <div className="browser-menu">•••</div>
            </div>

            {/* ================= WEBSITE IMAGE SLIDER ================= */}

            <div className="website-image-wrapper">
              <div className="website-slider">
                {websiteImages.map((item, index) => (
                  <div
                    key={index}
                    className={`website-slide ${
                      currentSlide === index ? "active" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="website-image"
                    />
                  </div>
                ))}
              </div>

              <div className="image-overlay"></div>

              {/* Slider Controls */}
              <div className="slider-controls">
                {websiteImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show website image ${index + 1}`}
                    className={`slider-dot ${
                      currentSlide === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= FLOATING CARD ================= */}

          <div className="floating-card">
            <div className="floating-icon">↗</div>

            <div>
              <span>Digital Presence</span>
              <strong>Growing Business</strong>
            </div>
          </div>

          {/* ================= SMALL FLOATING BADGE ================= */}

          <div className="floating-badge">
            <span className="badge-check">✓</span>

            <div>
              <small>Website</small>
              <strong>Ready to Grow</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line"></div>
      </div>
    </section>

   </>
  )
}
