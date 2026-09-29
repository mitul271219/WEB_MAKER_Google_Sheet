// import React, { useEffect, useRef, useState } from "react";
// import {
//   MessageCircle,
//   Send,
//   Clock3,
//   ArrowUpRight,
//   ChevronDown,
// } from "lucide-react";
// import "./Conatct_Form.css";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { PostContactSheet } from "../../Reducx_Store/TesterSlice";

// export const Contact_Form_Web = () => {
//   const contactRef = useRef(null);
//   const dispatch = useDispatch()

//   const [visible, setVisible] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     businessName: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

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

//     const currentSection = contactRef.current;

//     if (currentSection) {
//       observer.observe(currentSection);
//     }

//     return () => {
//       if (currentSection) {
//         observer.unobserve(currentSection);
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };



//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   dispatch(PostContactSheet({formData})).then((res) => {
//   //       console.log(res);
        
//   //       // console.log("Contact Form Data:", formData);
//   //         toast.success("Submit successfully!")
      
//   //       setFormData({
//   //         name: "",
//   //         businessName: "",
//   //         email: "",
//   //         phone: "",
//   //         service: "",
//   //         message: "",
//   //       });
//   //   })
//   // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {

//     const res = await dispatch(
//       PostContactSheet({ formData })
//     ).unwrap();

//     console.log("Contact Submit Response:", res);

//     toast.success("Submit successfully!");

//     setFormData({
//       name: "",
//       businessName: "",
//       email: "",
//       phone: "",
//       service: "",
//       message: "",
//     });

//   } catch (error) {

//     console.error("Contact Submit Error:", error);

//     toast.error("Something went wrong. Please try again.");

//   }
// };


//   return (
//     <>
//       <section
//         className={`contact-section ${visible ? "contact-visible" : ""}`}
//         id="contact"
//         ref={contactRef}
//       >
//         <div className="contact-container">
//           {/* ==================================================
//             LEFT SIDE
//         ================================================== */}

//           <div className="contact-left">
//             {/* Section Label */}
//             <div className="contact-label">
//               <span>06</span>
//               <span>/</span>
//               <strong>SAY HELLO</strong>
//             </div>

//             {/* Heading */}
//             <h2 className="contact-heading">
//               Let's build your
//               <br />
//               <span>next chapter.</span>
//             </h2>

//             {/* Description */}
//             <p className="contact-description">
//               Tell us a little about your business and we'll get back to you
//               with ideas, clarity and a practical next step.
//             </p>

//             {/* Contact Details */}
//             <div className="contact-details">
//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/919999999999?text=Hello%20WEB_MAKER%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-detail"
//               >
//                 <div className="contact-detail-icon">
//                   <MessageCircle size={20} strokeWidth={1.7} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <small>WHATSAPP</small>
//                   <span>+91 99999 99999</span>
//                 </div>

//                 <ArrowUpRight className="contact-detail-arrow" size={16} />
//               </a>

//               {/* Email */}
//               <a href="mailto:hello@webmaker.in" className="contact-detail">
//                 <div className="contact-detail-icon">
//                   <Send size={20} strokeWidth={1.7} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <small>EMAIL US</small>
//                   <span>hello@webmaker.in</span>
//                 </div>

//                 <ArrowUpRight className="contact-detail-arrow" size={16} />
//               </a>

//               {/* Business Hours */}
//               <div className="contact-detail contact-hours">
//                 <div className="contact-detail-icon">
//                   <Clock3 size={20} strokeWidth={1.7} />
//                 </div>

//                 <div className="contact-detail-content">
//                   <small>BUSINESS HOURS</small>
//                   <span>Mon–Sat, 10am–7pm</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ==================================================
//             RIGHT SIDE FORM
//         ================================================== */}

//           <div className="contact-form-wrapper">
//             <form className="contact-form" onSubmit={handleSubmit}>
//               {/* ================= ROW 1 ================= */}

//               <div className="contact-form-row">
//                 {/* Name */}
//                 <div className="contact-field">
//                   <label htmlFor="name">NAME</label>

//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>

//                 {/* Business Name */}
//                 <div className="contact-field">
//                   <label htmlFor="businessName">BUSINESS NAME</label>

//                   <input
//                     id="businessName"
//                     type="text"
//                     name="businessName"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                     placeholder="Your business"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* ================= ROW 2 ================= */}

//               <div className="contact-form-row">
//                 {/* Email */}
//                 <div className="contact-field">
//                   <label htmlFor="email">EMAIL</label>

//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="contact-field">
//                   <label htmlFor="phone">PHONE NUMBER</label>

//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+91 00000 00000"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* ================= SERVICE ================= */}

//               <div className="contact-field contact-select-field">
//                 <label htmlFor="service">WHAT CAN WE HELP WITH?</label>

//                 <div className="contact-select-wrapper">
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>
//                       Select a service
//                     </option>

//                     <option value="Website Development">
//                       Website Development
//                     </option>

//                     <option value="Google Business Setup">
//                       Google Business Setup
//                     </option>

//                     <option value="WhatsApp Integration">
//                       WhatsApp Integration
//                     </option>

//                     <option value="Website Maintenance">
//                       Website Maintenance
//                     </option>

