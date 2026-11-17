
import React, { useEffect, useRef } from "react";
import {
  Box,
  Sparkles,
  Layers,
  Gauge,
  Smartphone,
  MessageCircle,
  Rocket,
} from "lucide-react";

import "./ThreeD_Website_Development.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 3 cards
const offerCards = [
  {
    icon: <Box size={22} strokeWidth={1.8} />,
    title: "Interactive 3D Models",
    text: "Visitors can rotate, zoom and explore your product or space right in the browser, so they understand it better before they contact you.",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.8} />,
    title: "Smooth 3D Animations",
    text: "Scroll and hover animations bring your website to life and make your brand look modern, memorable and professional.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.8} />,
    title: "Product Showcase",
    text: "Show your products from every angle in 3D, so customers can see the details and feel confident about choosing you.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <Gauge size={24} strokeWidth={1.6} />,
    title: "Fast Loading",
    text: "We compress 3D models and load them smartly, so your website opens quickly even on slow networks.",
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.6} />,
    title: "Mobile Friendly",
    text: "Your 3D website works smoothly on phones, tablets and desktops, with a lighter version for weaker devices.",
  },
  {
    icon: <MessageCircle size={24} strokeWidth={1.6} />,
    title: "WhatsApp Integration",
    text: "A WhatsApp chat button lets customers message your business instantly while they explore your 3D page.",
  },
  {
    icon: <Rocket size={24} strokeWidth={1.6} />,
    title: "Ready to Launch",
    text: "We test every scene and take your 3D website live, so you can start getting enquiries right away.",
  },
];

export const ThreeD_Website_Development = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .td-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".td-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            entry.target.classList.add("td-in");
          } else if (!entry.isIntersecting) {
            entry.target.classList.remove("td-in");
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar_Web />

      <main className="td-page" ref={pageRef}>
        {/* HERO */}
        <section className="td-hero">
          <div className="td-container td-hero-grid">
            <div className="td-hero-text td-reveal td-from-left">
              <h1>
                <span className="td-red">3D Website Development</span> That
                Makes Visitors Explore
              </h1>

              <p>
                Turn your website into an interactive experience. At Shartor,
                we add 3D models, animations and product views that look
                amazing, load fast and help customers understand your business
                better.
              </p>

              <div className="svc-hero-actions">
                <a href="#contact" className="td-btn">
                  Learn More
                </a>

                <a
                  href={whatsappLink(
                    `Hello ${OWNER_NAME}, I am interested in 3D Website Development. Please share more details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-wa-btn"
                >
                  <WhatsAppIcon size={17} strokeWidth={1.9} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="td-hero-image td-reveal td-from-right">
              {/* Apni 3D image public/images/ folder me rakho, ya koi image link daalo */}
              <img
                src="https://intersmart.ae/wp-content/uploads/2025/01/How-3D-and-Interactive-Web-Design-Will-Change-the-User-Experience-in-2025.webp"
                alt="3D website development illustration"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="td-offer">
          <div className="td-container">
            <div className="td-offer-header td-reveal">
              <div>
                <span className="td-small-label">What We Offer</span>
                <h2>
                  Professional{" "}
                  <span className="td-red">3D Website Development</span>
                  <br />
                  for Your Business
                </h2>
                <a href="#contact" className="td-btn">
                  Click here
                </a>
              </div>

              <p>
                From a single 3D product viewer to a full 3D landing page, we
                build what fits your business and your budget, with a clean
                look and smooth performance on every device.
              </p>
            </div>

            <div className="td-offer-grid">
              {offerCards.map((card, index) => (
                <article
                  className="td-offer-card td-reveal"
                  key={card.title}
                  style={{ "--td-delay": `${index * 120}ms` }}
                >
                  <div className="td-offer-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BUILD A 3D WEBSITE */}
        <section className="td-build">
          <div className="td-container">
            <div className="td-build-header td-reveal">
              <h2>
                <span className="td-red">Stand</span> Out With a 3D Website
              </h2>
              <p>
                Most websites look the same. A 3D website gives visitors a
                reason to stay longer and remember your brand.
                <br />
                Every feature is added with your business goals and your
                customers in mind.
              </p>
            </div>

            <div className="td-build-grid">
              {buildCards.map((card, index) => (
                <article
                  className="td-build-card td-reveal td-zoom"
                  key={card.title}
                  style={{ "--td-delay": `${index * 120}ms` }}
                >
                  <div className="td-build-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Contact_Form_Web />
      <Footer_Web />
    </>
  );
};
