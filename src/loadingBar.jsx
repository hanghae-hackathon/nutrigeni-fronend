// LoadingBar.js
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const LoadingBar = ({ loading }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {loading && <LinearProgress />}
    </Box>
  );
};

export default LoadingBar;
