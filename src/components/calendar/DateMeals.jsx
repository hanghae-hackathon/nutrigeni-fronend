import dayjs from "dayjs";
import PropTypes from "prop-types";


export default function DateMeals(props) {
  const { selectedDate, setSelectedDate } = props

  return (
    <div>
      {dayjs(selectedDate).format("YYYY-MM-DD")}
    </div>
  )
}

DateMeals.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};