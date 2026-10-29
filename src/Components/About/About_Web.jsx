import React, { useEffect, useRef, useState } from "react";

import {
  Palette,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  Target,
  Eye,
  MessageCircle,
  MessagesSquare,
  PenTool,
  Code2,
  Rocket,
  Quote,
} from "lucide-react";
import "./About.css";
import "./About_Extra.css";
import { whatsappLink } from "../../config/contact";

/* =========================================================
   EDIT YOUR CONTENT HERE
   Sirf is hisse me apna asli content daalo.
========================================================= */

// 1) STATS: sirf asli numbers rakho. Jo number sach na ho use hata do.
const stats = [
  { to: 5, suffix: "", label: "Services under one roof" },
  { to: 100, suffix: "%", label: "Mobile-friendly websites" },
  { to: 7, suffix: " days", label: "Typical delivery time" }, // TODO: sach ho tabhi rakho
];

// 2) FOUNDER: photo public/images/founder.jpg me rakho
const founder = {
  name: "Your Name", // TODO
  role: "Founder, WEB_MAKER",
  photo: "/images/founder.jpg",
  story: [
    "WEB_MAKER started with one simple observation: many good local businesses are trusted offline, but customers cannot find them online.", // TODO: apni story likho
    "I build every website personally, so you talk to the person who actually does the work, not a sales team.",
  ],
};

// 3) TESTIMONIALS: jab asli review mil jaye tab yahan daalo.
// Jab tak list khali hai, ye section page par dikhega hi nahi.
const testimonials = [
  // {
  //   name: "Client Name",
  //   business: "Business Name, City",
  //   text: "Short real feedback from your client.",
  // },
];

/* ========================================================= */

const features = [
  {
    number: "01",
    title: "Modern design",
    text: "A clean look that makes your business feel trustworthy.",
    icon: <Palette size={22} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Mobile-first",
    text: "Works perfectly on the phone your customers use most.",
    icon: <MonitorSmartphone size={22} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Business focused",
    text: "Built to bring you calls, chats and enquiries, not just visits.",
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Ongoing support",
    text: "We stay with you after launch for updates and fixes.",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
  },
];

const steps = [
  {
    icon: <MessagesSquare size={24} strokeWidth={1.7} />,
    title: "Talk",
    text: "Tell us about your business and what you want customers to do on your website.",
  },
  {
    icon: <PenTool size={24} strokeWidth={1.7} />,
    title: "Design",
    text: "We plan the look and layout, and share it with you before building.",
  },
  {
    icon: <Code2 size={24} strokeWidth={1.7} />,
    title: "Build",
    text: "We develop your website, with WhatsApp, contact forms and basic SEO set up.",
  },
  {
    icon: <Rocket size={24} strokeWidth={1.7} />,
    title: "Launch & Support",
    text: "We take it live and keep helping with updates whenever you need.",
  },
];

