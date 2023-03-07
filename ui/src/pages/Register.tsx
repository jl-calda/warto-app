import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  CssBaseline,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
  Tooltip,
} from "@mui/material";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

const theme = createTheme();

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("password") !== data.get("password2")) {
      setPasswordValidation(true);
    }
    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValidation(() => false);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockPersonRoundedIcon />
          </Avatar>
          <Typography variant="h5" component="h2">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Tooltip title="Upload a profile picture" arrow>
                  <Avatar alt="Remy Sharp" sx={{ width: 112, height: 112 }} />
                </Tooltip>
              </Box>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2RoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyRoundedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="password2"
                  label="Confirm Password"
                  type={showPassword2 ? "text" : "password"}
                  id="password2"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                  helperText={
                    passwordValidation ? "Passwords do not match" : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyRoundedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, pt: 1, pb: 1 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
