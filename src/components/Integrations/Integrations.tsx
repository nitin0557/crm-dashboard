import React from "react";

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
