import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import userIcon from "../images/usericon.png"
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atom/loginAtom";

export default function ProfilePage() {
  const count = "4,42,236";
  const percentage = 59.3;
  const extra = "35,000";
  const color = "primary";

  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <div>
      <Grid item xs={12} style={{ padding: "40px" }}>
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
            <Grid item style={{ marginBottom: "25px" }}>
              <Typography variant="h6" color="text.secondary">
                {userInfo}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                나이
              </Typography>
              <Divider/>
              <Typography variant="h4" style={{ marginTop: "5px" }} color="inherit">
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
              <Typography variant="h4" style={{ marginTop: "5px" }} color="inherit">
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
              <Typography variant="h4" style={{ marginTop: "5px" }} color="inherit">
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
              <Typography variant="h4" style={{ marginTop: "5px" }} color="inherit">
                85
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
            <Grid item>
              <Typography variant="h6" color="text.secondary" width={"200px"}>
                질병
              </Typography>
              <Divider/>
              <Typography variant="h4" style={{ marginTop: "5px" }} color="inherit">
                당뇨, 고혈압
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </div>
  );
}
