import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ResultTable({ imageResult }) {
  // Check if imageResult and imageResult.재료 exist
  if (!imageResult || !imageResult.재료) {
    return <div></div>;
  }

  return (
    <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Allergens</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {imageResult.재료.map(ingredient => (
              <TableRow
                key={ingredient.이름}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ingredient.이름}
                </TableCell>
                <TableCell align="right">{ingredient?.칼로리}</TableCell>
                <TableCell align="right">{ingredient?.영양분.지방}</TableCell>
                <TableCell align="right">{ingredient?.영양분.탄수화물}</TableCell>
                <TableCell align="right">{ingredient?.영양분.단백질}</TableCell>
                <TableCell align="right">{Array.isArray(ingredient?.알러지성분) ? ingredient.알러지성분.join(", ") : ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

ResultTable.propTypes = {
  imageResult: PropTypes.shape({
    음식이름: PropTypes.string.isRequired,
    총칼로리: PropTypes.number.isRequired,
    재료: PropTypes.arrayOf(
      PropTypes.shape({
        이름: PropTypes.string.isRequired,
        영양분: PropTypes.shape({
          탄수화물: PropTypes.string.isRequired,
          단백질: PropTypes.string.isRequired,
          지방: PropTypes.string.isRequired,
        }).isRequired,
        칼로리: PropTypes.number.isRequired,
        알러지성분: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
  }).isRequired,
};
