import React from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import TabsUI from "./Tabs";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Tabs",
  component: TabsUI,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

export const Tabs = (args: any) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <StorybookLayout {...args}>
      <TabsUI {...args}>
        <Tab index={0} activeTab={activeTab} onClick={setActiveTab} label="Tab 1" {...args} />
        <Tab index={1} activeTab={activeTab} onClick={setActiveTab} label="Tab 2" {...args} />
        <Tab index={2} activeTab={activeTab} onClick={setActiveTab} label="Tab 3" {...args} />
      </TabsUI>

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

Tabs.args = {
  colorMode: "light",
  size: "md",
  variant: "centered",
};
