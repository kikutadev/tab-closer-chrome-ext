import { Box, Button, Checkbox, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTabs, useMergeTabs } from "../hooks/mergeTabs";


interface ToolsProps {
  handleSetIsSmall: () => void;
}
export default function Tools({ handleSetIsSmall }: ToolsProps) {
  const [shouldDeleteDuplicateURL, setShouldDeleteDuplicateURL] =
    useState(false);

  const tabs = useTabs();
  const mergeTabs = useMergeTabs(tabs);

  return (
    <Flex direction="column" p={2} gap={2}>
      <Flex direction="row" align="center" gap={4}>
        <Checkbox
          color="cyan.500"
          isChecked={shouldDeleteDuplicateURL}
          borderColor="gray.500"
          borderWidth={1}
          p={1}
          borderRadius={"lg"}
          onChange={(e) => setShouldDeleteDuplicateURL(e.target.checked)}
        >
          Delete Duplicate URLs
        </Checkbox>
        <Button
          color="cyan.500"
          borderColor="cyan.500"
          borderWidth={1}
          px={2}
          py={1}
          borderRadius={"lg"}
          onClick={mergeTabs}
        >
          Merge
        </Button>
      </Flex>
      {/* <Flex direction="row" align="center" gap={4}>
        <Button>Delete Groups</Button>
      </Flex> */}
      <Flex direction="row" align="center" gap={4}>
        <Checkbox
          color="cyan.500"
          isChecked={shouldDeleteDuplicateURL}
          borderColor="gray.500"
          borderWidth={1}
          p={1}
          borderRadius={"lg"}
          onChange={handleSetIsSmall}
        >
          Small
        </Checkbox>
      </Flex>
    </Flex>
  );
}
