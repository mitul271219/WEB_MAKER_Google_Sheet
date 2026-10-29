import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Play, Pause } from "lucide-react";
import "./HeroSection.css";
import "./HeroSlider_Extra.css";

// ===============================
// SLIDES (5 website images)
// Images ko public/images/hero/ folder me rakho.
// Apni khud ki website screenshots lagani hon to bas yahan path badal do.
// Image lambi (tall) honi chahiye, tabhi scroll hone ka video effect dikhega.
// Best size: 1350 x 2600 px
// ===============================
const slides = [
  {
    image: "/images/hero/hero-salon.svg",
    alt: "Beauty salon website design",
    label: "Beauty Salon",
    url: "glowsalon.com",
  },
  {
    image: "/images/hero/hero-restaurant.svg",
    alt: "Restaurant website design",
    label: "Restaurant",
    url: "spiceroute.in",
  },
  {
    image: "/images/hero/hero-realestate.svg",
    alt: "Real estate website design",
    label: "Real Estate",
    url: "urbannest.in",
  },
  {
    image: "/images/hero/hero-gym.svg",
    alt: "Fitness gym website design",
    label: "Fitness Gym",
    url: "ironpulse.fit",
  },
  {
    image: "/images/hero/hero-clinic.svg",
    alt: "Dental clinic website design",
    label: "Dental Clinic",
    url: "brightsmile.care",
  },
];

// Ek slide kitni der chale (milliseconds)
const SLIDE_MS = 6000;

// Image kitni scroll hogi. 1600 / 2600 = 61.54%
// (agar apni image ka size alag hai to: (image height - visible height) / image height * 100)
const SCROLL_PERCENT = 61.54;

