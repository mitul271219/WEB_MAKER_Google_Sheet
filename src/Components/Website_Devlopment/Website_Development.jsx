import React, { useEffect, useRef } from "react";
import {
  MonitorSmartphone,
  LayoutTemplate,
  Building2,
  FileText,
  MessageCircle,
  SearchCheck,
  Rocket,
} from "lucide-react";

import "./Website_Development.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 3 cards
const offerCards = [
  {
    icon: <MonitorSmartphone size={22} strokeWidth={1.8} />,
    title: "Responsive Design",
    text: "Your website looks and works perfectly on mobile, tablet and desktop, so every customer gets a smooth experience on any screen.",
  },
  {
    icon: <LayoutTemplate size={22} strokeWidth={1.8} />,
    title: "Modern UI/UX",
    text: "A clean, modern layout with easy navigation makes your website pleasant to use and helps visitors find what they need quickly.",
  },
  {
    icon: <Building2 size={22} strokeWidth={1.8} />,
    title: "Business Information",
    text: "Your services, address, timings and brand details are presented clearly, so customers know exactly who you are and what you offer.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <FileText size={24} strokeWidth={1.6} />,
    title: "Contact Forms",
    text: "Simple enquiry forms let visitors send their requirements directly to you without any hassle.",
  },
  {
    icon: <MessageCircle size={24} strokeWidth={1.6} />,
    title: "WhatsApp Integration",
    text: "A WhatsApp chat button lets customers message your business instantly with one tap.",
  },
  {
    icon: <SearchCheck size={24} strokeWidth={1.6} />,
    title: "Basic SEO Setup",
    text: "Page titles, descriptions and clean structure help your website show up when local customers search.",
  },
  {
    icon: <Rocket size={24} strokeWidth={1.6} />,
    title: "Ready to Launch",
    text: "We test everything and take your website live, so you can start getting enquiries right away.",
  },
];

export const Website_Development = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .wd-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".wd-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              entry.target.classList.add("wd-in");
            } else if (!entry.isIntersecting) {
              entry.target.classList.remove("wd-in");
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

      <main className="wd-page" ref={pageRef}>
      {/* HERO */}
      <section className="wd-hero">
        <div className="wd-container wd-hero-grid">
          <div className="wd-hero-text wd-reveal wd-from-left">
            <h1>
              <span className="wd-red">Website Development</span> Built for
              Your Business
            </h1>

            <p>
              Get a modern, responsive and professional website designed
              specifically for your business. At Shartor, we build websites
              that look great, work smoothly and help customers contact you
              easily.
            </p>

            <div className="svc-hero-actions">
              <a href="#contact" className="wd-btn">
                Learn More
              </a>

              <a
                href={whatsappLink(
                  `Hello ${OWNER_NAME}, I am interested in Website Development. Please share more details.`
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

          <div className="wd-hero-image wd-reveal wd-from-right">
            {/* Apni image public/images/ folder me rakho */}
            <img
              src="https://img.magnific.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Website development illustration"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="wd-offer">
        <div className="wd-container">
          <div className="wd-offer-header wd-reveal">
            <div>
              <span className="wd-small-label">What We Offer</span>
              <h2>
                Professional <span className="wd-red">Website Development</span>
                <br />
                for Your Business
              </h2>
              <a href="#contact" className="wd-btn">
                Click here
              </a>
            </div>

            <p>
              We design and build your website from the ground up, focusing on
              a clean look, easy usability and all the business details your
              customers need to trust you and get in touch.
            </p>
          </div>

          <div className="wd-offer-grid">
            {offerCards.map((card, index) => (
              <article
                className="wd-offer-card wd-reveal"
                key={card.title}
                style={{ "--wd-delay": `${index * 120}ms` }}
              >
                <div className="wd-offer-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD A WEBSITE */}
      <section className="wd-build">
        <div className="wd-container">
          <div className="wd-build-header wd-reveal">
            <h2>
              <span className="wd-red">Build</span> a Website That Works for
              You
            </h2>
            <p>
              We create websites that are not only good looking but also help
              you get real enquiries.
              <br />
              Every feature is added with your business goals and your
              customers in mind.
            </p>
          </div>

          <div className="wd-build-grid">
            {buildCards.map((card, index) => (
              <article
                className="wd-build-card wd-reveal wd-zoom"
                key={card.title}
                style={{ "--wd-delay": `${index * 120}ms` }}
              >
                <div className="wd-build-icon">{card.icon}</div>
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
