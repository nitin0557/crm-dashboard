import React, { useState } from "react";
import { ReactComponent as IntegrationIcon } from "../../assets/integration.svg";
import { ReactComponent as Sync } from "../../assets/sync.svg";
import { ReactComponent as RotateIcon } from "../../assets/rotate.svg";
import { ReactComponent as BrainIcon } from "../../assets/brain.svg";
import { ReactComponent as Situation1 } from "../../assets/situation1.svg";
import { ReactComponent as Situation2 } from "../../assets/situation2.svg";
import {
  Card,
  Cards,
  Description,
  Section,
  Subtitle,
  Tab,
  Tabs,
  Title,
} from "./Solutions.style";

const tabs = [
  { iconname: <IntegrationIcon />, value: "CRM Data Enrichment" },
  { iconname: <Sync />, value: "CRM Data Sync" },
  { iconname: <RotateIcon />, value: "Bulk Export & Enrichment" },
  { iconname: <BrainIcon />, value: "AI Productivity" },
];

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
      <Title>Complete LinkedIn Sales Solutions</Title>
      <Subtitle>
        Everything you need for professional LinkedIn prospecting
      </Subtitle>

      <Tabs>
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            active={idx === activeTab}
            onClick={() => setActiveTab(idx)}
          >
            {tab.iconname}
            {tab.value}
          </Tab>
        ))}
      </Tabs>

      <Description>
        It&apos;s hard to find the accurate contact data for every prospect by
        <span>Incomplete Data</span>
      </Description>

      <Cards>
        <Card>
          <Situation1 width={669} height={527} />
        </Card>

        <Card>
          <Situation2 width={669} height={527} />
        </Card>
      </Cards>
    </Section>
  );
};

export default Solutions;
