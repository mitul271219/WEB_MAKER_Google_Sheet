import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import "./FloatingButtons.css";

export const FloatingButtons_Web = () => {

         const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "7818966989";

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

         <div className="floating-buttons">

      {/* BACK TO TOP */}
      <button
        className={`floating-btn top-btn ${
          showTopButton ? "show-top-btn" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={22} strokeWidth={1.8} />
      </button>

      {/* WHATSAPP */}
      <button
        className="floating-btn whatsapp-btn"
        onClick={openWhatsApp}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={23} strokeWidth={1.8} />
      </button>

    </div>

   </>
  )
}
