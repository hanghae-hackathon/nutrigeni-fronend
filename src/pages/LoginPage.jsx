import { Grid, Stack, Typography } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";

export default function LoginPage() {
  return (
    <Grid container>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Grid item xs={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline">
            <Typography variant="h4">Login</Typography>
            <Typography to="/register" variant="body1" sx={{ textDecoration: "none" }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LoginForm/>
      </Grid>
      <Grid item xs={12}>
        <LoginFooter/>
      </Grid>
    </Grid>
  );
}
