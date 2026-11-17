

import React, { useEffect, useRef, useState } from "react";

import {
  Palette,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  Target,
  Eye,
  MessagesSquare,
  PenTool,
  Code2,
  Rocket,
  Quote,
} from "lucide-react";
import "./About.css";
import "./About_Extra.css";
import "./About_3D.css"; // NEW: 3D / 4D layer (sabse last me import karo)

/* =========================================================
   EDIT YOUR CONTENT HERE
   Sirf is hisse me apna asli content daalo.
========================================================= */

// 1) STATS: sirf asli numbers rakho. Jo number sach na ho use hata do.
const stats = [
  { to: 5, suffix: "", label: "Services under one roof" },
  { to: 100, suffix: "%", label: "Mobile-friendly websites" },
  { to: 15, suffix: " days", label: "Typical delivery time" }, // TODO: sach ho tabhi rakho
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

/* ---------------------------------------------------------
   Pointer se 3D tilt calculate karne ka helper
   (mouse aur touch dono me kaam karta hai)
--------------------------------------------------------- */
const setTilt = (el, e, max) => {
  if (!el) return;
  const r = el.getBoundingClientRect();
  // -0.5 se +0.5 ke beech (finger bahar chali jaye tab bhi limit me rehta hai)
  const x = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
  const y = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
  el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
  el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  // --nx / --ny: image aur layers ko cursor ke saath khiskane ke liye
  el.style.setProperty("--nx", x.toFixed(3));
  el.style.setProperty("--ny", y.toFixed(3));
};

const resetTilt = (el) => {
  if (!el) return;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--nx", "0");
  el.style.setProperty("--ny", "0");
};

/* ---------------------------------------------------------
   Card3D: bahar wala div scroll-reveal karta hai,
   andar wala div mouse ke saath 3D tilt hota hai
--------------------------------------------------------- */
const Card3D = ({
  children,
  className = "",
  reveal = "",
  wrapClass = "",
  style,
  max = 12,
}) => {
  const ref = useRef(null);

  return (
    <div className={`ab-reveal ab-tilt-wrap ${reveal} ${wrapClass}`} style={style}>
      <div
        ref={ref}
        className={`ab-tilt ${className}`}
        onPointerDown={(e) => setTilt(ref.current, e, max)}
        onPointerMove={(e) => setTilt(ref.current, e, max)}
        onPointerLeave={() => resetTilt(ref.current)}
        onPointerUp={(e) => e.pointerType === "touch" && resetTilt(ref.current)}
        onPointerCancel={() => resetTilt(ref.current)}
      >
        {children}
      </div>
    </div>
  );
};

export const About_Web = () => {
  const aboutRef = useRef(null);
  const pageRef = useRef(null);
  const visualRef = useRef(null);
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

  // 3D scroll reveal: neeche se aate time ek taraf se, upar jaate time dusri taraf se
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const items = page.querySelectorAll(".ab-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            el.classList.add("ab-in");
            el.classList.remove("ab-out-up");
          } else if (!entry.isIntersecting) {
            el.classList.remove("ab-in");

            // element screen ke upar nikla hai to "up" exit, warna neeche wali entry
            if (entry.boundingClientRect.top < 0) {
              el.classList.add("ab-out-up");
            } else {
              el.classList.remove("ab-out-up");
            }
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Scroll karte waqt content up/down ki direction me 3D jhukta hai,
  // scroll ruk jaye to wapas seedha ho jaata hai
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let velocity = 0;
    let frame = null;

    const loop = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      // smooth velocity, phir degree me convert (max 10deg)
      velocity = velocity * 0.85 + delta * 0.15;
      const tilt = Math.max(-10, Math.min(10, velocity * 0.35));
      page.style.setProperty("--sv", `${tilt.toFixed(2)}deg`);

      if (Math.abs(velocity) > 0.05 || delta !== 0) {
        frame = requestAnimationFrame(loop);
      } else {
        frame = null;
        velocity = 0;
        page.style.setProperty("--sv", "0deg");
        page.classList.remove("ab-scrolling");
      }
    };

    const onScroll = () => {
      page.classList.add("ab-scrolling");
      if (frame === null) frame = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
      page.classList.remove("ab-scrolling");
      page.style.removeProperty("--sv");
    };
  }, []);

  // Cursor kisi bhi text ya image par aaye to usi element par 3D effect
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SELECTOR =
      "h2, h3, p, blockquote, img, .feature-icon, .ab-step-icon, .ab-mv-icon, .about-know-btn, .ab-stat";

    // class sab elements par lagti hai (scroll lean ke liye bhi chahiye)
    const targets = Array.from(page.querySelectorAll(SELECTOR));
    targets.forEach((el) => el.classList.add("ab-t3d"));

    let current = null;

    const clear = (el) => {
      el.classList.remove("is-hot");
      el.style.setProperty("--trx", "0deg");
      el.style.setProperty("--try", "0deg");
    };

    // mouse ho ya touch, dono me chalta hai
    const onMove = (e) => {
      const el = e.target.closest ? e.target.closest(SELECTOR) : null;

      if (el !== current) {
        if (current) clear(current);
        current = el;
        if (el) el.classList.add("is-hot");
      }

      if (el) {
        const r = el.getBoundingClientRect();
        const x = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
        const y = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
        el.style.setProperty("--trx", `${(-y * 12).toFixed(2)}deg`);
        el.style.setProperty("--try", `${(x * 16).toFixed(2)}deg`);
      }
    };

    const onLeave = () => {
      if (current) {
        clear(current);
        current = null;
      }
    };

    // touch me ungli uthate hi effect khatam
    const onTouchEnd = (e) => {
      if (e.pointerType === "touch") onLeave();
    };

    page.addEventListener("pointerdown", onMove);
    page.addEventListener("pointermove", onMove);
    page.addEventListener("pointerleave", onLeave);
    page.addEventListener("pointerup", onTouchEnd);
    page.addEventListener("pointercancel", onLeave);

    return () => {
      page.removeEventListener("pointerdown", onMove);
      page.removeEventListener("pointermove", onMove);
      page.removeEventListener("pointerleave", onLeave);
      page.removeEventListener("pointerup", onTouchEnd);
      page.removeEventListener("pointercancel", onLeave);
      targets.forEach((el) => {
        clear(el);
        el.classList.remove("ab-t3d");
      });
    };
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
            {/* 3D scene: mouse ke saath layers alag depth par hilte hain */}
            <div
              className="about-visual"
              ref={visualRef}
              onPointerDown={(e) => setTilt(visualRef.current, e, 14)}
              onPointerMove={(e) => setTilt(visualRef.current, e, 14)}
              onPointerLeave={() => resetTilt(visualRef.current)}
              onPointerUp={(e) =>
                e.pointerType === "touch" && resetTilt(visualRef.current)
              }
              onPointerCancel={() => resetTilt(visualRef.current)}
            >
              <div className="visual-stage">
                <div className="visual-grid"></div>

                <div className="visual-orb visual-orb-one"></div>
                <div className="visual-orb visual-orb-two"></div>

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
            </div>

            <div className="about-features">
              {features.map((feature, index) => (
                <Card3D
                  key={feature.number}
                  className="about-feature-card"
                  wrapClass="ab-feature-wrap"
                  reveal="ab-zoom"
                  style={{ "--ab-delay": `${index * 110}ms` }}
                  max={14}
                >
                  <span className="feature-number">{feature.number}</span>

                  <div className="feature-icon">{feature.icon}</div>

                  <h3>{feature.title}</h3>

                  <p className="feature-text">{feature.text}</p>
                </Card3D>
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
          <Card3D className="ab-story-photo" reveal="ab-from-left" max={10}>
            {photoFailed ? (
              <div className="ab-story-fallback">W</div>
            ) : (
              <img
                src={founder.photo}
                alt={founder.name}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </Card3D>

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
              <Card3D
                key={step.title}
                className="ab-step"
                reveal="ab-zoom"
                style={{ "--ab-delay": `${index * 120}ms` }}
                max={14}
              >
                <span className="ab-step-number">0{index + 1}</span>
                <div className="ab-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Card3D>
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
            <Card3D className="ab-mv-card" reveal="ab-from-left" max={8}>
              <div className="ab-mv-icon">
                <Target size={30} strokeWidth={1.6} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To help small businesses get found online and get more
                customers, with a simple, fast and professional website that
                is easy to contact and easy to trust.
              </p>
            </Card3D>

            <Card3D
              className="ab-mv-card ab-mv-card-dark"
              reveal="ab-from-right"
              max={8}
            >
              <div className="ab-mv-icon">
                <Eye size={30} strokeWidth={1.6} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the digital partner that local businesses trust, by
                focusing on quality, honest communication and practical
                solutions that support long-term growth.
              </p>
            </Card3D>
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
                <Card3D
                  key={item.name}
                  className="ab-testimonial"
                  reveal="ab-zoom"
                  style={{ "--ab-delay": `${index * 120}ms` }}
                  max={10}
                >
                  <Quote size={26} strokeWidth={1.6} />
                  <blockquote>{item.text}</blockquote>
                  <div className="ab-testimonial-by">
                    <strong>{item.name}</strong>
                    <span>{item.business}</span>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
