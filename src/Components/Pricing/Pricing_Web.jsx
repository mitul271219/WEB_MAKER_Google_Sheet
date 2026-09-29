// import React, { useEffect, useRef, useState } from "react";
// import { Check, ArrowUpRight } from "lucide-react";
// import './Pricing.css'

// export const Pricing_Web = () => {

//           const pricingRef = useRef(null);
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
//       }
//     );

//     const currentSection = pricingRef.current;

//     if (currentSection) {
//       observer.observe(currentSection);
//     }

//     return () => {
//       if (currentSection) {
//         observer.unobserve(currentSection);
//       }
//     };
//   }, []);

//   const plans = [
//     {
//       name: "STARTER",
//       price: "5,999",
//       description: "A focused launchpad for your business.",
//       features: [
//         "1-page website",
//         "Responsive design",
//         "WhatsApp button",
//         "Contact section",
//         "Mobile optimization",
//       ],
//       popular: false,
//     },

//     {
//       name: "BUSINESS",
//       price: "9,999",
//       description: "Everything you need to look established online.",
//       features: [
//         "4–5 pages",
//         "Premium design",
//         "WhatsApp integration",
//         "Google Maps",
//         "Contact form",
//         "Basic SEO",
//       ],
//       popular: true,
//     },

//     {
//       name: "PROFESSIONAL",
//       price: "15,999",
//       description: "A complete digital foundation built to scale.",
//       features: [
//         "5–8 pages",
//         "Custom design",
//         "Advanced animations",
//         "WhatsApp integration",
//         "Google Business setup",
//         "Basic SEO",
//         "Maintenance/support",
//       ],
//       popular: false,
//     },
//   ];

//   return (
//     <>


//          <section
//       ref={pricingRef}
//       className={`pricing-section ${visible ? "pricing-visible" : ""}`}
//       id="pricing"
//     >
//       <div className="pricing-container">
//         {/* ================= TOP LABEL ================= */}

//         <div className="pricing-label">
//           <span>05</span>
//           <span>/</span>
//           <strong>INVEST IN YOUR GROWTH</strong>
//         </div>

//         {/* ================= HEADER ================= */}

//         <div className="pricing-header">
//           <div className="pricing-heading">
//             <h2>
//               Good design is an
//               <br />
//               <span>investment, not an</span>
//               <br />
//               <span>expense.</span>
//             </h2>
//           </div>

//           <div className="pricing-description">
//             <p>
//               Clear packages, no confusing jargon. Choose the right foundation
//               for where your business is today.
//             </p>
//           </div>
//         </div>

//         {/* ================= PRICING CARDS ================= */}

//         <div className="pricing-grid">
//           {plans.map((plan, index) => (
//             <div
//               className={`pricing-card ${
//                 plan.popular ? "pricing-card-popular" : ""
//               }`}
//               key={plan.name}
//               style={{
//                 transitionDelay: `${index * 150}ms`,
//               }}
//             >
//               {/* Popular Badge */}

//               {plan.popular && (
//                 <div className="popular-badge">MOST POPULAR</div>
//               )}

//               {/* Plan Name */}

//               <div className="pricing-plan-name">{plan.name}</div>

//               {/* Price */}

//               <div className="pricing-price">
//                 <span className="currency">₹</span>
//                 <span>{plan.price}</span>
//               </div>

//               {/* Description */}

//               <p className="pricing-plan-description">{plan.description}</p>

//               {/* Divider */}

//               <div className="pricing-divider"></div>

//               {/* Features */}

//               <div className="pricing-features">
//                 {plan.features.map((feature, featureIndex) => (
//                   <div className="pricing-feature" key={featureIndex}>
//                     <Check size={15} strokeWidth={1.6} />

//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Button */}

//               <a href="#contact" className="pricing-button">
//                 <span>GET STARTED</span>

//                 <ArrowUpRight size={16} />
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* ================= NOTE ================= */}

//         <div className="pricing-note">
//           Domain & hosting charges may be separate.
//         </div>
//       </div>
//     </section>


//     </>
//   )
// }







import React, { useEffect, useRef, useState } from "react";
import { Check, ArrowUpRight, X } from "lucide-react";
import './Pricing.css'

