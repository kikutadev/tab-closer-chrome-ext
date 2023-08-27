// App.tsx
import React from "react";

import { Accordion, theme, Box, Button, Grid, Flex } from "@chakra-ui/react";
import AccordionUI from "../Interface/Accordion";
import Tab from "./Tab";
import Tools from "./Tools";
import { getTabs } from "../hooks/getAll";


export default function App() {
  const [isSmall, setIsSmall] = React.useState(false);
  const handleSetIsSmall = () => setIsSmall(!isSmall);

  const { windows, groups, tabs } = getTabs();

  const groupIndexes = groups.map((_, index) => index);
  console.log("windows, groups, tabs:", windows, groups, tabs);
  return (
    <Box width="500px" p={4} backgroundColor={theme.colors.teal[50]}>
      <Tools handleSetIsSmall={handleSetIsSmall} />
      {windows.map((window) => (
        <Accordion
          allowMultiple
          defaultIndex={groupIndexes}
          borderColor={theme.colors.cyan[400]}
        >
          <div key={window.id}>
            {groups
              .filter((group) => group.windowId === window.id)
              .map((group) => (
                <AccordionUI key={group.id} title={`${group.title}`}>
                  <Flex
                    flexDirection={isSmall ? "row" : "column"}
                    flexWrap={isSmall ? "wrap" : undefined}
                    gap={2}
                  >
                    {tabs
                      .filter((tab) => tab.groupId === group.id)
                      .map((tab) => (
                        <Tab key={tab.id} tab={tab} isSmall={isSmall} />
                      ))}
                  </Flex>
                </AccordionUI>
              ))}
          </div>
        </Accordion>
      ))}
    </Box>
  );
}
