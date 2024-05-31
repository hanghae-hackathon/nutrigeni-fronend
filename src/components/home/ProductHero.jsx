import * as React from "react";

import Typography from "./Typography";


export default function ProductHero() {
  return (
    <>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Title
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        sub-title
      </Typography>
      <div style={{ textAlign: "center" }}>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Discover the experience
        </Typography>
      </div>
    </>
  );
}