export const Pricing_Web = () => {
  const pricingRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const currentSection = pricingRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  // Popup open hone par background scrolling band karein.
  // Escape key se popup close bhi hoga.
  useEffect(() => {
    if (!selectedPlan) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPlan(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan]);

  const plans = [
    {
      name: "STARTER",
      price: "5,999",
      description: "A focused launchpad for your business.",
      features: [
        "1-page website",
        "Responsive design",
        "WhatsApp button",
        "Contact section",
        "Mobile optimization",
      ],
      popular: false,
      overview:
        "A simple, professional online presence for small businesses that need a clean website to showcase their services and contact information.",
      details: [
        {
          title: "One-page business website",
          description:
            "A single scrolling page with your business information, services, introduction and contact details.",
        },
        {
          title: "Responsive design",
          description:
            "A mobile-friendly layout that adapts to desktop, tablet and mobile screens.",
        },
        {
          title: "WhatsApp button",
          description:
            "A click-to-chat button so visitors can contact your business through WhatsApp.",
        },
        {
          title: "Contact section",
          description:
            "Business contact information and a clear call-to-action for visitors.",
        },
        {
          title: "Basic visual styling",
          description:
            "Clean styling based on your business name, supplied content and brand details.",
        },
      ],
      structure: [
        "Hero / Introduction",
        "Services or products",
        "About / Business highlights",
        "Contact information",
      ],
      notIncluded: [
        "Additional website pages",
        "Advanced custom animations",
        "Online store or payment gateway",
        "Advanced SEO",
        "Google Business Profile setup",
        "Domain and hosting charges, if applicable",
        "Ongoing maintenance",
      ],
    },

    {
      name: "BUSINESS",
      price: "9,999",
      description: "Everything you need to look established online.",
      features: [
        "4–5 pages",
        "Premium design",
        "WhatsApp integration",
        "Google Maps",
        "Contact form",
        "Basic SEO",
      ],
      popular: true,
      overview:
        "A multi-page business website designed to present your services professionally, help customers contact you and establish your online presence.",
      details: [
        {
          title: "4–5 website pages",
          description:
            "Multiple pages to organize your business introduction, services, about information and contact details.",
        },
        {
          title: "Premium website design",
          description:
            "A polished visual layout with consistent styling and a professional presentation for your brand.",
        },
        {
          title: "WhatsApp integration",
          description:
            "WhatsApp contact functionality to help visitors connect with your business.",
        },
        {
          title: "Google Maps integration",
          description:
            "Display your business location on your website to help customers find you.",
        },
        {
          title: "Contact form",
          description:
            "A form for visitors to submit enquiries through your website.",
        },
        {
          title: "Basic SEO",
          description:
            "Basic search-engine-friendly page structure and on-page optimization within the agreed scope.",
        },
      ],
      structure: [
        "Home",
        "About",
        "Services / Products",
        "Additional business page",
        "Contact",
      ],
      notIncluded: [
        "Domain and hosting charges, if applicable",
        "Paid stock images or other paid assets",
        "Advanced SEO services",
        "Online store or payment gateway unless agreed separately",
        "Ongoing maintenance unless agreed separately",
      ],
    },

    {
      name: "PROFESSIONAL",
      price: "15,999",
      description: "A complete digital foundation built to scale.",
      features: [
        "5–8 pages",
        "Custom design",
        "Advanced animations",
        "WhatsApp integration",
        "Google Business setup",
        "Basic SEO",
        "Maintenance/support",
      ],
      popular: false,
      overview:
        "A more comprehensive website package for businesses looking for custom styling, additional pages, advanced visual effects and a stronger digital foundation.",
      details: [
        {
          title: "5–8 website pages",
          description:
            "More room to organize business information, services, products and other important content.",
        },
        {
          title: "Custom design",
          description:
            "A tailored visual direction for your business and its website content.",
        },
        {
          title: "Advanced animations",
          description:
            "Additional motion and visual effects to enhance the browsing experience.",
        },
        {
          title: "WhatsApp integration",
          description:
            "WhatsApp contact functionality to make it easier for visitors to reach your business.",
        },
        {
          title: "Google Business setup",
          description:
            "Basic Google Business Profile setup assistance as part of the agreed package scope.",
        },
        {
          title: "Basic SEO",
          description:
            "Basic search-engine-friendly structure and on-page optimization within the agreed scope.",
        },
        {
          title: "Maintenance / support",
          description:
            "Website maintenance and support within the scope and terms agreed before work begins.",
        },
      ],
      structure: [
        "Home",
        "About",
        "Services / Products",
        "Additional business pages",
        "Contact",
      ],
      notIncluded: [
        "Domain and hosting charges, if applicable",
        "Paid third-party services or assets",
        "Advanced SEO beyond the agreed scope",
        "Online store or payment gateway unless agreed separately",
      ],
    },
  ];

  const openPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const closePlan = () => {
    setSelectedPlan(null);
  };

  return (
    <>
      <section
        ref={pricingRef}
        className={`pricing-section ${
          visible ? "pricing-visible" : ""
        }`}
        id="pricing"
      >
        <div className="pricing-container">
          <div className="pricing-label">
            <span>05</span>
            <span>/</span>
            <strong>INVEST IN YOUR GROWTH</strong>
          </div>

          <div className="pricing-header">
            <div className="pricing-heading">
              <h2>
                Good design is an
                <br />
                <span>investment, not an</span>
                <br />
                <span>expense.</span>
              </h2>
            </div>

            <div className="pricing-description">
              <p>
                Clear packages, no confusing jargon. Choose the right
                foundation for where your business is today.
              </p>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${
                  plan.popular ? "pricing-card-popular" : ""
                }`}
                key={plan.name}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <div className="pricing-plan-name">
                  {plan.name}
                </div>

                {/* Price par click karne se popup khulega */}
                <button
                  type="button"
                  className="pricing-price pricing-price-trigger"
                  onClick={() => openPlan(plan)}
                  aria-label={`Learn more about the ${plan.name} package, ₹${plan.price}`}
                >
                  <span className="currency">₹</span>
                  <span>{plan.price}</span>
                </button>

                <p className="pricing-plan-description">
                  {plan.description}
                </p>

                <div className="pricing-divider"></div>

                <div className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      className="pricing-feature"
                      key={featureIndex}
                    >
                      <Check size={15} strokeWidth={1.6} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Get Started ki jagah Learn More */}
                <button
                  type="button"
                  className="pricing-button"
                  onClick={() => openPlan(plan)}
                  aria-label={`Learn more about the ${plan.name} package`}
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            Domain & hosting charges may be separate.
          </div>
        </div>
      </section>

      {/* ================= PACKAGE DETAILS POPUP ================= */}

      {selectedPlan && (
        <div
          className="package-modal-overlay"
          onClick={closePlan}
        >
          <div
            className="package-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-modal-header">
              <div>
                <span className="package-modal-eyebrow">
                  WEB_MAKER / WEBSITE PACKAGE
                </span>

                <h2 id="package-modal-title">
                  {selectedPlan.name}
                </h2>

                <p className="package-modal-subtitle">
                  {selectedPlan.description}
                </p>
              </div>

              <button
                type="button"
                className="package-modal-close"
                onClick={closePlan}
                aria-label="Close package details"
              >
                <X size={22} />
              </button>
            </div>

            <div className="package-modal-price">
              <span>Package price</span>
              <strong>₹{selectedPlan.price}</strong>
            </div>

            <div className="package-modal-body">
              <p className="package-modal-overview">
                {selectedPlan.overview}
              </p>

              <h3>What's included</h3>

              <div className="package-modal-details">
                {selectedPlan.details.map((item, index) => (
                  <div
                    className="package-detail-item"
                    key={item.title}
                  >
                    <div className="package-detail-icon">
                      <Check size={17} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Suggested page structure</h3>

              <ul className="package-modal-list">
                {selectedPlan.structure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="package-exclusions">
                <h3>Not included / separate charges</h3>

                <ul className="package-modal-list">
                  {selectedPlan.notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="package-modal-note">
                Final scope, delivery timeline, revisions and
                any additional charges should be confirmed before
                work begins. SEO improves search-engine
                accessibility but does not guarantee a #1 Google
                ranking.
              </p>
            </div>

            <div className="package-modal-footer">
              <button
                type="button"
                className="package-modal-contact"
                onClick={() => {
                  closePlan();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span>ENQUIRE ABOUT THIS PACKAGE</span>
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};