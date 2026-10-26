// import { useEffect } from "react";
// import "./App.css";
// import { Route, Routes, useLocation } from "react-router-dom";
// import { Home_web } from "./Components/Home/Home_web";
// import { Website_Development } from "./Components/Website_Devlopment/Website_Development";

// // Naya page hamesha top se khule, aur "/#contact" jaisa link sahi section par scroll kare
// function ScrollManager() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const timer = setTimeout(() => {
//         const target = document.getElementById(hash.slice(1));
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 100);
//       return () => clearTimeout(timer);
//     }

//     window.scrollTo({ top: 0, left: 0 });
//   }, [pathname, hash]);

//   return null;
// }

// function App() {
//   return (
//     <>
//       <ScrollManager />
//       <Routes>
//         <Route path="/" element={<Home_web />} />
//         <Route path="/website-development" element={<Website_Development />} />
//       </Routes>
//     </>
//   );
// }

// export default App;












import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home_web } from "./Components/Home/Home_web";
import { Website_Development } from "./Components/Website_Devlopment/Website_Development";
import { Google_Business_Setup } from "./Components/Google_Business_Setup/Google_Business_Setup";
import { WhatsApp_Integration } from "./Components/WhatsApp_Integration/WhatsApp_Integration";
import { Website_Maintenance } from "./Components/Website_Maintenance/Website_Maintenance";
import { Basic_SEO } from "./Components/Basic_SEO/Basic_SEO";

// Naya page hamesha top se khule, aur "/#contact" jaisa link sahi section par scroll kare
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home_web />} />
        <Route path="/website-development" element={<Website_Development />} />
        <Route
          path="/google-business-setup"
          element={<Google_Business_Setup />}
        />
        <Route
          path="/whatsapp-integration"
          element={<WhatsApp_Integration />}
        />
        <Route
          path="/website-maintenance"
          element={<Website_Maintenance />}
        />
        <Route path="/basic-seo" element={<Basic_SEO />} />
      </Routes>
    </>
  );
}

export default App;