//                     <option value="Other">Other</option>
//                   </select>

//                   <ChevronDown className="select-arrow" size={17} />
//                 </div>
//               </div>

//               {/* ================= MESSAGE ================= */}

//               <div className="contact-field contact-message-field">
//                 <label htmlFor="message">TELL US MORE</label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="A little about your project..."
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>

//               {/* ================= SUBMIT ================= */}

//               <button type="submit" className="contact-submit-btn">
//                 <span>SEND ENQUIRY</span>

//                 <ArrowUpRight size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };






import React, { useEffect, useRef, useState } from "react";

import {
  MessageCircle,
  Send,
  Clock3,
  ArrowUpRight,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";

import "./Conatct_Form.css";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { PostContactSheet } from "../../Reducx_Store/TesterSlice";

export const Contact_Form_Web = () => {
  const contactRef = useRef(null);

  const dispatch = useDispatch();

  // ==================================================
  // SCROLL ANIMATION STATE
  // ==================================================

  const [visible, setVisible] = useState(false);

  // ==================================================
  // SUBMIT LOADING STATE
  // ==================================================

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==================================================
  // FORM DATA
  // ==================================================

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // ==================================================
  // INTERSECTION OBSERVER
  // ==================================================

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

    const currentSection = contactRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // ==================================================
  // INPUT CHANGE
  // ==================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==================================================
  // FORM SUBMIT
  // ==================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate API requests
    if (isSubmitting) return;

    // Start loading
    setIsSubmitting(true);

    try {
      // ==================================================
      // DISPATCH REDUX THUNK
      // ==================================================

      const res = await dispatch(
        PostContactSheet({
          formData,
        })
      ).unwrap();

      console.log("Contact Submit Response:", res);

      // ==================================================
      // SUCCESS TOAST
      // ==================================================

      toast.success("Submit successfully!");

      // ==================================================
      // RESET FORM
      // ==================================================

      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      // ==================================================
      // ERROR
      // ==================================================

      console.error("Contact Submit Error:", error);

      toast.error(
        error?.message ||
          error?.error ||
          "Something went wrong. Please try again."
      );
    } finally {
      // ==================================================
      // STOP LOADING
      // ==================================================

      setIsSubmitting(false);
    }
  };

  // ==================================================
  // JSX
  // ==================================================

  return (
    <>
      <section
        className={`contact-section ${
          visible ? "contact-visible" : ""
        }`}
        id="contact"
        ref={contactRef}
      >
        <div className="contact-container">
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="contact-left">
            {/* Section Label */}

            <div className="contact-label">
              <span>06</span>

              <span>/</span>

              <strong>SAY HELLO</strong>
            </div>

            {/* Heading */}

            <h2 className="contact-heading">
              Let's build your
              <br />
              <span>next chapter.</span>
            </h2>

            {/* Description */}

            <p className="contact-description">
              Tell us a little about your business and we'll get
              back to you with ideas, clarity and a practical next
              step.
            </p>

            {/* Contact Details */}

            <div className="contact-details">
              {/* ==================================================
                  WHATSAPP
              ================================================== */}

              <a
                href="https://wa.me/919999999999?text=Hello%20WEB_MAKER%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="contact-detail-content">
                  <small>WHATSAPP</small>

                  <span>+91 99999 99999</span>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={16}
                />
              </a>

              {/* ==================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:hello@webmaker.in"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Send
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="contact-detail-content">
                  <small>EMAIL US</small>

                  <span>hello@webmaker.in</span>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={16}
                />
              </a>

              {/* ==================================================
                  BUSINESS HOURS
              ================================================== */}

              <div className="contact-detail contact-hours">
                <div className="contact-detail-icon">
                  <Clock3
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="contact-detail-content">
                  <small>BUSINESS HOURS</small>

                  <span>Mon–Sat, 10am–7pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT SIDE FORM
          ================================================== */}

          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              {/* ==================================================
                  ROW 1
              ================================================== */}

              <div className="contact-form-row">
                {/* Name */}

                <div className="contact-field">
                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Business Name */}

                <div className="contact-field">
                  <label htmlFor="businessName">
                    BUSINESS NAME
                  </label>

                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* ==================================================
                  ROW 2
              ================================================== */}

              <div className="contact-form-row">
                {/* Email */}

                <div className="contact-field">
                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone */}

                <div className="contact-field">
                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* ==================================================
                  SERVICE
              ================================================== */}

              <div className="contact-field contact-select-field">
                <label htmlFor="service">
                  WHAT CAN WE HELP WITH?
                </label>

                <div className="contact-select-wrapper">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Google Business Setup">
                      Google Business Setup
                    </option>

                    <option value="WhatsApp Integration">
                      WhatsApp Integration
                    </option>

                    <option value="Website Maintenance">
                      Website Maintenance
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <ChevronDown
                    className="select-arrow"
                    size={17}
                  />
                </div>
              </div>

              {/* ==================================================
                  MESSAGE
              ================================================== */}

              <div className="contact-field contact-message-field">
                <label htmlFor="message">
                  TELL US MORE
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A little about your project..."
                  rows="4"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* ==================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      className="submit-spinner"
                      size={17}
                    />

                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND ENQUIRY</span>

                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};


