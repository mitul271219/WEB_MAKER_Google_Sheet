import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import "./FloatingButtons.css";
import { OWNER_NAME, whatsappLink } from "../../config/contact";

// Greeting bubble ek session me sirf ek baar dikhe
const GREETING_KEY = "webmaker_wa_greeting_seen";

export const FloatingButtons_Web = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  // ===============================
  // BACK TO TOP BUTTON
  // ===============================
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ===============================
  // GREETING BUBBLE ("Hi, I'm Mitul...")
  // 6 second baad aata hai, 15 second baad khud chala jata hai
  // ===============================
  useEffect(() => {
    try {
      if (sessionStorage.getItem(GREETING_KEY)) return undefined;
    } catch (error) {
      // storage band ho to bhi bubble dikha do
    }

    const showTimer = setTimeout(() => setShowGreeting(true), 6000);
    const hideTimer = setTimeout(() => setShowGreeting(false), 21000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const closeGreeting = () => {
    setShowGreeting(false);

    try {
      sessionStorage.setItem(GREETING_KEY, "1");
    } catch (error) {
      // ignore
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="floating-buttons">
        {/* GREETING BUBBLE */}
        {showGreeting && (
          <div className="wa-greeting" role="status">
            <button
              type="button"
              className="wa-greeting-close"
              onClick={closeGreeting}
              aria-label="Close message"
            >
              <X size={14} />
            </button>

            <div className="wa-greeting-avatar">
              {OWNER_NAME.charAt(0)}
            </div>

            <div className="wa-greeting-text">
              <strong>Hi, I'm {OWNER_NAME.split(" ")[0]}</strong>

              <span>
                Need a website for your business? Chat with me on WhatsApp.
              </span>

              <a
                href={whatsappLink(
                  `Hello ${OWNER_NAME}, I want to build a website for my business.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-greeting-link"
                onClick={closeGreeting}
              >
                Start chat
              </a>
            </div>
          </div>
        )}

        {/* BACK TO TOP */}
        <button
          type="button"
          className={`floating-btn top-btn ${
            showTopButton ? "show-top-btn" : ""
          }`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={22} strokeWidth={1.8} />
        </button>

        {/* WHATSAPP (Click-to-Chat) */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          aria-label={`Chat with ${OWNER_NAME} on WhatsApp`}
          onClick={closeGreeting}
        >
          <MessageCircle size={23} strokeWidth={1.8} />
        </a>
      </div>
    </>
  );
};
