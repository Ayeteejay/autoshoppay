import * as React from "react";
import Fade from "react-reveal";
import Layout from "../components/layout.jsx";
import Hero from "../components/hero-section.jsx";
import OurProcess from "../components/process-section.jsx";
import OurRates from "../components/rates-section.jsx";
import OurTechnology from "../components/technology-section.jsx";
import TechnologyOptions from "../components/options-section.jsx";
import OurMission from "../components/mission-section.jsx";
import OurTestimonials from "../components/testimonial-section.jsx";
import Partners from "../components/partners-section.jsx";
import ContactUs from "../components/contact-section.jsx";

const Index = () => {
  return (
    <Layout>
      <Hero></Hero>
      <OurProcess></OurProcess>
      <OurRates></OurRates>
      <OurTechnology></OurTechnology>
      <TechnologyOptions></TechnologyOptions>
      <OurMission></OurMission>
      <OurTestimonials></OurTestimonials>
      <Partners></Partners>
      <ContactUs></ContactUs>
    </Layout>
  );
};

export default Index;
