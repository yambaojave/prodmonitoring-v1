import React from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function JuiLoading() {


  return (
    <Box
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap", height:"100vh", justifyContent:"center" }}

    >
      <CircularProgress size="lg" />
    </Box>
  );
}
