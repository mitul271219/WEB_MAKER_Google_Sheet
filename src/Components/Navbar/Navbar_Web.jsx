// import React, { useState } from "react";
// import { MessageCircle } from "lucide-react";
// import "./Navbar.css";

// export const Navbar_Web = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const openWhatsApp = () => {
//     const phoneNumber = "919876543210";

//     const message = encodeURIComponent(
//       "Hello WEB_MAKER, I would like to know more about your services."
//     );

//     window.open(
//       `https://wa.me/${phoneNumber}?text=${message}`,
//       "_blank"
//     );
//   };

//   return (
//     <>
//       <header className="navbar-wrapper">
//         <nav className="modern-navbar">

//           {/* ================= LOGO ================= */}

//           <a
//             href="#home"
//             className="brand-logo"
//             onClick={closeMenu}
//           >
//             <span className="brand-icon">W</span>

//             <span className="brand-name">
//               WEB_MAKER
//             </span>
//           </a>


//           {/* ================= NAVIGATION ================= */}

//           <div
//             className={`nav-menu ${
//               menuOpen ? "menu-active" : ""
//             }`}
//           >

//             <a href="#home" onClick={closeMenu}>
//               Home
//             </a>

//             <a href="#about" onClick={closeMenu}>
//               About Us
//             </a>

//             <a href="#services" onClick={closeMenu}>
//               Services
//             </a>

//             <a href="#contact" onClick={closeMenu}>
//               Contact
//             </a>


//             {/* ================= MOBILE GET STARTED ================= */}

//             <a
//               href="#contact"
//               className="mobile-start-btn"
//               onClick={closeMenu}
//             >
//               GET STARTED

//               <span>↗</span>
//             </a>


//             {/* ================= MOBILE WHATSAPP ================= */}

//             <button
//               className="mobile-whatsapp-btn"
//               onClick={() => {
//                 openWhatsApp();
//                 closeMenu();
//               }}
//             >
//               <MessageCircle
//                 size={18}
//                 strokeWidth={2}
//               />

//               <span>WhatsApp</span>
//             </button>

//           </div>


//           {/* ================= DESKTOP ACTIONS ================= */}

//           <div className="navbar-actions">

//             {/* WHATSAPP BUTTON */}

//             <button
//               className="navbar-whatsapp"
//               onClick={openWhatsApp}
//               aria-label="Contact us on WhatsApp"
//             >
//               <MessageCircle
//                 size={21}
//                 strokeWidth={2}
//               />

//               <span>WhatsApp</span>
//             </button>


//             {/* GET STARTED */}

//             <a
//               href="#contact"
//               className="start-btn"
//             >
//               <span>GET STARTED</span>

//               <span className="arrow">
//                 ↗
//               </span>
//             </a>

//           </div>


//           {/* ================= HAMBURGER ================= */}

//           <button
//             className={`hamburger ${
//               menuOpen ? "hamburger-active" : ""
//             }`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>

//         </nav>
//       </header>
//     </>
//   );
// };










import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import "./Navbar.css";

export const Navbar_Web = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
      "Hello WEB_MAKER, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  // ======================================================
  // NAVIGATION HANDLER
  //
  // - Section isi page par hai  -> smooth scroll
  //   (e.g. Website Development page par "Contact" form)
  // - Section isi page par nahi -> Home page par jao aur
  //   wahan us section tak scroll karo (App.js ka
  //   ScrollManager "/#id" ko handle karta hai)
  // - id nahi diya (Home / Logo) -> Home page, top par
  // ======================================================
  const goTo = (event, id) => {
    event.preventDefault();
    closeMenu();

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
      <header className="navbar-wrapper">
        <nav className="modern-navbar">

          {/* ================= LOGO ================= */}

          <a
            href="/"
            className="brand-logo"
            onClick={(event) => goTo(event, null)}
          >
            <span className="brand-icon">W</span>

            <span className="brand-name">
              WEB_MAKER
            </span>
          </a>


          {/* ================= NAVIGATION ================= */}

          <div
            className={`nav-menu ${
              menuOpen ? "menu-active" : ""
            }`}
          >

            <a href="/" onClick={(event) => goTo(event, null)}>
              Home
            </a>

            <a
              href="/#about"
              onClick={(event) => goTo(event, "about")}
            >
              About Us
            </a>

            <a
              href="/#services"
              onClick={(event) => goTo(event, "services")}
            >
              Services
            </a>

            <a
              href="/#contact"
              onClick={(event) => goTo(event, "contact")}
            >
              Contact
            </a>


            {/* ================= MOBILE GET STARTED ================= */}

            <a
              href="/#contact"
              className="mobile-start-btn"
              onClick={(event) => goTo(event, "contact")}
            >
              GET STARTED

              <span>↗</span>
            </a>


            {/* ================= MOBILE WHATSAPP ================= */}

            <button
              className="mobile-whatsapp-btn"
              onClick={() => {
                openWhatsApp();
                closeMenu();
              }}
            >
              <MessageCircle
                size={18}
                strokeWidth={2}
              />

              <span>WhatsApp</span>
            </button>

          </div>


          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="navbar-actions">

            {/* WHATSAPP BUTTON */}

            <button
              className="navbar-whatsapp"
              onClick={openWhatsApp}
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle
                size={21}
                strokeWidth={2}
              />

              <span>WhatsApp</span>
            </button>


            {/* GET STARTED */}

            <a
              href="/#contact"
              className="start-btn"
              onClick={(event) => goTo(event, "contact")}
            >
              <span>GET STARTED</span>

              <span className="arrow">
                ↗
              </span>
            </a>

          </div>


          {/* ================= HAMBURGER ================= */}

          <button
            className={`hamburger ${
              menuOpen ? "hamburger-active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </header>
    </>
  );
};
