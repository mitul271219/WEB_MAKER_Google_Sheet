import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Smartphone,
  BriefcaseBusiness,
  CircleDollarSign,
  MessageSquare,
  Clock3,
} from "lucide-react";
import "./WhyChooseUs.css";

export const WhyChooseUs_web = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
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

  const reasons = [
    {
      icon: <Sparkles size={21} strokeWidth={1.8} />,
      title: "Professional Design",
      description: "Modern websites that create a strong first impression.",
    },
    {
      icon: <Smartphone size={21} strokeWidth={1.8} />,
      title: "Mobile Friendly",
      description:
        "Your website works smoothly on phones, tablets and desktops.",
    },
    {
      icon: <BriefcaseBusiness size={21} strokeWidth={1.8} />,
      title: "Business Focused",
      description: "Solutions designed around your actual business needs.",
    },
    {
      icon: <CircleDollarSign size={21} strokeWidth={1.8} />,
      title: "Affordable Solutions",
      description:
        "Professional digital services without unnecessary complexity.",
    },
    {
      icon: <MessageSquare size={21} strokeWidth={1.8} />,
      title: "Fast Communication",
      description: "Easy communication and support whenever you need it.",
    },
    {
      icon: <Clock3 size={21} strokeWidth={1.8} />,
      title: "Long-Term Support",
      description: "We can continue helping you after your website goes live.",
    },
  ];

  return (
    <>
      <section
        className={`why-section ${visible ? "why-section-visible" : ""}`}
        ref={sectionRef}
        id="why-us"
      >
        <div className="why-container">
          {/* ================= HEADER ================= */}

          <div className="why-header">
            <div className="why-label">Why WEB_MAKER</div>

            <h2>Why Choose WEB_MAKER?</h2>
          </div>

          {/* ================= GRID ================= */}

          <div className="why-grid">
            {reasons.map((reason, index) => (
              <div
                className="why-card"
                key={reason.title}
                style={{
                  "--animation-delay": `${index * 100}ms`,
                }}
              >
                {/* ICON */}

                <div className="why-icon">{reason.icon}</div>

                {/* CONTENT */}

                <div className="why-content">
                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
