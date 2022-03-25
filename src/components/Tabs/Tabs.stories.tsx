import React from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import Tabs from "./Tabs";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["xsm", "sm", "md", "lg"],
      control: { type: "select" },
    },
    variant: {
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <StorybookLayout {...args}>
      <Tabs {...args} activeTab={activeTab}>
        <Tab index={0} onClick={setActiveTab} label="Tab 1" {...args} />
        <Tab index={1} onClick={setActiveTab} label="Tab 2" {...args} />
        <Tab index={2} onClick={setActiveTab} label="Tab 3" {...args} />
      </Tabs>

      <div>
        <TabPanel index={0} activeTab={activeTab}>
          Tab 1 content
        </TabPanel>
        <TabPanel index={1} activeTab={activeTab}>
          Tab 2 content
        </TabPanel>
        <TabPanel index={2} activeTab={activeTab}>
          Tab 3 content
        </TabPanel>
      </div>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  size: "md",
  variant: "centered",
};
