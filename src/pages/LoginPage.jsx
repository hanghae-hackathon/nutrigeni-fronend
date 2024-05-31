import React, { useState } from "react";
import { Button, TextField, Stack, Typography } from "@mui/material";
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
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Stack>
    </form>
  );
}
