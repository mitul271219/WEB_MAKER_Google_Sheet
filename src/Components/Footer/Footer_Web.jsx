import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Globe2, MessageCircle, ArrowUpRight } from "lucide-react";
import "./Footer.css";

export const Footer_Web = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    const currentFooter = footerRef.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className={`footer-section ${visible ? "footer-visible" : ""}`}
      >
        <div className="footer-container">
          {/* =========================================
            TOP FOOTER
        ========================================= */}

          <div className="footer-top">
            {/* BRAND */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-box">W</span>

                <span className="footer-logo-text">WEB_MAKER</span>
              </a>

              <p className="footer-tagline">We build your digital presence.</p>
            </div>

            {/* NAVIGATION */}
            <nav className="footer-navigation">
              <div className="footer-nav-column">
                <a href="#home">Home</a>

                <a href="#about">About</a>
              </div>

              <div className="footer-nav-column">
                <a href="#services">Services</a>

                <a href="#work">Work</a>
              </div>

              <div className="footer-nav-column">
                <a href="#pricing">Pricing</a>

                <a href="#contact">Contact</a>
              </div>
            </nav>

            {/* SOCIAL / CONTACT ICONS */}
            <div className="footer-socials">
              {/* General */}
              <a
                href="#contact"
                className="footer-social-btn"
                aria-label="Contact WEB_MAKER"
              >
                <Sparkles size={18} strokeWidth={1.6} />
              </a>

              {/* Website / Globe */}
              <a
                href="#home"
                className="footer-social-btn"
                aria-label="WEB_MAKER Website"
              >
                <Globe2 size={18} strokeWidth={1.6} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999?text=Hello%20WEB_MAKER%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {/* =========================================
            DIVIDER
        ========================================= */}

          <div className="footer-divider"></div>

          {/* =========================================
            BOTTOM FOOTER
        ========================================= */}

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 WEB_MAKER. All rights reserved.
            </p>

            <a href="#home" className="footer-intention">
              <span>Built with intention</span>

              <Sparkles size={14} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
