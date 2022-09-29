import React from "react";
import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}