const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const HeroSection_Web = () => {
  const heroRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [reduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Refs jo bina re-render ke animation chalate hain
  const imgRefs = useRef([]);
  const barRefs = useRef([]);
  const timeRef = useRef(null);
  const elapsedRef = useRef(0);

  // Video ki tarah: mouse upar aaye to pause
  const isPaused = userPaused || hovered;

  // ===============================
  // HERO SCROLL ANIMATION
  // ===============================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentHero = heroRef.current;

    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
    };
  }, []);

  // ===============================
  // VIDEO-STYLE PLAYBACK
  // Har frame par: website image neeche scroll hoti hai,
  // progress bar bharti hai, aur timer chalta hai.
  // ===============================
  useLayoutEffect(() => {
    const paint = (p) => {
      // 1) Website image scroll (screen recording jaisa)
      const img = imgRefs.current[currentSlide];

      if (img && !reduceMotion) {
        const scrollProgress = easeInOut(Math.min(p / 0.88, 1));

        img.style.transform = `translate3d(0, -${(
          SCROLL_PERCENT * scrollProgress
        ).toFixed(3)}%, 0)`;
      }

      // 2) Progress bars
      barRefs.current.forEach((bar, index) => {
        if (!bar) return;

        const value =
          index < currentSlide ? 1 : index === currentSlide ? p : 0;

        bar.style.transform = `scaleX(${value})`;
      });

      // 3) Timer text (0:03 / 0:06)
      if (timeRef.current) {
        const seconds = Math.floor((p * SLIDE_MS) / 1000);

        timeRef.current.textContent = `0:0${seconds} / 0:0${SLIDE_MS / 1000}`;
      }
    };

    // Slide badalte hi ya pause par turant sahi position dikhao
    paint(elapsedRef.current / SLIDE_MS);

    if (isPaused) return undefined;

    let frame;
    let last = null;

    const tick = (now) => {
      if (last === null) last = now;

      // Tab background se wapas aaye to jump na kare
      elapsedRef.current += Math.min(now - last, 100);
      last = now;

      const p = Math.min(elapsedRef.current / SLIDE_MS, 1);

      paint(p);

      if (p >= 1) {
        elapsedRef.current = 0;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [currentSlide, isPaused, reduceMotion]);

  const goToSlide = (index) => {
    elapsedRef.current = 0;
    setCurrentSlide(index);
  };

  return (
    <>
      <section
        ref={heroRef}
        className={`hero-section ${visible ? "hero-visible" : ""}`}
        id="home"
      >
        {/* ================= BACKGROUND EFFECTS ================= */}

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>

        <div className="hero-grid"></div>

        <div className="hero-container">
          {/* ================= LEFT CONTENT ================= */}

          <div className="hero-content">
            {/* Badge */}
            <div className="hero-label">
              <span className="status-dot"></span>

              <span>DIGITAL PARTNERS FOR LOCAL BUSINESS</span>
            </div>

            {/* Heading */}
            <h1 className="hero-title">
              We build websites that <span>build businesses.</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              WEB_MAKER helps local businesses create a powerful digital
              presence with modern websites, Google Business setup, WhatsApp
              integration and reliable maintenance.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <a href="#contact" className="hero-primary-btn">
                <span>Get Started</span>
                <span className="primary-arrow">↗</span>
              </a>

              <a href="#services" className="hero-secondary-btn">
                <span>Explore Services</span>
                <span className="secondary-arrow">→</span>
              </a>
            </div>

            {/* Mini Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <strong>01</strong>
                <span>Websites</span>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <strong>02</strong>
                <span>Digital Growth</span>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <strong>03</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="hero-visual">
            <div className="image-shadow"></div>

            <div className="website-card">
              {/* Browser Top */}
              <div className="browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-url">{slides[currentSlide].url}</div>

                <div className="browser-menu">•••</div>
              </div>

              {/* ================= VIDEO-STYLE WEBSITE SLIDER ================= */}

              <div
                className="website-image-wrapper"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setHovered(true);
                }}
                onPointerLeave={() => setHovered(false)}
              >
                <div className="website-slider">
                  {slides.map((item, index) => (
                    <div
                      key={item.image}
                      className={`website-slide ${
                        currentSlide === index ? "active" : ""
                      }`}
                      aria-hidden={currentSlide !== index}
                    >
                      <img
                        ref={(element) => {
                          imgRefs.current[index] = element;
                        }}
                        src={item.image}
                        alt={item.alt}
                        className="website-image"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>

                <div className="image-overlay"></div>

                {/* "Live preview" badge */}
                <div className="video-badge">
                  <span className="video-rec"></span>
                  <span>{slides[currentSlide].label}</span>
                </div>

                {/* Video controls */}
                <div className="video-controls">
                  <button
                    type="button"
                    className="video-play"
                    aria-label={userPaused ? "Play preview" : "Pause preview"}
                    onClick={() => setUserPaused((prev) => !prev)}
                  >
                    {userPaused ? (
                      <Play size={14} fill="currentColor" />
                    ) : (
                      <Pause size={14} fill="currentColor" />
                    )}
                  </button>

                  <div className="video-segments">
                    {slides.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        className="video-segment"
                        aria-label={`Show ${item.label} website`}
                        aria-current={currentSlide === index}
                        onClick={() => goToSlide(index)}
                      >
                        <span
                          className="video-segment-fill"
                          ref={(element) => {
                            barRefs.current[index] = element;
                          }}
                        ></span>
                      </button>
                    ))}
                  </div>

                  <span className="video-time" ref={timeRef}>
                    0:00 / 0:0{SLIDE_MS / 1000}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= FLOATING CARD ================= */}

            <div className="floating-card">
              <div className="floating-icon">↗</div>

              <div>
                <span>Digital Presence</span>
                <strong>Growing Business</strong>
              </div>
            </div>

            {/* ================= SMALL FLOATING BADGE ================= */}

            <div className="floating-badge">
              <span className="badge-check">✓</span>

              <div>
                <small>Website</small>
                <strong>Ready to Grow</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line"></div>
        </div>
      </section>
    </>
  );
};
