import { Grid, Table, TableBody, TableContainer, Typography } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import UserTableHead from "./user-table-head";
import UserTableRow from "./user-table-row";
import { useEffect, useState } from "react";
import { getFoodList } from "../../api/getFoodList";


export default function DateMeals(props) {
  const { selectedDate } = props
  const [list, setList] = useState([])

  const foodList = async () => {
    const res = await getFoodList()
    const resArray = res.map((data) => {
      return ({
        id: data.id,
        foodName: data.foodName,
        imagePath: data.imagePath,
        totalCalories: data.totalCalories,
        createDate: data.createDate ? (dayjs(data.createDate).format("YYYY-MM-DD")) : "no data",
      })
    })
    setList(resArray)
  }


  useEffect(() => {
    foodList()
  }, [selectedDate])

  return (
    <Grid container sx={12} alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
      <Grid item sx={8}>
        <TableContainer sx={{ overflow: "unset" }}>
          <Table sx={{ minWidth: 800 }}>
            <UserTableHead
              headLabel={[
                { id: "createDate", label: "Date" },
                { id: "id", label: "ID" },
                { id: "foodName", label: "Name" },
                { id: "totalCalories", label: "Cal" },
                { id: "", label: "" },
              ]}
            />
            <TableBody>
              {list.filter((data) => {
                return data.createDate === dayjs(selectedDate).format("YYYY-MM-DD")
              })
                .map((row) => (
                  <UserTableRow
                    key={row.id}
                    name={row.name}
                    role={row.role}
                    status={row.status}
                    company={row.company}
                    avatarUrl={row.avatarUrl}
                    isVerified={row.isVerified}
                    row = {row}
                    handleClick={(event) => handleClick(event, row.name)}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

DateMeals.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};