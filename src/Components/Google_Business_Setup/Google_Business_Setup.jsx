import React, { useEffect, useRef } from "react";
import {
  MapPinned,
  Building2,
  MapPin,
  Tags,
  PhoneCall,
  TrendingUp,
  Search,
} from "lucide-react";

import "./Google_Business_Setup.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 3 cards
const offerCards = [
  {
    icon: <MapPinned size={22} strokeWidth={1.8} />,
    title: "Google Business Profile Setup",
    text: "We create and set up your Google Business Profile properly, so your business is ready to appear on Google Search and Google Maps.",
  },
  {
    icon: <Building2 size={22} strokeWidth={1.8} />,
    title: "Business Information",
    text: "Your business name, services, timings and description are added clearly, so customers get the right details at first glance.",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.8} />,
    title: "Location Setup",
    text: "Your exact location is added on the map, making it easy for nearby customers to find and visit your business.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <Tags size={24} strokeWidth={1.6} />,
    title: "Business Category",
    text: "We choose the right category for your business so Google shows you to customers searching for your services.",
  },
  {
    icon: <PhoneCall size={24} strokeWidth={1.6} />,
    title: "Contact Information",
    text: "Phone number, website and contact details are added so customers can call or reach you in one tap.",
  },
  {
    icon: <TrendingUp size={24} strokeWidth={1.6} />,
    title: "Basic Profile Optimization",
    text: "We complete and polish your profile so it looks trustworthy and has a better chance of standing out in local results.",
  },
  {
    icon: <Search size={24} strokeWidth={1.6} />,
    title: "Ready to Be Found",
    text: "Once everything is set, your business is ready to be discovered by local customers on Google Search and Maps.",
  },
];

export const Google_Business_Setup = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .gb-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".gb-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              entry.target.classList.add("gb-in");
            } else if (!entry.isIntersecting) {
              entry.target.classList.remove("gb-in");
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

      <main className="gb-page" ref={pageRef}>
        {/* HERO */}
        <section className="gb-hero">
          <div className="gb-container gb-hero-grid">
            <div className="gb-hero-text gb-reveal gb-from-left">
              <h1>
                <span className="gb-red">Google Business Setup</span> to Help
                Customers Find You
              </h1>

              <p>
                Make it easier for customers to discover your business on
                Google Search and Google Maps. At Shartor, we set up your
                Google Business Profile so local customers can find, call and
                visit you with ease.
              </p>

              <div className="svc-hero-actions">
                <a href="#contact" className="gb-btn">
                  Learn More
                </a>

                <a
                  href={whatsappLink(
                    `Hello ${OWNER_NAME}, I am interested in Google Business Setup. Please share more details.`
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

            <div className="gb-hero-image gb-reveal gb-from-right">
              {/* Apni image public/images/ folder me rakho */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbzrxal3s4z0DsKp4zUmLuFfPbY2mcXJ-Kz9Cr6NcXw&s=10"
                alt="Google Business Setup illustration"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="gb-offer">
          <div className="gb-container">
            <div className="gb-offer-header gb-reveal">
              <div>
                <span className="gb-small-label">What We Offer</span>
                <h2>
                  Professional{" "}
                  <span className="gb-red">Google Business Setup</span>
                  <br />
                  for Your Business
                </h2>
                <a href="#contact" className="gb-btn">
                  Click here
                </a>
              </div>

              <p>
                We set up your business on Google from start to finish,
                focusing on accurate details, the right location and a
                complete profile that customers can trust.
              </p>
            </div>

            <div className="gb-offer-grid">
              {offerCards.map((card, index) => (
                <article
                  className="gb-offer-card gb-reveal"
                  key={card.title}
                  style={{ "--gb-delay": `${index * 120}ms` }}
                >
                  <div className="gb-offer-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BUILD YOUR PRESENCE */}
        <section className="gb-build">
          <div className="gb-container">
            <div className="gb-build-header gb-reveal">
              <h2>
                <span className="gb-red">Get</span> Found on Google by Local
                Customers
              </h2>
              <p>
                We build a Google presence that is accurate, complete and
                easy to find.
                <br />
                Every detail is added with your business goals and your
                nearby customers in mind.
              </p>
            </div>

            <div className="gb-build-grid">
              {buildCards.map((card, index) => (
                <article
                  className="gb-build-card gb-reveal gb-zoom"
                  key={card.title}
                  style={{ "--gb-delay": `${index * 120}ms` }}
                >
                  <div className="gb-build-icon">{card.icon}</div>
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
