import * as React from "react";

import Typography from "./Typography";


export default function ProductHero() {
  return (
    <>
      <Typography color="inherit" align="center" variant="h3" marked="center">
        NutriGenie
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        너가 먹는게 결국 너다.
      </Typography>
      {/* <div style={{ textAlign: "center" }}>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          나에게 맞는 식사를 위한 솔루션 서비스
        </Typography>
      </div> */}
    </>
  );
}
