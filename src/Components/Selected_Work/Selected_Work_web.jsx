import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Selected_Work.css";
import "./Selected_Work_3D.css"; // NEW: 3D / 4D layer (sabse last me import karo)

/* =========================================================
   EDIT YOUR CONTENT HERE
   Sirf is hisse me apna asli content daalo.
========================================================= */

// badge: card par chhota tag ("Concept" ya "Live Demo"). Asli client project ho to badge hata do.
// image: agar screenshot/banner diya hai to card me wahi dikhta hai (preview data ki zarurat nahi, sirf nav + cta chahiye).
// link: live website ka URL (https://... ho to naye tab me khulta hai).
const projects = [
  {
    number: "01",
    type: "CAFÉ",
    year: "2026",
    title: "cafeeNest",
    description:
      "A warm, inviting website for a specialty coffee café, with a clear menu, photo gallery and an easy way to order.",
    services: ["Café menu", "Photo gallery", "Order button"],
    theme: "restaurant",
    badge: "Live Demo",
    concept: false,
    link: "https://cafeenestdemoprojectforwebmaker.vercel.app/", // live demo
    // image: banner screenshot (public/images). Isse card me real site dikhti hai.
    image: "/images/cafeeNest_Demo_Banner_Image.png",
    imageAlt: "cafeeNest café website home page with latte and coffee beans",
    preview: {
      nav: ["Menu", "About", "Gallery"],
      cta: "Order now",
    },
  },
  {
    number: "02",
    type: "SALON",
    year: "2026",
    title: "Cuts_Unisex",
    description:
      "A stylish, premium website for a unisex salon and beauty parlour, with services, a photo gallery and easy appointment booking.",
    services: ["Appointment booking", "Services", "Photo gallery"],
    theme: "salon",
    badge: "Live Demo",
    concept: false,
    link: "https://cuts-unisex-demo-project-for-webmak.vercel.app/", // live demo
    image: "/images/cuts_unisex_Demo_Banner_Image.png",
    imageAlt:
      "Cuts_Unisex salon website home page with a black and gold salon chair",
    preview: {
      nav: ["Services", "Gallery", "Contact"],
      cta: "Book now",
    },
  },
  {
    number: "03",
    type: "SERVICES",
    year: "2026",
    title: "Northline Studio",
    description:
      "A sharp portfolio experience for an independent creative team, built to show their best work and bring in new projects.",
    services: ["Portfolio grid", "Case studies", "Contact form"],
    theme: "studio",
    badge: "Concept",
    concept: true,
    link: "#contact",
    preview: {
      nav: ["Work", "Process", "Contact"],
      cta: "Let's talk",
      eyebrow: "BRANDING · WEB · MOTION",
      heading: "We design brands that people remember.",
      sub: "An independent creative team for startups and growing businesses.",
      buttons: ["View projects", "Start a project"],
      blockTitle: "Recent projects",
      tiles: ["Aarav Coffee", "Lumen Labs", "Kora Fashion", "Fleet Go"],
      note: "Now booking projects for next month",
    },
  },
];

/* ========================================================= */

// http(s) link ho to naye tab me kholo (safe), "#contact" jaisa ho to same page par
const linkProps = (href) =>
  /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/* ---------------------------------------------------------
   Pointer (mouse ya ungli) se card ka 3D tilt
   CSS variables: --rx/--ry (tilt), --mx/--my (glare ki position)
--------------------------------------------------------- */
const setTilt = (el, event, max) => {
  if (!el) return;

  const r = el.getBoundingClientRect();
  const x = clamp((event.clientX - r.left) / r.width - 0.5, -0.5, 0.5);
  const y = clamp((event.clientY - r.top) / r.height - 0.5, -0.5, 0.5);

  el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
  el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
};

const resetTilt = (el) => {
  if (!el) return;

  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};

