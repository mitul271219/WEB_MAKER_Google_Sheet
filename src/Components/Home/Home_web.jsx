import React from "react";
import { Navbar_Web } from "../Navbar/Navbar_Web";
import { About_Web } from "../About/About_Web";
import { HeroSection_Web } from "../Hero_Section/HeroSection_Web";
import { Services_Web } from "../Services/Services_Web";
import { Selected_Work_web } from "../Selected_Work/Selected_Work_web";
import { How_Its_Work_web } from "../How_Its_Work/How_Its_Work_web";
import { Pricing_Web } from "../Pricing/Pricing_Web";
import { CTA_Web } from "../CTA/CTA_Web";
import { Contact_Form_Web } from "../Contact_Form/Contact_Form_Web";
import { Footer_Web } from "../Footer/Footer_Web";
import { FloatingButtons_Web } from "../Floating_Buttons/FloatingButtons_Web";
import { WhyChooseUs_web } from "../Why_Choose_Us/WhyChooseUs_web";

export const Home_web = () => {
  return (
    <>
      <Navbar_Web />
      <HeroSection_Web />
      <About_Web />
      <CTA_Web />
      <Services_Web />
      <How_Its_Work_web />
      <WhyChooseUs_web/>
      <Selected_Work_web />
      <Pricing_Web />
      <Contact_Form_Web />
      <Footer_Web />
      <FloatingButtons_Web/>
    </>
  );
};
