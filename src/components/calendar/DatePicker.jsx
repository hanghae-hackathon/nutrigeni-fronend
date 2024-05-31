import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function DatePicker(props) {
  const { selectedDate, setSelectedDate } = props


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log(dayjs(newDate).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    console.log(selectedDate)
  })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  )
}

DatePicker.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};