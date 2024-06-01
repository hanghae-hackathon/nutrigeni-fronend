import { Button, Grid, LinearProgress, Box, CircularProgress, Snackbar, Alert } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import uploadImage from "../../images/upload.png";
import axios from "axios";
import PropTypes from "prop-types";

export default function FileUpload(props) {
  const { setLoading, loading, setImageResult } = props;
  const [uploadedFile, setUploadedFile] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);

      const formData = new FormData();
      formData.append("file", file);

      try {
        setLoading(true);
        const response = await axios.post("http://192.168.0.193:8081/api/image-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoading(false);
        setImageResult(response.data); // Make sure to use response.data to access the actual data
        setSnackbarOpen(true); // Show the Snackbar on success
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {uploadedFile ? (
        <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            style={{ marginTop: "20px", maxHeight: "500px", maxWidth: "100%" }}
          />
        </Grid>
      ) : (
        <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
          <img
            src={uploadImage}
            alt="Uploaded"
            style={{ marginTop: "20px", maxHeight: "500px", maxWidth: "100%", cursor: "pointer" }}
            onClick={handleImageClick}
          />
        </Grid>
      )}
      <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            onChange={handleFileUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </Button>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Image uploaded successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

FileUpload.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  setImageResult: PropTypes.func.isRequired,
};
