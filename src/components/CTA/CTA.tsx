import React from "react";
import { ReactComponent as BannerImage } from "../../assets/banner.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";
import { BannerImageWrapper, CTAButton, Section, Title } from "./CTA.style";

const CTA: React.FC = () => {
  return (
    <Section>
      <Title>Join Thousands of Professionals Using LeadCRM</Title>

      <BannerImageWrapper>
        {" "}
        <BannerImage />
      </BannerImageWrapper>

      <CTAButton>
        <div className="cta-btn">
          Get Started Today <ArrowRight />
        </div>
      </CTAButton>
    </Section>
  );
};

export default CTA;
