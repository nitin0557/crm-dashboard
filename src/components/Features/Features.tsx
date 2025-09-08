import React from "react";
import { ReactComponent as AdobeIcon } from "../../assets/adobe.svg";
import { ReactComponent as Cursor } from "../../assets/cursor.svg";
import { ReactComponent as Custom } from "../../assets/cutom.svg";
import { ReactComponent as Waterfall } from "../../assets/waterfall.svg";

import { ReactComponent as Save } from "../../assets/save.svg";
import {
  Button,
  ComparisonGrid,
  CTA,
  Divider,
  Feature,
  FeaturesRow,
  Section,
  Title,
} from "./Features.style";

const Features: React.FC = () => {
  return (
    <Section>
      <FeaturesRow>
        <Feature>
          <AdobeIcon /> Access to <span>700M+</span> Contacts
        </Feature>
        <Feature>
          <Cursor /> One click push to <span>CRM</span>
        </Feature>
        <Feature>
          <Custom /> Custom Field <span>Mapping</span>
        </Feature>
        <Feature>
          <Waterfall /> Advanced
          <span>Waterfall Enrichment</span>
        </Feature>
      </FeaturesRow>

      <Title>Every LinkedIn Prospector faces these daily challenges</Title>
      <ComparisonGrid>
        <Divider>VS</Divider>

        <img src="/Situation2.png" alt="image1" />
      </ComparisonGrid>

      <CTA>
        <div className="cta">
          <div>
            <Button href="#">Start Using LeadCRM Now </Button>
          </div>

          <div>
            <Save />
          </div>
        </div>
      </CTA>
    </Section>
  );
};

export default Features;
