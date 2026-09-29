import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import "./Navbar.css";

export const Navbar_Web = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="modern-navbar">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            className="brand-logo"
            onClick={closeMenu}
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

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About Us
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>


            {/* ================= MOBILE GET STARTED ================= */}

            <a
              href="#contact"
              className="mobile-start-btn"
              onClick={closeMenu}
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
              href="#contact"
              className="start-btn"
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