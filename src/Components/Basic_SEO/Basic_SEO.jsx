import React, { useEffect, useRef } from "react";
import {
  Type,
  AlignLeft,
  Heading1,
  Image,
  Link2,
  Smartphone,
  Key,
  Network,
} from "lucide-react";

import "./Basic_SEO.css";
import "../Shared/Service_WhatsApp.css";
import { MessageCircle as WhatsAppIcon } from "lucide-react";
import { OWNER_NAME, whatsappLink } from "../../config/contact";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";

// What We Offer: 4 cards
const offerCards = [
  {
    icon: <Type size={22} strokeWidth={1.8} />,
    title: "Page Title Optimization",
    text: "We write clear, keyword-focused page titles so search engines and customers instantly understand what each page is about.",
  },
  {
    icon: <AlignLeft size={22} strokeWidth={1.8} />,
    title: "Meta Description",
    text: "Short, engaging descriptions appear in search results and encourage more people to click through to your website.",
  },
  {
    icon: <Heading1 size={22} strokeWidth={1.8} />,
    title: "H1/H2 Optimization",
    text: "Headings are structured properly, helping search engines read your content and visitors scan it easily.",
  },
  {
    icon: <Image size={22} strokeWidth={1.8} />,
    title: "Image Alt Text",
    text: "Descriptive alt text is added to your images, so they are understood by search engines and accessible to everyone.",
  },
];

// Build section: 4 black cards
const buildCards = [
  {
    icon: <Link2 size={24} strokeWidth={1.6} />,
    title: "Clean URLs",
    text: "Simple, readable page links are easier for customers to trust and for search engines to understand.",
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.6} />,
    title: "Mobile SEO",
    text: "Your website is set up to load and read well on phones, which is where most local searches happen.",
  },
  {
    icon: <Key size={24} strokeWidth={1.6} />,
    title: "Keyword Optimization",
    text: "We use the words your local customers actually search for, so your business shows up for the right searches.",
  },
  {
    icon: <Network size={24} strokeWidth={1.6} />,
    title: "Sitemap & Robots.txt",
    text: "A sitemap and robots.txt guide search engines through your website so your pages are found and listed properly.",
  },
];

export const Basic_SEO = () => {
  const pageRef = useRef(null);

  // Scroll animation: elements with .seo-reveal animate every time they enter the screen (scroll up or down)
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".seo-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              entry.target.classList.add("seo-in");
            } else if (!entry.isIntersecting) {
              entry.target.classList.remove("seo-in");
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

      <main className="seo-page" ref={pageRef}>
        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-container seo-hero-grid">
            <div className="seo-hero-text seo-reveal seo-from-left">
              <h1>
                <span className="seo-red">Basic SEO</span> to Help Customers
                Find Your Business
              </h1>

              <p>
                Improve your website's search visibility and help local
                customers find your business online. At Shartor, we set up the
                essential SEO basics so your website is ready to be found on
                search engines.
              </p>

              <div className="svc-hero-actions">
                <a href="#contact" className="seo-btn">
                  Learn More
                </a>

                <a
                  href={whatsappLink(
                    `Hello ${OWNER_NAME}, I am interested in Basic SEO. Please share more details.`
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

            <div className="seo-hero-image seo-reveal seo-from-right">
              {/* Apni image public/images/ folder me rakho */}
              <img
                src="https://t3.ftcdn.net/jpg/08/77/94/14/360_F_877941412_wzvh5JHFcvEaVNNjDVhhQNGB1X5Xp5io.jpg"
                alt="Basic SEO illustration"
              />
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="seo-offer">
          <div className="seo-container">
            <div className="seo-offer-header seo-reveal">
              <div>
                <span className="seo-small-label">What We Offer</span>
                <h2>
                  Professional <span className="seo-red">Basic SEO</span>
                  <br />
                  for Your Business
                </h2>
                <a href="#contact" className="seo-btn">
                  Click here
                </a>
              </div>

              <p>
                We take care of the on-page SEO essentials, from titles and
                descriptions to headings and images, so search engines can
                understand your website clearly.
              </p>
            </div>

            <div className="seo-offer-grid">
              {offerCards.map((card, index) => (
                <article
                  className="seo-offer-card seo-reveal"
                  key={card.title}
                  style={{ "--seo-delay": `${index * 120}ms` }}
                >
                  <div className="seo-offer-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GET FOUND */}
        <section className="seo-build">
          <div className="seo-container">
            <div className="seo-build-header seo-reveal">
              <h2>
                <span className="seo-red">Get</span> Found by Local Customers
                Online
              </h2>
              <p>
                We build a strong SEO foundation that helps your website show
                up where your customers are searching.
                <br />
                Every step is done with your business goals and your local
                customers in mind.
              </p>
            </div>

            <div className="seo-build-grid">
              {buildCards.map((card, index) => (
                <article
                  className="seo-build-card seo-reveal seo-zoom"
                  key={card.title}
                  style={{ "--seo-delay": `${index * 120}ms` }}
                >
                  <div className="seo-build-icon">{card.icon}</div>
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
