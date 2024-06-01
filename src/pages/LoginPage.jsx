import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useLogin } from "../hooks/useLogin"; // useLogin 훅을 import

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(id, password); // 로그인 함수 호출
  };

  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ mt: 8, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
              {error && <Typography color="error">{error}</Typography>}
            </Stack>
          </form>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