/* ---------------------------------------------------------
   Count-up number: scroll par har baar 0 se count hota hai
--------------------------------------------------------- */
const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frame;

    const run = () => {
      if (reduceMotion) {
        setValue(to);
        return;
      }

      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (entry.isIntersecting) {
          run();
        } else {
          setValue(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

export const About_Web = () => {
  const aboutRef = useRef(null);
  const pageRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  // Top section animation (pehle jaisa)
  useEffect(() => {
    const currentSection = aboutRef.current;

    if (!currentSection) return;

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

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
      observer.disconnect();
    };
  }, []);

  // Baaki sections: scroll up/down karne par har baar animate
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".ab-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            entry.target.classList.add("ab-in");
          } else if (!entry.isIntersecting) {
            entry.target.classList.remove("ab-in");
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const visibleStats = stats.filter((item) => item.to);

  return (
    <div className="about-page" ref={pageRef}>
      {/* =====================================================
          INTRO + FEATURES
      ===================================================== */}
      <section
        className={`about-section ${visible ? "about-visible" : ""}`}
        id="about"
        ref={aboutRef}
      >
        <div className="about-container">
          <div className="about-top-label">
            <span>01</span>
            <span>/</span>
            <strong>ABOUT WEB_MAKER</strong>
          </div>

          <div className="about-intro">
            <div className="about-heading-box">
              <h2>
                Your business
                <br />
                deserves a <span>better</span>
                <br />
                <span>digital presence.</span>
              </h2>
            </div>

            <div className="about-text-box">
              <p className="about-main-text">
                Offline trust should have an online home. We help ambitious
                small businesses move from being hard to find to impossible to
                ignore.
              </p>

              <p className="about-sub-text">
                From the first sketch to the first enquiry, we create digital
                experiences that look professional, feel effortless and make
                business sense.
              </p>

              <a href="#contact" className="about-know-btn">
                <span>GET TO KNOW US</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="about-bottom">
            <div className="about-visual">
              <div className="visual-grid"></div>

              <div className="website-preview-card">
                <div className="preview-top">
                  <span>WEB_MAKER</span>
                  <small>EST. 2026</small>
                </div>

                <div className="preview-heading"></div>

                <div className="preview-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-button">
                  <span>YOUR NEXT CHAPTER</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>

              <div className="visual-growth">
                <span>DESIGNED</span>
                <strong>FOR GROWTH</strong>
              </div>
            </div>

            <div className="about-features">
              {features.map((feature) => (
                <div className="about-feature-card" key={feature.number}>
                  <span className="feature-number">{feature.number}</span>

                  <div className="feature-icon">{feature.icon}</div>

                  <h3>{feature.title}</h3>

                  <p className="feature-text">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          {visibleStats.length > 0 && (
            <div className="ab-stats ab-reveal">
              {visibleStats.map((item) => (
                <div className="ab-stat" key={item.label}>
                  <strong>
                    <CountUp to={item.to} suffix={item.suffix} />
                  </strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          FOUNDER STORY
      ===================================================== */}
      <section className="ab-section ab-story">
        <div className="ab-container ab-story-grid">
          <div className="ab-story-photo ab-reveal ab-from-left">
            {photoFailed ? (
              <div className="ab-story-fallback">W</div>
            ) : (
              <img
                src={founder.photo}
                alt={founder.name}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>

          <div className="ab-story-text ab-reveal ab-from-right">
            <span className="ab-label">THE PERSON BEHIND IT</span>
            <h2>Meet {founder.name}</h2>
            <p className="ab-role">{founder.role}</p>

            {founder.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}
      <section className="ab-section ab-how">
        <div className="ab-container">
          <div className="ab-heading ab-reveal">
            <span className="ab-label">HOW WE WORK</span>
            <h2>Simple steps, no confusion.</h2>
            <p>
              You always know what is happening and what comes next, from
              the first call to the day your website goes live.
            </p>
          </div>

          <div className="ab-steps">
            {steps.map((step, index) => (
              <article
                className="ab-step ab-reveal ab-zoom"
                key={step.title}
                style={{ "--ab-delay": `${index * 120}ms` }}
              >
                <span className="ab-step-number">0{index + 1}</span>
                <div className="ab-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION + VISION (ek hi section, do cards)
      ===================================================== */}
      <section className="ab-section ab-mv">
        <div className="ab-container">
          <div className="ab-heading ab-reveal">
            <span className="ab-label">WHAT DRIVES US</span>
            <h2>Our mission and vision</h2>
          </div>

          <div className="ab-mv-grid">
            <article className="ab-mv-card ab-reveal ab-from-left">
              <div className="ab-mv-icon">
                <Target size={30} strokeWidth={1.6} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To help small businesses get found online and get more
                customers, with a simple, fast and professional website that
                is easy to contact and easy to trust.
              </p>
            </article>

            <article className="ab-mv-card ab-mv-card-dark ab-reveal ab-from-right">
              <div className="ab-mv-icon">
                <Eye size={30} strokeWidth={1.6} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the digital partner that local businesses trust, by
                focusing on quality, honest communication and practical
                solutions that support long-term growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS (sirf tab dikhega jab list me data ho)
      ===================================================== */}
      {testimonials.length > 0 && (
        <section className="ab-section ab-testimonials">
          <div className="ab-container">
            <div className="ab-heading ab-reveal">
              <span className="ab-label">CLIENT WORDS</span>
              <h2>What our clients say</h2>
            </div>

            <div className="ab-testimonial-grid">
              {testimonials.map((item, index) => (
                <figure
                  className="ab-testimonial ab-reveal"
                  key={item.name}
                  style={{ "--ab-delay": `${index * 120}ms` }}
                >
                  <Quote size={26} strokeWidth={1.6} />
                  <blockquote>{item.text}</blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    <span>{item.business}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="ab-section ab-cta-section">
        <div className="ab-container">
          <div className="ab-cta ab-reveal ab-zoom">
            <h2>Ready to get your business online?</h2>
            <p>
              Tell us what you need. We will reply with a clear plan and a
              simple price, with no pressure.
            </p>

            <div className="ab-cta-buttons">
              <a href="#contact" className="ab-btn ab-btn-primary">
                <span>Get a free consultation</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={whatsappLink(
                  "Hello WEB_MAKER, I want to discuss a website for my business."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn ab-btn-outline"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
