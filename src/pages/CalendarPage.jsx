import { Grid, Stack, Typography } from "@mui/material";
import DatePicker from "../components/calendar/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import DateMeals from "../components/calendar/DateMeals";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(dayjs());


  return (
    <Grid sx={12}>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ borderBottom: "2px solid #cfcfcf", paddingBottom: "20px" }}>
        <Grid item xs={8}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h6">지난 식단</Typography>
          </Stack>
        </Grid>
      </Grid>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <DateMeals selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    </Grid>
  )
}