/* ---------------------------------------------------------
   MockSite: card ke andar chhoti si realistic website
   (isme scroll karne par page andar se bhi scroll hota hai)
--------------------------------------------------------- */
const MockSite = ({ data }) => (
  <div className="mock-page" aria-hidden="true">
    <div className="mock-hero">
      <span className="mock-eyebrow">{data.eyebrow}</span>

      <strong className="mock-title">{data.heading}</strong>

      <span className="mock-sub">{data.sub}</span>

      <div className="mock-buttons">
        <span className="mock-btn mock-btn-primary">{data.buttons[0]}</span>
        <span className="mock-btn mock-btn-ghost">{data.buttons[1]}</span>
      </div>
    </div>

    <div className="mock-block">
      <span className="mock-block-title">{data.blockTitle}</span>

      {data.rows && (
        <div className="mock-rows">
          {data.rows.map((row) => (
            <div className="mock-row" key={row.label}>
              <span>{row.label}</span>
              <em>{row.meta}</em>
            </div>
          ))}
        </div>
      )}

      {data.tiles && (
        <div className="mock-tiles">
          {data.tiles.map((tile) => (
            <div className="mock-tile" key={tile}>
              <span>{tile}</span>
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="mock-note">{data.note}</div>
  </div>
);

export const Selected_Work_web = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  // 3D reveal: neeche scroll karo to aage aata hai, upar scroll karo to upar ghoom kar nikalta hai
  // (har baar chalta hai, sirf ek baar nahi)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".wk-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            el.classList.add("is-in");
            el.classList.remove("out-up");
          } else if (!entry.isIntersecting) {
            el.classList.remove("is-in");

            if (entry.boundingClientRect.top < 0) {
              el.classList.add("out-up");
            } else {
              el.classList.remove("out-up");
            }
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Scroll se jude 3D effects:
  // --sp  : poore section ki position (heading / background parallax)
  // --cp  : har card ki position (card jhukta hai, andar ki website scroll hoti hai)
  // --sv  : scroll ki speed (tez scroll par cards direction me jhukte hain)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(section.querySelectorAll(".work-card"));

    // transform se bachne ke liye offsetTop use karte hain (tilt se value nahi badalti)
    const pageTop = (el) => {
      let y = 0;
      let node = el;

      while (node) {
        y += node.offsetTop;
        node = node.offsetParent;
      }

      return y;
    };

    let ticking = false;
    let lastY = window.scrollY;
    let velocity = 0;
    let leanFrame = null;

    const update = () => {
      ticking = false;

      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const sectionTop = pageTop(section) - scrollY;
      const sectionH = section.offsetHeight;

      if (sectionTop + sectionH < -200 || sectionTop > vh + 200) return;

      const sp = clamp(
        (sectionTop + sectionH / 2 - vh / 2) / (sectionH / 2 + vh / 2),
        -1,
        1
      );

      section.style.setProperty("--sp", sp.toFixed(3));

      cards.forEach((card) => {
        const top = pageTop(card) - scrollY;
        const h = card.offsetHeight;
        const cp = clamp((top + h / 2 - vh / 2) / (h / 2 + vh / 2), -1, 1);

        card.style.setProperty("--cp", cp.toFixed(3));
      });
    };

    const lean = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      velocity = velocity * 0.85 + delta * 0.15;

      const tilt = clamp(velocity * 0.35, -9, 9);
      section.style.setProperty("--sv", `${tilt.toFixed(2)}deg`);

      if (Math.abs(velocity) > 0.05 || delta !== 0) {
        leanFrame = requestAnimationFrame(lean);
      } else {
        leanFrame = null;
        velocity = 0;
        section.style.setProperty("--sv", "0deg");
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }

      if (leanFrame === null) leanFrame = requestAnimationFrame(lean);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (leanFrame !== null) cancelAnimationFrame(leanFrame);

      section.style.removeProperty("--sv");
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`work-section ${visible ? "work-visible" : ""}`}
        id="work"
      >
        {/* background: scroll ke saath hilta hua grid aur glow */}
        <div className="work-bg" aria-hidden="true">
          <span className="work-bg-grid"></span>
          <span className="work-bg-orb work-bg-orb-one"></span>
          <span className="work-bg-orb work-bg-orb-two"></span>
        </div>

        <div className="work-container">
          {/* ==========================================
              TOP LABEL
          ========================================== */}

          <div className="work-label wk-reveal" style={{ "--card-delay": "0s" }}>
            <span>04</span>
            <span>/</span>
            <strong>SELECTED WORK</strong>
          </div>

          {/* ==========================================
              HEADER
          ========================================== */}

          <div className="work-header">
            <div
              className="work-heading wk-reveal"
              style={{ "--card-delay": "0.1s" }}
            >
              <h2>
                Work that speaks
                <br />
                <span>for itself.</span>
              </h2>

              <p className="work-intro">
                Sample projects that show how we design for local businesses:
                clear, fast and built to bring in enquiries.
              </p>
            </div>

            <a
              href="#contact"
              className="work-project-btn wk-reveal"
              style={{ "--card-delay": "0.3s" }}
            >
              <span>START A PROJECT</span>

              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* ==========================================
              PROJECT GRID
          ========================================== */}

          <div className="work-grid">
            {projects.map((project, index) => (
              <article
                className={`work-card wk-reveal ${
                  index === 0 ? "wk-left" : index === 2 ? "wk-right" : "wk-up"
                } ${project.theme}`}
                key={project.number}
                style={{
                  "--card-delay": `${0.2 + index * 0.16}s`,
                }}
                onPointerDown={(event) =>
                  setTilt(event.currentTarget, event, 11)
                }
                onPointerMove={(event) =>
                  setTilt(event.currentTarget, event, 11)
                }
                onPointerLeave={(event) => resetTilt(event.currentTarget)}
                onPointerUp={(event) =>
                  event.pointerType === "touch" && resetTilt(event.currentTarget)
                }
                onPointerCancel={(event) => resetTilt(event.currentTarget)}
              >
                {/* ==================================
                    WEBSITE PREVIEW
                ================================== */}

                <div className="work-preview">
                  <div className="browser-window">
                    {/* Browser Header */}

                    <div className="browser-header">
                      <div className="browser-name">{project.title}</div>

                      <div className="browser-links">
                        {project.preview.nav.map((link) => (
                          <span key={link}>{link}</span>
                        ))}

                        <span className="browser-cta">
                          {project.preview.cta}
                        </span>
                      </div>
                    </div>

                    {/* Website Content (andar se scroll hota hai) */}

                    <div className="mock-viewport">
                      {project.image ? (
                        <a
                          className="mock-shot"
                          href={project.link}
                          {...linkProps(project.link)}
                          aria-label={`Open ${project.title} live demo`}
                        >
                          <img
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                          />
                        </a>
                      ) : (
                        <MockSite data={project.preview} />
                      )}
                    </div>
                  </div>
                </div>

                {/* ==================================
                    PROJECT INFORMATION
                ================================== */}

                <div className="work-info">
                  <div className="work-info-top">
                    <div>
                      <span className="work-type">
                        {project.type} · {project.year}
                        {project.badge && (
                          <em
                            className={`work-concept ${
                              project.concept ? "" : "work-live"
                            }`}
                          >
                            {project.badge}
                          </em>
                        )}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <a
                      href={project.link}
                      {...linkProps(project.link)}
                      className="work-arrow"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p>{project.description}</p>

                  <div className="work-tags">
                    {project.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
