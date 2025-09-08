import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/leadcrmlogo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as QuestionIcon } from "../../assets/question.svg";
import { ReactComponent as ChromeIcon } from "../../assets/chrome.svg";
import { BrandSection, ChromeBtn, Column, ComingSoonRow, ContactRow, CopyRight, Description, Disclaimer, Divider, FooterContainer, FooterWrapper, Heading, LinkItem, LinksSection, Logo, SocialIcons, Tag } from "./Footer.style";


const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Left Section */}
        <BrandSection>
          <Logo>
            <LogoIcon />
          </Logo>
          <Description>
            LeadCRM is LinkedIn integration
            <div>tool for your CRM.</div>
          </Description>
          <SocialIcons>
            <div className="social-icons">
              <FacebookIcon />
            </div>
            <div className="social-icons">
              <TwitterIcon />
            </div>
            <div className="social-icons">
              <LinkedinIcon />
            </div>
            <div className="social-icons">
              <InstagramIcon />
            </div>
          </SocialIcons>
        </BrandSection>

        {/* Links Section */}
        <LinksSection>
          <Column>
            <Heading>Integrations</Heading>
            <LinkItem>HubSpot</LinkItem>
            <LinkItem>Salesforce</LinkItem>
            <LinkItem>Pipedrive</LinkItem>
            <ComingSoonRow>
              <LinkItem>Close.io</LinkItem>
              <Tag>Coming Soon</Tag>
            </ComingSoonRow>
            <ComingSoonRow>
              <LinkItem>Insightly</LinkItem>
              <Tag>Coming Soon</Tag>
            </ComingSoonRow>
          </Column>

          <Column>
            <Heading>Alternative</Heading>
            <LinkItem>Surfe VS LeadCRM</LinkItem>
            <LinkItem>Linkmatch Alternative</LinkItem>
          </Column>

          <Column>
            <Heading>Legal</Heading>
            <LinkItem>Privacy Policy</LinkItem>
            <LinkItem>Terms of Use</LinkItem>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <ContactRow>
              <MailIcon /> support@leadcrm.io
            </ContactRow>
            <ContactRow>
              <PhoneIcon /> +1 231-538-7466
            </ContactRow>
            <ContactRow>
              <QuestionIcon /> Help Center
            </ContactRow>
            <ChromeBtn>
              <div>
                Available in
                <div>Chrome</div>
              </div>
              <div className="chrome">
                <ChromeIcon />
              </div>
            </ChromeBtn>
          </Column>
        </LinksSection>
      </FooterContainer>

      <Divider />
      <Disclaimer>
        Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
        LinkedIn™ logos and trademarks displayed on this tool are property of
        LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
        own risk.
      </Disclaimer>
      <CopyRight>Copyright © 2025 LeadCRM. All Rights Reserved.</CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
