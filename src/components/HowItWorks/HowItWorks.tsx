// src/components/HowItWorks.tsx
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Card1 } from "../../assets/1.svg";
import { ReactComponent as Card2 } from "../../assets/2.svg";
import { ReactComponent as Card3 } from "../../assets/3.svg";
import { ReactComponent as Card4 } from "../../assets/4.svg";
import ballImg from "../../public/Ball.png";
import {
  Button,
  CTA,
  Section,
  StepCard,
  StepsGrid,
  SubText,
  Title,
} from "./HowItWorks.style";

const HowItWorks: React.FC = () => {
  return (
    <Section>
      <Title>How it Works</Title>
      <SubText>
        From setup to success in <strong>4 simple steps</strong>
      </SubText>

      <StepsGrid>
        <StepCard>
          <Card1 />
        </StepCard>

        <StepCard highlight>
          <Card2 />
        </StepCard>

        <StepCard>
          <Card3 />
        </StepCard>

        <StepCard>
          <Card4 />
        </StepCard>
      </StepsGrid>

      <CTA>
        <Button href="#">Try LeadCRM Now →</Button>
      </CTA>
    </Section>
  );
};

export default HowItWorks;
