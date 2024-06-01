import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

export default function DatePicker(props) {
  const { selectedDate, setSelectedDate } = props


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

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