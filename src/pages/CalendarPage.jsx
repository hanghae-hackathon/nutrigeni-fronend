import { Grid } from "@mui/material";
import DatePicker from "../components/calendar/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import DateMeals from "../components/calendar/DateMeals";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(dayjs());


  return (
    <Grid sx={12}>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <DateMeals selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    </Grid>
  )
}