import React from "react";
import { ReactComponent as RocketIcon } from "../../assets/rocket.svg";
import { ReactComponent as LineIcon } from "../../assets/line.svg";
import { ReactComponent as CircleIcon } from "../../assets/circle.svg";
import { ReactComponent as PIcon } from "../../assets/p.svg";
import { ReactComponent as SalesForce } from "../../assets/salesforce.svg";
import { ReactComponent as GoogleHalfIcon } from "../../assets/chromehalf.svg";
import { ReactComponent as TriangleIcon } from "../../assets/trianlge.svg";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as GoogleIcon } from "../../assets/chrome.svg";
import {
  Actions,
  ChromeStarWrapper,
  Container,
  CRMBox,
  SubText,
  Title,
} from "./Hero.style";
import { Button } from "../Features/Features.style";

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="icon-text">
        <div>
          <RocketIcon />
        </div>
        <div className="text"> Thousands of Professionals using LeadCRM</div>
      </div>

      <Title>
        <div>LinkedIn CRM Integration</div>
        <div className="capture-text-wrapper">
          <div>Capture, Sync and Enrich in</div>
          <div className="both-text-wrapper">
            <div>Both Ways</div>
            <div className="icon">
              <LineIcon />
            </div>
          </div>
        </div>
      </Title>

      <SubText>
        <div className="sub-text">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on
        </div>
        <span className="sub-text">
          LinkedIn profiles. Complete bi-directional integration with HubSpot,
          Salesforce, and Pipedrive.
        </span>
      </SubText>

      <CRMBox>
        <div> Works With </div>
        <div className="group-icons">
          <div className="circle">
            <CircleIcon width={22} height={22} />
          </div>
          <div className="p">
            <PIcon width={22} height={22} />
          </div>
          <div className="salesforce">
            <SalesForce width={22} height={22} />
          </div>
        </div>
      </CRMBox>

      <ChromeStarWrapper>
        <div className="chrome">
          <div className="chrome-half">
            <GoogleHalfIcon />
          </div>
          <div className="star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span>5/5</span>
        </div>
        <div className="triangle">
          <div className="triangle-icon">
            <TriangleIcon />
          </div>
          <div className="star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span>5/5</span>
        </div>
      </ChromeStarWrapper>

      <Actions>
        <Button href="#">
          <div className="available-chrome">
            <div className="text-upper"> Available in</div>
            <div className="text-lower"> Chrome Web Store</div>
          </div>
          <div className="google">
            <GoogleIcon />
          </div>
        </Button>

        <Button className="primary" href="#">
          <div className="text">Get a Free Trial Now!</div>
        </Button>
      </Actions>
    </Container>
  );
};

export default Hero;
