import { Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";


export default function DateMeals(props) {
  const { selectedDate } = props

  return (
    <Grid container sx={12} alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
      <Grid item sx={8}>
        <Typography>
          {dayjs(selectedDate).format("YYYY-MM-DD")}에 먹은 음식
        </Typography>
      </Grid>
    </Grid>
  )
}

DateMeals.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};