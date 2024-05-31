import { Grid, Stack, Typography } from "@mui/material";
import FileUpload from "../components/foodAnalysis/FileUpload";
import ResultTable from "../components/foodAnalysis/ResultTable";

export default function FoodAnalysisPage() {
  return (
    <Grid item>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ borderBottom: "2px solid #cfcfcf", paddingBottom: "20px" }}>
        <Grid item xs={8}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h6">식단 기록하기</Typography>
          </Stack>
        </Grid>
      </Grid>
      <FileUpload />
      <ResultTable />
    </Grid>
  );
}
