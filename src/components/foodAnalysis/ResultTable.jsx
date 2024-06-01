import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Backdrop,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { userInfoAtom } from "../../atom/loginAtom";

export default function ResultTable({ imageResult }) {
  if (!imageResult || !imageResult.재료) {
    return <div></div>;
  }

  const userInfo = useRecoilValue(userInfoAtom);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickDetail = async () => {
    setLoading(true);
    setOpen(true);
    try {
      const response = await axios.get("http://192.168.0.193:8081/api/food/check-health-food-conflicts", {
        params: {
          email: userInfo,
          foodName: imageResult.음식이름,
        },
      });
      setResponseData(response.data);
      console.log("Response received:", response.data);
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error sending GET request:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setResponseData(null);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h2" style={{ fontSize: "24px", padding: "10px 10px 0 10px", fontWeight: "bold", textDecoration: "underline", textUnderlinePosition: "under" }}>{imageResult?.음식이름}</Typography>
        <Button
          variant="contained"
          type="button"
          sx={{
            backgroundColor: "#008080",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            boxShadow: "0 3px 5px 2px rgba(0, 128, 128, .3)",
            "&:hover": {
              backgroundColor: "#006666",
            },
          }}
          onClick={handleClickDetail}
        >
          DETAIL
        </Button>
      </div>
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

      <Dialog
        open={open && !loading}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DETAIL"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            component="div"
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "10px",
              border: "1px solid rgba(0, 0, 0, 0.23)",
              borderRadius: "4px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              fontSize: "inherit",
              color: "#222",
            }}
          >
            {responseData ? responseData : "Loading..."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Detail data fetched successfully!
        </Alert>
      </Snackbar>
    </>
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
