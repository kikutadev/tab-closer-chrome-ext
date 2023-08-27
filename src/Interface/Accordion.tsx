import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface AccordionUIProps {
  title: string;
  children: React.ReactNode;
}

export default function AccordionUI({ title, children }: AccordionUIProps) {
  const borderColor = useColorModeValue("cyan.500", "cyan.200");
  const expandedBg = useColorModeValue("cyan.200", "cyan.700");
  const hoverBg = useColorModeValue("cyan.100", "cyan.600");
  const panelBg = useColorModeValue("cyan.50", "cyan.900");
  return (
    <AccordionItem borderColor={borderColor} mb={4}>
      <h2>
        <AccordionButton
          _expanded={{ bg: expandedBg, color: "cyan.900" }}
          _hover={{ bg: hoverBg }}
        >
          <Box flex="1" textAlign="left" py={2}>
            {title}
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel py={4} bg={panelBg}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}
