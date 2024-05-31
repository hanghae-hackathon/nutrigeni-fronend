import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import userIcon from "../images/usericon.png"

export default function ProfilePage() {
  const count = "4,42,236";
  const percentage = 59.3;
  const extra = "35,000";
  const color = "primary";

  return (
    <div>
      <Grid item xs={12}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ borderBottom: "2px solid #cfcfcf", paddingBottom: "20px" }}>
          <Grid item xs={8}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography variant="h6">프로필</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack>
          <Grid xs={12} container display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
              <img src={userIcon} alt="user icon" style={{ width: "300px" }} />
            </Grid>
            <Grid item>
              <Typography variant="h6" color="text.secondary">
                userName
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                나이
              </Typography>
              <Divider/>
              <Typography variant="h4" color="inherit">
                18
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                성별
              </Typography>
              <Divider/>
              <Typography variant="h4" color="inherit">
                남
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                키
              </Typography>
              <Divider/>
              <Typography variant="h4" color="inherit">
                180
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                몸무게
              </Typography>
              <Divider/>
              <Typography variant="h4" color="inherit">
                85
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"}>
            <Typography variant="caption" color="text.secondary">
            You made an extra{" "}
              <Typography variant="caption" sx={{ color: `${color || "primary"}.main` }}>
                {extra}
              </Typography>{" "}
            this year
            </Typography>
          </Grid> */}
        </Stack>
      </Grid>
    </div>
  );
}
