import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import './Selected_Work.css'

export const Selected_Work_web = () => {

                  const sectionRef = useRef(null);
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

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const projects = [
    {
      number: "01",
      type: "RESTAURANT",
      title: "The Daily Table",
      description:
        "A warm, conversion-focused site for a neighborhood restaurant.",
      theme: "restaurant",
    },
    {
      number: "02",
      type: "HEALTHCARE",
      title: "Mira Clinic",
      description: "A calm, trustworthy digital home for a modern clinic.",
      theme: "healthcare",
    },
    {
      number: "03",
      type: "SERVICES",
      title: "Northline Studio",
      description:
        "A sharp portfolio experience for an independent creative team.",
      theme: "studio",
    },
  ];

  return (
    <>

                 <section
      ref={sectionRef}
      className={`work-section ${visible ? "work-visible" : ""}`}
      id="work"
    >
      <div className="work-container">
        {/* ==========================================
            TOP LABEL
        ========================================== */}

        <div className="work-label">
          <span>04</span>
          <span>/</span>
          <strong>SELECTED WORK</strong>
        </div>

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="work-header">
          <div className="work-heading">
            <h2>
              Work that speaks
              <br />
              <span>for itself.</span>
            </h2>
          </div>

          <a href="#contact" className="work-project-btn">
            <span>START A PROJECT</span>

            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* ==========================================
            PROJECT GRID
        ========================================== */}

        <div className="work-grid">
          {projects.map((project, index) => (
            <article
              className={`work-card ${project.theme}`}
              key={project.number}
              style={{
                "--card-delay": `${0.25 + index * 0.18}s`,
              }}
            >
              {/* ==================================
                  WEBSITE PREVIEW
              ================================== */}

              <div className="work-preview">
                <div className="browser-window">
                  {/* Browser Header */}

                  <div className="browser-header">
                    <div className="browser-name">{project.title}</div>

                    <div className="browser-links">
                      <span>Home</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  {/* Website Content */}

                  <div className="preview-content">
                    <div className="preview-category">{project.type}</div>

                    <h3>{project.title}</h3>

                    <div className="preview-line"></div>
                  </div>
                </div>
              </div>

              {/* ==================================
                  PROJECT INFORMATION
              ================================== */}

              <div className="work-info">
                <div className="work-info-top">
                  <div>
                    <span className="work-type">{project.type}</span>

                    <h3>{project.title}</h3>
                  </div>

                  <a
                    href="#contact"
                    className="work-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}
