import React, { useEffect, useRef, useState } from "react";
import './How_Its_Work.css'

export const How_Its_Work_web = () => {

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
        threshold: 0.2,
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

  const steps = [
    {
      number: "01",
      step: "STEP 1",
      title: "Tell us about your business",
    },
    {
      number: "02",
      step: "STEP 2",
      title: "We design your website",
    },
    {
      number: "03",
      step: "STEP 3",
      title: "We build & launch",
    },
    {
      number: "04",
      step: "STEP 4",
      title: "You grow online",
    },
  ];

  return (
    <>

                  <section
      ref={sectionRef}
      className={`how-section ${visible ? "how-visible" : ""}`}
      id="how-it-works"
    >
      <div className="how-container">
        {/* =================================
            TOP LABEL
        ================================= */}

        <div className="how-label">
          <span>03</span>
          <span>/</span>
          <strong>HOW IT WORKS</strong>
        </div>

        {/* =================================
            HEADER
        ================================= */}

        <div className="how-header">
          <div className="how-heading">
            <h2>
              Simple steps.
              <br />
              <span>Serious results.</span>
            </h2>
          </div>

          <div className="how-description">
            <p>
              We keep the process clear, collaborative and focused on the
              outcome that matters: helping you grow.
            </p>
          </div>
        </div>

        {/* =================================
            STEPS
        ================================= */}

        <div className="how-steps">
          {steps.map((item, index) => (
            <React.Fragment key={item.number}>
              <div
                className="how-step"
                style={{
                  "--step-delay": `${0.3 + index * 0.25}s`,
                }}
              >
                {/* Number Circle */}

                <div className="step-circle">
                  <span>{item.number}</span>
                </div>

                {/* Step Content */}

                <div className="step-content">
                  <span className="step-label">{item.step}</span>

                  <h3>{item.title}</h3>
                </div>
              </div>

              {/* Connecting Line */}

              {index < steps.length - 1 && (
                <div
                  className="step-connector"
                  style={{
                    "--line-delay": `${0.55 + index * 0.25}s`,
                  }}
                >
                  <span></span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}
