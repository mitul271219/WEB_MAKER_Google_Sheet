


import React, { useEffect, useRef, useState } from "react";

import {
  Palette,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  Target,
  Eye,
} from "lucide-react";
import './About.css';



export const About_Web = () => {

const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentSection = aboutRef.current;

    if (!currentSection) return;

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

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
      observer.disconnect();
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
        {/* =========================================
            TOP LABEL
        ========================================= */}

        <div className="about-top-label">
          <span>01</span>
          <span>/</span>
          <strong>ABOUT WEB_MAKER</strong>
        </div>

        {/* =========================================
            TOP CONTENT
        ========================================= */}

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

        {/* =========================================
            BOTTOM AREA
        ========================================= */}

        <div className="about-bottom">
          {/* LEFT VISUAL */}

          <div className="about-visual">
            <div className="visual-grid"></div>

            {/* WEBSITE PREVIEW CARD */}

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
                <span>YOUR NEXT CHAPTER</span>
                <ArrowUpRight size={12} />
              </div>
            </div>

            {/* BOTTOM TEXT */}

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

      {/* =========================================
          OUR MISSION
      ========================================= */}

      <section className="mission-section">
        <div className="mission-container">
          {/* LEFT CONTENT */}

          <div className="mission-content">
            <div className="mission-title-wrap">
              <span className="mission-small-label">OUR PURPOSE</span>

              <h2>Our Mission</h2>

              <div className="mission-title-line"></div>
            </div>

            <div className="mission-text-content">
              <p>
                To help clients maximize their business potential by providing
                them with a unique blend of technological and strategic
                expertise in information technology with high quality.
              </p>

              <p>
                Our mission is to maximize the return on customer's technology
                investment. To achieve this, we develop, deploy and deliver
                customized, scalable technology solutions that integrate
                seamlessly into our customer's existing environment.
              </p>

              <p>
                We pride ourselves on helping businesses build a strong digital
                presence, improve their online experience and create solutions
                that support long-term growth.
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}

          <div className="mission-visual">
            <div className="mission-shape mission-shape-one"></div>
            <div className="mission-shape mission-shape-two"></div>
            <div className="mission-shape mission-shape-three"></div>

            <div className="mission-main-card">
              <div className="mission-card-top">
                <span>WEB_MAKER</span>
                <small>MISSION</small>
              </div>

              <div className="mission-target-wrap">
                <div className="mission-target-inner">
                  <Target size={76} strokeWidth={1.4} />
                </div>
              </div>

              <div className="mission-card-bottom">
                <span>FOCUSED ON</span>
                <strong>YOUR GROWTH</strong>
              </div>
            </div>

            <div className="mission-stat-card mission-stat-card-one">
              <span>100%</span>
              <small>BUSINESS FOCUSED</small>
            </div>

            <div className="mission-stat-card mission-stat-card-two">
              <span>01</span>
              <small>CLEAR DIRECTION</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          OUR VISION
      ========================================= */}

      <section className="vision-section">
        <div className="vision-container">
          {/* LEFT VISUAL */}

          <div className="vision-visual">
            <div className="vision-bg-grid"></div>

            <div className="vision-circle vision-circle-one"></div>
            <div className="vision-circle vision-circle-two"></div>

            <div className="vision-main-card">
              <div className="vision-eye-wrap">
                <Eye size={78} strokeWidth={1.3} />
              </div>

              <span className="vision-main-small">SEEING THE</span>
              <strong className="vision-main-title">BIGGER PICTURE</strong>
            </div>

            <div className="vision-floating-tag vision-floating-tag-one">
              MISSION
            </div>

            <div className="vision-floating-tag vision-floating-tag-two">
              STRATEGY
            </div>

            <div className="vision-floating-tag vision-floating-tag-three">
              GROWTH
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="vision-content">
            <div className="vision-title-wrap">
              <span className="vision-small-label">OUR DIRECTION</span>

              <h2>Our Vision</h2>

              <div className="vision-title-line"></div>
            </div>

            <div className="vision-text-content">
              <p>
                At WEB_MAKER, our vision is to become a trusted digital partner
                for businesses that want to build a strong and meaningful online
                presence.
              </p>

              <p>
                We aim to create modern, scalable and user-friendly digital
                experiences that help businesses connect with their customers,
                strengthen their brand and achieve their goals.
              </p>

              <p>
                We continuously focus on quality, creativity and practical
                solutions while keeping our client's business needs at the
                center of everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>


    </>
  )
}
