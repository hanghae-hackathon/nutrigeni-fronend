import { Button, Grid } from "@mui/material";
import { useRef, useState } from "react";
import uploadImage from "../../images/upload.png";

export default function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = event => {
    const file = event.target.files[0];
    setUploadedFile(file);
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
