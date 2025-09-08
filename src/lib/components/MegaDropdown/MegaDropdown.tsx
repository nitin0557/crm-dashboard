import React from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import GroupIcon from "@mui/icons-material/Group";
import HubIcon from "@mui/icons-material/Hub";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BoltIcon from "@mui/icons-material/Bolt";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import {
  Badge,
  BrowserItem,
  FeatureItem,
  Section,
  Text,
  Title,
  DropdownWrapper,
} from "./MegaDropdown.style";

const MegaDropdown: React.FC = () => {
  return (
    <DropdownWrapper>
      <Section>
        <Title>LinkedIn Extension</Title>
        <Text>
          Easily manage your network, organize leads, and integrate seamlessly
          with your CRM for efficient follow-ups and enhanced sales workflows.
        </Text>
        <FeatureItem>
          <ExtensionIcon />
          LinkedIn Extension
        </FeatureItem>
      </Section>

      <Section>
        <Title>Features</Title>
        <FeatureItem>
          <HubIcon /> Lead Finder
        </FeatureItem>
        <FeatureItem>
          <GroupIcon /> Teammate
        </FeatureItem>
        <FeatureItem>
          <LaptopMacIcon /> Deal Management
        </FeatureItem>
        <FeatureItem>
          <SyncAltIcon /> CRM Data Sync
        </FeatureItem>
        <FeatureItem>
          <SmartToyIcon /> AI-Assisted Commenting
        </FeatureItem>
        <FeatureItem>
          <BoltIcon /> Templates & Shortcuts
        </FeatureItem>
      </Section>

      <Section>
        <Title>Features</Title>
        <FeatureItem>
          <HubIcon /> Lead Finder
        </FeatureItem>
        <FeatureItem>
          <GroupIcon /> Teammate
        </FeatureItem>
        <FeatureItem>
          <LaptopMacIcon /> Deal Management
        </FeatureItem>
        <FeatureItem>
          <SyncAltIcon /> CRM Data Sync
        </FeatureItem>
        <FeatureItem>
          <SmartToyIcon /> AI-Assisted Commenting
        </FeatureItem>
        <FeatureItem>
          <BoltIcon /> Templates & Shortcuts
        </FeatureItem>
      </Section>

      <Section>
        <Title>LeadCRM Integration</Title>
        <Text>Boost productivity with integration</Text>

        <Title style={{ marginTop: "1rem" }}>Extension</Title>
        <BrowserItem>
          <ChromeReaderModeIcon /> Chrome
        </BrowserItem>
        <BrowserItem>
          <ChromeReaderModeIcon /> Firefox <Badge>Coming Soon</Badge>
        </BrowserItem>
        <BrowserItem>
          <ChromeReaderModeIcon /> Edge <Badge>Coming Soon</Badge>
        </BrowserItem>
      </Section>
    </DropdownWrapper>
  );
};

export default MegaDropdown;
