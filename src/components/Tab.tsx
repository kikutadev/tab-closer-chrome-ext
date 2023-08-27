import React from "react";
import { Tooltip, Link, theme, Box } from "@chakra-ui/react";
import { TabInfo } from "../types";

type TabProps = { tab: TabInfo; isSmall?: boolean };

export default function Tab({ tab, isSmall }: TabProps) {
  const TabContent = (
    <Link
      href={tab.url}
      color={theme.colors.cyan[800]}
      _hover={{
        textDecoration: "underline",
        color: theme.colors.cyan[900],
      }}
      display="flex"
      flexDirection={"row"}
      gap={2}
    >
      <div style={{ width: "20px", height: "20px" }}>
        <img src={tab.favIconUrl} width={20} height={20} />
      </div>
      {isSmall ? <></> : <span>{tab.title}</span>}
    </Link>
  );

  return (
    <Box key={tab.id}>
      {isSmall ? (
        <Tooltip label={tab.title} aria-label={tab.title} bg="cyan.100" color="cyan.900">
          {TabContent}
        </Tooltip>
      ) : (
        TabContent
      )}
    </Box>
  );
}
