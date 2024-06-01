import { Grid, Table, TableBody, TableContainer, Typography } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import UserTableHead from "./user-table-head";
import UserTableRow from "./user-table-row";
import { useEffect } from "react";
import { getFoodList } from "../../api/getFoodList";


export default function DateMeals(props) {
  const { selectedDate } = props

  const foodList = async () => {
    // const res = await getFoodList()

  }


  useEffect(() => {
    foodList()
  }, [selectedDate])

  const dataFiltered = [
    {
      avatarUrl: "/assets/images/avatars/avatar_14.jpg",
      company: "Mayert LLC",
      id: "a02e43e7-37d6-45f0-922e-70ae03024670",
      isVerified: true,
      name: "Blake Casper",
      role: "Project Manager",
      status: "banned" }, {
      avatarUrl: "/assets/images/avatars/avatar_23.jpg",
      company: "Dare Inc",
      id: "1b01cb4b-3864-4da3-a5ce-af9fa7031454",
      isVerified: false,
      name: "Cindy Hilpert",
      role: "Project Manager",
      status: "active" },
  ]

  return (
    <Grid container sx={12} alignItems={"center"} display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
      <Grid item sx={8}>
        <Grid item textAlign={"center"}>
          <Typography>
            {dayjs(selectedDate).format("YYYY-MM-DD")}에 먹은 음식
          </Typography>
        </Grid>
        <TableContainer sx={{ overflow: "unset" }}>
          <Table sx={{ minWidth: 800 }}>
            <UserTableHead
              headLabel={[
                { id: "name", label: "Name" },
                { id: "company", label: "Company" },
                { id: "role", label: "Role" },
                { id: "isVerified", label: "Verified", align: "center" },
                { id: "status", label: "Status" },
                { id: "" },
              ]}
            />
            <TableBody>
              {dataFiltered
                .map((row) => (
                  <UserTableRow
                    key={row.id}
                    name={row.name}
                    role={row.role}
                    status={row.status}
                    company={row.company}
                    avatarUrl={row.avatarUrl}
                    isVerified={row.isVerified}
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