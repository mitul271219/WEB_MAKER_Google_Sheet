

import React, { useEffect, useRef, useState } from "react";
import {
  Palette,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import './About.css';



export const About_Web = () => {

            const aboutRef = useRef(null);
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
      }
    );

    const currentSection = aboutRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const features = [
    {
      number: "01",
      title: "Modern design",
      icon: <Palette size={19} strokeWidth={1.8} />,
    },
    {
      number: "02",
      title: "Mobile-first",
      icon: <MonitorSmartphone size={19} strokeWidth={1.8} />,
    },
    {
      number: "03",
      title: "Business focused",
      icon: <BarChart3 size={19} strokeWidth={1.8} />,
    },
    {
      number: "04",
      title: "Ongoing support",
      icon: <ShieldCheck size={19} strokeWidth={1.8} />,
    },
  ];


  return (
    <>

             <section
      className={`about-section ${visible ? "about-visible" : ""}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">
        {/* ================= TOP LABEL ================= */}

        <div className="about-top-label">
          <span>01</span>
          <span>/</span>
          <strong>ABOUT WEB_MAKER</strong>
        </div>

        {/* ================= TOP CONTENT ================= */}

        <div className="about-intro">
          {/* LEFT HEADING */}

          <div className="about-heading-box">
            <h2>
              Your business
              <br />
              deserves a <span>better</span>
              <br />
              <span>digital presence.</span>
            </h2>
          </div>

          {/* RIGHT TEXT */}

          <div className="about-text-box">
            <p className="about-main-text">
              Offline trust should have an online home. We help ambitious small
              businesses move from being hard to find to impossible to ignore.
            </p>

            <p className="about-sub-text">
              From the first sketch to the first enquiry, we create digital
              experiences that look professional, feel effortless and make
              business sense.
            </p>

            <a href="#contact" className="about-know-btn">
              <span>GET TO KNOW US</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM AREA ================= */}

        <div className="about-bottom">
          {/* LEFT VISUAL */}

          <div className="about-visual">
            <div className="visual-grid"></div>

            {/* Purple Website Card */}

            <div className="website-preview-card">
              <div className="preview-top">
                <span>WEB_MAKER</span>
                <small>EST. 2026</small>
              </div>

              <div className="preview-heading"></div>

              <div className="preview-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-button">
                YOUR NEXT CHAPTER
                <ArrowUpRight size={12} />
              </div>
            </div>

            {/* Bottom Text */}

            <div className="visual-growth">
              <span>DESIGNED</span>
              <strong>FOR GROWTH</strong>
            </div>
          </div>

          {/* RIGHT FEATURES */}

          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>

                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
