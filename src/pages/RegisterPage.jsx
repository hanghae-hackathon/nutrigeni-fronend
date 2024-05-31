import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    healthGoal: "",
    gender: "",
    height: "",
    weight: "",
    hasDisease: false,
    diseaseName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server
    console.log(formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Health Goal"
              name="healthGoal"
              value={formData.healthGoal}
              onChange={handleChange}
              required
            >
              <MenuItem value="weight_loss">Weight Loss</MenuItem>
              <MenuItem value="muscle_gain">Muscle Gain</MenuItem>
              <MenuItem value="maintain">Maintain</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Height (cm)"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Weight (kg)"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography variant="body1" sx={{ mr: 2 }}>
                Do you have any disease?
              </Typography>
              <TextField
                select
                name="hasDisease"
                value={formData.hasDisease ? "yes" : "no"}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "hasDisease",
                      value: e.target.value === "yes",
                    },
                  })
                }
                required
              >
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </TextField>
            </Stack>
          </Grid>
          {formData.hasDisease && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Disease Name"
                name="diseaseName"
                value={formData.diseaseName}
                onChange={handleChange}
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
