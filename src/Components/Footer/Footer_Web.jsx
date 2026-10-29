// import React, { useEffect, useRef, useState } from "react";
// import { Sparkles, Globe2, MessageCircle, ArrowUpRight } from "lucide-react";
// import "./Footer.css";

// export const Footer_Web = () => {
//   const footerRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         threshold: 0.15,
//       },
//     );

//     const currentFooter = footerRef.current;

//     if (currentFooter) {
//       observer.observe(currentFooter);
//     }

//     return () => {
//       if (currentFooter) {
//         observer.unobserve(currentFooter);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <footer
//         ref={footerRef}
//         className={`footer-section ${visible ? "footer-visible" : ""}`}
//       >
//         <div className="footer-container">
//           {/* =========================================
//             TOP FOOTER
//         ========================================= */}

//           <div className="footer-top">
//             {/* BRAND */}
//             <div className="footer-brand">
//               <a href="#home" className="footer-logo">
//                 <span className="footer-logo-box">W</span>

//                 <span className="footer-logo-text">WEB_MAKER</span>
//               </a>

//               <p className="footer-tagline">We build your digital presence.</p>
//             </div>

//             {/* NAVIGATION */}
//             <nav className="footer-navigation">
//               <div className="footer-nav-column">
//                 <a href="#home">Home</a>

//                 <a href="#about">About</a>
//               </div>

//               <div className="footer-nav-column">
//                 <a href="#services">Services</a>

//                 <a href="#work">Work</a>
//               </div>

//               <div className="footer-nav-column">
//                 <a href="#pricing">Pricing</a>

//                 <a href="#contact">Contact</a>
//               </div>
//             </nav>

//             {/* SOCIAL / CONTACT ICONS */}
//             <div className="footer-socials">
//               {/* General */}
//               <a
//                 href="#contact"
//                 className="footer-social-btn"
//                 aria-label="Contact WEB_MAKER"
//               >
//                 <Sparkles size={18} strokeWidth={1.6} />
//               </a>

//               {/* Website / Globe */}
//               <a
//                 href="#home"
//                 className="footer-social-btn"
//                 aria-label="WEB_MAKER Website"
//               >
//                 <Globe2 size={18} strokeWidth={1.6} />
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/919999999999?text=Hello%20WEB_MAKER%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer-social-btn"
//                 aria-label="Chat on WhatsApp"
//               >
//                 <MessageCircle size={18} strokeWidth={1.6} />
//               </a>
//             </div>
//           </div>

//           {/* =========================================
//             DIVIDER
//         ========================================= */}

//           <div className="footer-divider"></div>

//           {/* =========================================
//             BOTTOM FOOTER
//         ========================================= */}

//           <div className="footer-bottom">
//             <p className="footer-copyright">
//               © 2026 WEB_MAKER. All rights reserved.
//             </p>

//             <a href="#home" className="footer-intention">
//               <span>Built with intention</span>

//               <Sparkles size={14} strokeWidth={1.6} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };







import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Globe2, MessageCircle } from "lucide-react";
import "./Footer.css";
import { whatsappLink } from "../../config/contact";

export const Footer_Web = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    const currentFooter = footerRef.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  // ======================================================
  // NAVIGATION HANDLER (Navbar jaisa hi)
  //
  // - Section isi page par hai  -> smooth scroll
  // - Section isi page par nahi -> Home page par jao aur
  //   wahan us section tak scroll karo (ScrollManager)
  // - id nahi diya (Home / Logo) -> Home page, top par
  // ======================================================
  const goTo = (event, id) => {
    event.preventDefault();

    // HOME / LOGO
    if (!id) {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      } else {
        navigate("/");
      }
      return;
    }

    // SECTION
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <footer
        ref={footerRef}
        className={`footer-section ${visible ? "footer-visible" : ""}`}
      >
        <div className="footer-container">
          {/* =========================================
            TOP FOOTER
        ========================================= */}

          <div className="footer-top">
            {/* BRAND */}
            <div className="footer-brand">
              <a
                href="/"
                className="footer-logo"
                onClick={(event) => goTo(event, null)}
              >
                <span className="footer-logo-box">W</span>

                <span className="footer-logo-text">WEB_MAKER</span>
              </a>

              <p className="footer-tagline">We build your digital presence.</p>
            </div>

            {/* NAVIGATION */}
            <nav className="footer-navigation">
              <div className="footer-nav-column">
                <a href="/" onClick={(event) => goTo(event, null)}>
                  Home
                </a>

                <a href="/#about" onClick={(event) => goTo(event, "about")}>
                  About
                </a>
              </div>

              <div className="footer-nav-column">
                <a
                  href="/#services"
                  onClick={(event) => goTo(event, "services")}
                >
                  Services
                </a>

                <a href="/#work" onClick={(event) => goTo(event, "work")}>
                  Work
                </a>
              </div>

              <div className="footer-nav-column">
                <a href="/#pricing" onClick={(event) => goTo(event, "pricing")}>
                  Pricing
                </a>

                <a href="/#contact" onClick={(event) => goTo(event, "contact")}>
                  Contact
                </a>
              </div>
            </nav>

            {/* SOCIAL / CONTACT ICONS */}
            <div className="footer-socials">
              {/* General */}
              <a
                href="/#contact"
                className="footer-social-btn"
                aria-label="Contact WEB_MAKER"
                onClick={(event) => goTo(event, "contact")}
              >
                <Sparkles size={18} strokeWidth={1.6} />
              </a>

              {/* Website / Globe */}
              <a
                href="/"
                className="footer-social-btn"
                aria-label="WEB_MAKER Website"
                onClick={(event) => goTo(event, null)}
              >
                <Globe2 size={18} strokeWidth={1.6} />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink(
                  "Hello Mitul Panchal, I want to discuss a website for my business."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {/* =========================================
            DIVIDER
        ========================================= */}

          <div className="footer-divider"></div>

          {/* =========================================
            BOTTOM FOOTER
        ========================================= */}

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 WEB_MAKER. All rights reserved.
            </p>

            <a
              href="/"
              className="footer-intention"
              onClick={(event) => goTo(event, null)}
            >
              <span>Built with intention</span>

              <Sparkles size={14} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
