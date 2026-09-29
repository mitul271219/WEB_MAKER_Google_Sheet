import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import "./CTA.css";

export const CTA_Web = () => {
  const ctaRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    const currentSection = ctaRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={ctaRef}
        className={`cta-section ${visible ? "cta-visible" : ""}`}
      >
        {/* Background Glow */}
        <div className="cta-glow"></div>

        <div className="cta-container">
          {/* Small Label */}
          <div className="cta-label">
            <span className="cta-label-dot"></span>
            <span>LET'S MAKE IT REAL</span>
          </div>

          {/* Heading */}
          <h2 className="cta-heading">
            Ready to take your
            <br />
            <span>business online?</span>
          </h2>

          {/* Description */}
          <p className="cta-description">
            Let's build a website that makes your business look professional,
            trustworthy and ready for the next customer.
          </p>

          {/* Buttons */}
          <div className="cta-buttons">
            {/* Start Project */}
            <a href="#contact" className="cta-primary-btn">
              <span>START YOUR PROJECT</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999?text=Hello%20WEB_MAKER%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp-btn"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
