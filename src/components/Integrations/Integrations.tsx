// SupportedLeadCRM.tsx
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as LinkedinIcon } from "../assets/linked.svg";
import { ReactComponent as UpperCurveIcon } from "../assets/uppercurve.svg";
import { ReactComponent as StraightIcon } from "../assets/straightline.svg";
import { ReactComponent as LowerCurveIcon } from "../assets/lowercurve.svg";
import { ReactComponent as LogoIcon } from "../assets/logonew.svg";
import { ReactComponent as CircleIcon } from "../assets/circle.svg";
import { ReactComponent as PIcon } from "../assets/p.svg";
import { ReactComponent as SalesForceIcon } from "../assets/salesforce.svg";
import { ReactComponent as ZohoIcon } from "../assets/zoho.svg";
import {
  CTAButton,
  DiagramWrapper,
  Section,
  Subtitle,
} from "./Integrations.style";
import { Title } from "@mui/icons-material";

const Integrations: React.FC = () => {
  return (
    <Section>
      <Title>Our Supported LeadCRM</Title>
      <Subtitle>
        LeadCRM provides Native Integrations with popular CRM tools to make the
        most out of your LinkedIn prospecting. We
        <div>
          don’t want you to miss any revenue opportunity on the internet!
        </div>
      </Subtitle>

      <DiagramWrapper>
        <img src="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-2048x848.png" />
      </DiagramWrapper>

      <CTAButton>Lets Integrate your CRM Now!</CTAButton>
    </Section>
  );
};

export default Integrations;
