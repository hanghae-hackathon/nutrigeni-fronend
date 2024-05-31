import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

export default function ProfilePage() {
  const title = "Total Page Views";
  const count = "4,42,236";
  const percentage = 59.3;
  const extra = "35,000";
  const color = "primary";

  return (
    <div>
      <Grid item xs={12}>
        <Stack>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h4" color="inherit">
                {count}
              </Typography>
            </Grid>
            {percentage && (
              <Grid item>
                <Chip
                  variant="combined"
                  color={color}
                  label={`${percentage}%`}
                  sx={{ ml: 1.25, pl: 1 }}
                  size="small"
                />
              </Grid>
            )}
          </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
          <Typography variant="caption" color="text.secondary">
            You made an extra{" "}
            <Typography variant="caption" sx={{ color: `${color || "primary"}.main` }}>
              {extra}
            </Typography>{" "}
            this year
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
