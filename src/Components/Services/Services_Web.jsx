import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Search,
  MessageCircle,
  Wrench,
  SearchCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";

import "./Services.css";

export const Services_Web = () => {
  const servicesRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll animation
  useEffect(() => {
    const currentSection = servicesRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // All five services
  const services = [
    {
      number: "01",
      icon: <Code2 size={23} strokeWidth={1.8} />,
      title: "Website Development",
      description:
        "Get a modern, responsive and professional website designed specifically for your business.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Business Information",
        "Contact Forms",
        "WhatsApp Integration",
        "Basic SEO Setup",
      ],
    },

    {
      number: "02",
      icon: <Search size={23} strokeWidth={1.8} />,
      title: "Google Business Setup",
      description:
        "Make it easier for customers to discover your business on Google Search and Google Maps.",
      features: [
        "Google Business Profile Setup",
        "Business Information",
        "Location Setup",
        "Business Category",
        "Contact Information",
        "Basic Profile Optimization",
      ],
    },

    {
      number: "03",
      icon: <MessageCircle size={23} strokeWidth={1.8} />,
      title: "WhatsApp Integration",
      description:
        "Let your customers contact your business instantly through WhatsApp.",
      features: [
        "WhatsApp Chat Button",
        "Floating WhatsApp Button",
        "Click-to-Chat",
        "Contact Integration",
        "Mobile Friendly",
        "Customer Enquiry Support",
      ],
    },

    {
      number: "04",
      icon: <Wrench size={23} strokeWidth={1.8} />,
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated and running smoothly with ongoing maintenance.",
      features: [
        "Content Updates",
        "Bug Fixes",
        "Image Updates",
        "Minor Design Changes",
        "Technical Support",
        "Website Monitoring",
      ],
    },

    {
      number: "05",
      icon: <SearchCheck size={23} strokeWidth={1.8} />,
      title: "Basic SEO",
      description:
        "Improve your website's search visibility and help local customers find your business online.",
      features: [
        "Page Title Optimization",
        "Meta Description",
        "H1/H2 Optimization",
        "Image Alt Text",
        "Clean URLs",
        "Mobile SEO",
        "Keyword Optimization",
        "Sitemap & Robots.txt",
      ],
    },
  ];

  return (
    <section
      className={`services-section ${
        visible ? "services-visible" : ""
      }`}
      id="services"
      ref={servicesRef}
    >
      <div className="services-container">

        {/* TOP LABEL */}
        <div className="services-label">
          <span>02</span>
          <span>/</span>
          <strong>WHAT WE DO</strong>
        </div>

        {/* HEADING */}
        <div className="services-header">
          <div className="services-heading">
            <h2>
              Everything you need
              <br />
              <span>to grow online.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              One thoughtful partner for the digital details that move your
              business forward.
            </p>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.number}
              style={{
                transitionDelay: visible
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              {/* CARD TOP */}
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {/* FEATURES */}
                <div className="service-features">
                  {service.features.map((feature) => (
                    <div
                      className="service-feature"
                      key={feature}
                    >
                      <Check size={15} strokeWidth={2} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LEARN MORE: ALL CARDS GO TO CONTACT */}
              <a
                href="#contact"
                className="service-learn-more"
                onClick={(event) => {
                  const contactSection =
                    document.getElementById("contact");

                  if (contactSection) {
                    event.preventDefault();

                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                    window.history.replaceState(
                      null,
                      "",
                      "#contact"
                    );
                  }
                }}
              >
                <span>Learn More</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};