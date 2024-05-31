import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Material-ui
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Assets
import EyeOutlined from "@ant-design/icons/EyeOutlined";
import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 500px;
  align-items: center;
`;

export default function LoginForm() {
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Grid item xs={8}>
        <Grid xs={12} item paddingBlock={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput
              id="email-login"
              type="email"
              name="email"
              placeholder="Enter email address"
              fullWidth
            />
          </Stack>
          {/* {touched.email && errors.email && (
          <FormHelperText error id="standard-weight-helper-text-email-login">
            {errors.email}
          </FormHelperText>
        )} */}
        </Grid>
        <Grid xs={12} item paddingBlock={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password-login"
              type={showPassword ? "text" : "password"}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={event => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />
            <Link variant="h6" component={RouterLink} color="text.primary">
                    Forgot Password?
            </Link>
          </Stack>
        </Grid>

        <Grid xs={12} item paddingBlock={3}>
          <Button
            disableElevation
            // Disabled={isSubmitting}
            fullWidth
            size="large" type="submit" variant="contained" color="primary">
                  Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
