import React, { useEffect, useRef } from "react";
import {
  MessageCircle,
  MessageSquarePlus,
  MousePointerClick,
  PlugZap,
  Smartphone,
  Headset,
  Zap,
} from "lucide-react";

import "./WhatsApp_Integration.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 3 cards
const offerCards = [
  {
    icon: <MessageCircle size={22} strokeWidth={1.8} />,
    title: "WhatsApp Chat Button",
    text: "A clear WhatsApp button on your website lets visitors start a chat with your business in just one tap.",
  },
  {
    icon: <MessageSquarePlus size={22} strokeWidth={1.8} />,
    title: "Floating WhatsApp Button",
    text: "A floating button stays visible on every page as customers scroll, so they can reach you whenever they have a question.",
  },
  {
    icon: <MousePointerClick size={22} strokeWidth={1.8} />,
    title: "Click-to-Chat",
    text: "Customers open WhatsApp directly with a ready message, without saving your number or typing it manually.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <PlugZap size={24} strokeWidth={1.6} />,
    title: "Contact Integration",
    text: "WhatsApp is connected with your website contact details, so customers always find the right way to reach you.",
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.6} />,
    title: "Mobile Friendly",
    text: "Buttons and chat links work smoothly on mobile, where most of your customers will message you from.",
  },
  {
    icon: <Headset size={24} strokeWidth={1.6} />,
    title: "Customer Enquiry Support",
    text: "Enquiries land straight in your WhatsApp, making it easy to reply quickly and turn questions into customers.",
  },
  {
    icon: <Zap size={24} strokeWidth={1.6} />,
    title: "Instant Connection",
    text: "From visitor to conversation in seconds, so no enquiry is lost while a customer is still interested.",
  },
];

export const WhatsApp_Integration = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .wa-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".wa-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              entry.target.classList.add("wa-in");
            } else if (!entry.isIntersecting) {
              entry.target.classList.remove("wa-in");
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

      <main className="wa-page" ref={pageRef}>
        {/* HERO */}
        <section className="wa-hero">
          <div className="wa-container wa-hero-grid">
            <div className="wa-hero-text wa-reveal wa-from-left">
              <h1>
                <span className="wa-red">WhatsApp Integration</span> to Connect
                With Customers Instantly
              </h1>

              <p>
                Let your customers contact your business instantly through
                WhatsApp. At Shartor, we add WhatsApp to your website so
                visitors can message you easily from any device.
              </p>

              <div className="svc-hero-actions">
                <a href="#contact" className="wa-btn">
                  Learn More
                </a>

                <a
                  href={whatsappLink(
                    `Hello ${OWNER_NAME}, I am interested in WhatsApp Integration. Please share more details.`
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

            <div className="wa-hero-image wa-reveal wa-from-right">
              {/* Apni image public/images/ folder me rakho */}
              <img
                src="https://cdn.prod.website-files.com/66efa862351a8bef3b48cb70/67df19bd827d7a184ca8d2e0_AD_4nXfXEmwtXVZjNR3vXgpbLr5JUHy_Q4yWEmRSwhs5avWfZC92wjnQOJKhhkRy5QPgGG375tc7ouJcVV6N0GYZ7Rhq2wOITQkbM-pz2rlOuKEFo5Mq7VfSHAhJBWBLVfoY1RrAlUD2qw.png"
                alt="WhatsApp integration illustration"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="wa-offer">
          <div className="wa-container">
            <div className="wa-offer-header wa-reveal">
              <div>
                <span className="wa-small-label">What We Offer</span>
                <h2>
                  Professional{" "}
                  <span className="wa-red">WhatsApp Integration</span>
                  <br />
                  for Your Business
                </h2>
                <a href="#contact" className="wa-btn">
                  Click here
                </a>
              </div>

              <p>
                We add WhatsApp to your website in the right places, so
                customers can start a conversation quickly and your business
                never misses an enquiry.
              </p>
            </div>

            <div className="wa-offer-grid">
              {offerCards.map((card, index) => (
                <article
                  className="wa-offer-card wa-reveal"
                  key={card.title}
                  style={{ "--wa-delay": `${index * 120}ms` }}
                >
                  <div className="wa-offer-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BUILD YOUR CONNECTION */}
        <section className="wa-build">
          <div className="wa-container">
            <div className="wa-build-header wa-reveal">
              <h2>
                <span className="wa-red">Chat</span> With Your Customers
                Without Delay
              </h2>
              <p>
                We make it simple for customers to reach you and simple for you
                to respond.
                <br />
                Every feature is added with your business goals and your
                customers in mind.
              </p>
            </div>

            <div className="wa-build-grid">
              {buildCards.map((card, index) => (
                <article
                  className="wa-build-card wa-reveal wa-zoom"
                  key={card.title}
                  style={{ "--wa-delay": `${index * 120}ms` }}
                >
                  <div className="wa-build-icon">{card.icon}</div>
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
