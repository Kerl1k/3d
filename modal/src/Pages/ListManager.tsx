import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userApi } from "../services/userService";
import React from "react";

const defaultTheme = createTheme();
const ListManager = () => {
  const [register] = userApi.useFetchRegistrationMutation();
  const { data: user } = userApi.useFetchAllRegistrationQuery("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = { login: data.get("login"), password: data.get("password") };
    register(user)
      .unwrap()
      .then((r) => localStorage.setItem("token", r))
      .catch((error) => console.error("rejected", error));
  };

  return (
    <div>
      <div className="button">
        <Link to={"/manager"}>
          <Button variant="outlined" size="large">
            manager
          </Button>
        </Link>
      </div>
      <div className="button">
        <Link to={"/folder"}>
          <Button variant="outlined" size="large">
            folder
          </Button>
        </Link>
        <Link to={"/listmanager"}>
          <Button variant="outlined" size="large">
            add manager
          </Button>
        </Link>
      </div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Добавление менеджера
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                add manager
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <div className="listManager">Список менеджеров:</div>
      {user ? (
        user.map((user: any) => (
          <div>
            <div>{user.login}</div>
          </div>
        ))
      ) : (
        <h1>Нет</h1>
      )}
    </div>
  );
};

export default ListManager;
