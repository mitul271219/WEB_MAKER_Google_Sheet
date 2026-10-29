import React, { useEffect, useRef } from "react";
import {
  RefreshCw,
  Bug,
  Image,
  Paintbrush,
  LifeBuoy,
  Activity,
  ShieldCheck,
} from "lucide-react";

import "./Website_Maintenance.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 3 cards
const offerCards = [
  {
    icon: <RefreshCw size={22} strokeWidth={1.8} />,
    title: "Content Updates",
    text: "We update your text, prices, offers and business details whenever they change, so your website always shows the latest information.",
  },
  {
    icon: <Bug size={22} strokeWidth={1.8} />,
    title: "Bug Fixes",
    text: "Broken links, layout issues or features that stop working are found and fixed quickly, so visitors never face a faulty website.",
  },
  {
    icon: <Image size={22} strokeWidth={1.8} />,
    title: "Image Updates",
    text: "New photos, banners and graphics are added and optimized, keeping your website fresh without slowing it down.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <Paintbrush size={24} strokeWidth={1.6} />,
    title: "Minor Design Changes",
    text: "Small tweaks to colors, sections and layout are handled for you, so your website keeps matching your brand.",
  },
  {
    icon: <LifeBuoy size={24} strokeWidth={1.6} />,
    title: "Technical Support",
    text: "Whenever you face a problem or have a question, our team is there to help and get things sorted out.",
  },
  {
    icon: <Activity size={24} strokeWidth={1.6} />,
    title: "Website Monitoring",
    text: "We keep an eye on your website so issues are spotted early, before they affect your customers.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.6} />,
    title: "Secure and Reliable",
    text: "With regular care, your website stays secure, updated and running smoothly, so you can focus on your business.",
  },
];

export const Website_Maintenance = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .wm-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".wm-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              entry.target.classList.add("wm-in");
            } else if (!entry.isIntersecting) {
              entry.target.classList.remove("wm-in");
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

      <main className="wm-page" ref={pageRef}>
        {/* HERO */}
        <section className="wm-hero">
          <div className="wm-container wm-hero-grid">
            <div className="wm-hero-text wm-reveal wm-from-left">
              <h1>
                <span className="wm-red">Website Maintenance</span> to Keep
                Your Website Running Smoothly
              </h1>

              <p>
                Keep your website secure, updated and running smoothly with
                ongoing maintenance. At Shartor, we take care of the regular
                updates and fixes so your website always stays in top shape.
              </p>

              <div className="svc-hero-actions">
                <a href="#contact" className="wm-btn">
                  Learn More
                </a>

                <a
                  href={whatsappLink(
                    `Hello ${OWNER_NAME}, I am interested in Website Maintenance. Please share more details.`
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

            <div className="wm-hero-image wm-reveal wm-from-right">
              {/* Apni image public/images/ folder me rakho */}
              <img
                src="https://www.kratiminfotech.com/wp-content/uploads/2026/08/website-maintanance.jpeg"
                alt="Website maintenance illustration"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="wm-offer">
          <div className="wm-container">
            <div className="wm-offer-header wm-reveal">
              <div>
                <span className="wm-small-label">What We Offer</span>
                <h2>
                  Professional{" "}
                  <span className="wm-red">Website Maintenance</span>
                  <br />
                  for Your Business
                </h2>
                <a href="#contact" className="wm-btn">
                  Click here
                </a>
              </div>

              <p>
                We look after your website on an ongoing basis, from content
                and images to fixes and support, so you never have to worry
                about it falling behind.
              </p>
            </div>

            <div className="wm-offer-grid">
              {offerCards.map((card, index) => (
                <article
                  className="wm-offer-card wm-reveal"
                  key={card.title}
                  style={{ "--wm-delay": `${index * 120}ms` }}
                >
                  <div className="wm-offer-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CARE FOR YOUR WEBSITE */}
        <section className="wm-build">
          <div className="wm-container">
            <div className="wm-build-header wm-reveal">
              <h2>
                <span className="wm-red">Care</span> for a Website That Always
                Works
              </h2>
              <p>
                We keep your website healthy, current and reliable all year
                round.
                <br />
                Every task is handled with your business goals and your
                customers in mind.
              </p>
            </div>

            <div className="wm-build-grid">
              {buildCards.map((card, index) => (
                <article
                  className="wm-build-card wm-reveal wm-zoom"
                  key={card.title}
                  style={{ "--wm-delay": `${index * 120}ms` }}
                >
                  <div className="wm-build-icon">{card.icon}</div>
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
