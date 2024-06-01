import { Button, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import uploadImage from "../../images/upload.png";
import APIs from "../../controller/APIs";
import axios from "axios";
import PropTypes from "prop-types";

export default function FileUpload(props) {
  const { setLoading } = props
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  const getImageInfo = async(e) => {

  }

  const handleFileUpload = async event => {
    console.log(event)
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);

      const formData = new FormData();
      formData.append("file", file)

      try {
        setLoading(true)
        const response = await axios.post("http://192.168.0.193:8081/api/image-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        setLoading(false)
        console.log(response)
      } catch (error) {
        setLoading(false)
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {
        uploadedFile ? (
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
        )
      }
      <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
        </Button>
      </Grid>
    </>
  );
}

FileUpload.propTypes = {
  loading: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
};