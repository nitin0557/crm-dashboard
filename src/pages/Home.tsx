import React, { useState, Suspense, lazy } from "react";
import { GlobalStyle } from "../styles/globalStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingCTA from "../components/FloatingCTA/FloatingCTA";

// ✅ Lazy load big sections
const Hero = lazy(() => import("../components/Hero/Hero"));
const Features = lazy(() => import("../components/Features/Features"));
const HowItWorks = lazy(() => import("../components/HowItWorks/HowItWorks"));
const Testimonials = lazy(() => import("../components/Testimonials/Testimonials"));
const Solutions = lazy(() => import("../components/Solutions/Solutions"));
const Integrations = lazy(() => import("../components/Integrations/Integrations"));
const CTA = lazy(() => import("../components/CTA/CTA"));

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isDesKtopNavOpen, setIsDesKtopNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleDesktopNav = () => {
    setIsDesKtopNavOpen(!isDesKtopNavOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Header
        isMobileNavOpen={isMobileNavOpen}
        isDesKtopNavOpen={isDesKtopNavOpen}
        toggleDesktopNav={toggleDesktopNav}
        toggleMobileNav={toggleMobileNav}
      />

      {/* ✅ Wrap lazy components in Suspense */}
      <Suspense fallback={<div style={{ textAlign: "center", margin: "50px" }}>Loading...</div>}>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Solutions />
        <Integrations />
        <CTA />
         <Footer />
      </Suspense>

     
      <FloatingCTA />
    </>
  );
};


export default Home;
