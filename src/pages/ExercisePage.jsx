import { Grid, Stack } from "@mui/material";
import Typography from "../components/home/Typography";
import ExerciseList from "../components/excersice/ExerciseList";

export default function ExercisePage() {

  return (
    <Grid sx={12}>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ borderBottom: "2px solid #cfcfcf", paddingBottom: "20px" }}>
        <Grid item xs={8}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h6">추천 운동</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <ExerciseList/>
      </Grid>
    </Grid>
  )
}