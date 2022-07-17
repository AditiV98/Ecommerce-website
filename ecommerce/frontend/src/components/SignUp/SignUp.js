// import React from "react";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { signup } from "../Services/taskService";
import axios from "axios";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    // error: "",
    // success: false,
  });

  const { name, email, password } = newUser;

  const handleChange = (e) => {
    let ele = e.target.name;
    setNewUser({ ...newUser, [ele]: e.target.value });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5500/api/register", newUser);
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:4000/books", book);
  // };

  // const clickSubmit = (event) => {
  //   event.preventDefault(); // so that browser does not reload
  //   setValues({ ...values, error: false });

  //   signup({ name, email, password }).then((data) => {
  //     //   if (data.error) {
  //     //     setValues({ ...values, error: data.error, success: false });
  //     //   } else {
  //     setValues({
  //       ...values,
  //       name: "",
  //       email: "",
  //       password: "",
  //       error: "",
  //       success: true,
  //     });
  //     //   }
  //   }); // sending js object
  //   // console.log(values);
  // };

  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? "" : "none" }}
  //   >
  //     <Alert severity="error">{error}</Alert>
  //   </div>
  // );

  // const showSuccess = () => (
  //   <div
  //     className="alert alert-info"
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     <Alert severity="success">
  //       New account is created. Please <Link to="/signin">Signin</Link>.
  //     </Alert>
  //   </div>
  // );

  return (
    <Container component="main" maxWidth="xs">
      {/* {showSuccess()}
      {showError()} */}
      <CssBaseline />
      <div>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                type="email"
                value={email}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                value={password}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
