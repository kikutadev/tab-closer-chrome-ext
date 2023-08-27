import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";


export default function Options() {

  return (
    <Box>
      <Input
        placeholder="Enter group name to delete"
        onBlur={(e) => handleAddGroupName(e.target.value)}
      />
      <Button onClick={() => setGroupNamesToDelete([])}>Clear</Button>
      <ul>
        {groupNamesToDelete.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </Box>
  );
}
