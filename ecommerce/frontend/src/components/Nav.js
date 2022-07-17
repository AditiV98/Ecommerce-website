import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="home"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25pt",
              }}
            >
              LifeStyle Store
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link to="home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link to="shop" style={{ textDecoration: "none", color: "white" }}>
              Shop
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link
              to="contact-us"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact us
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link to="about" style={{ textDecoration: "none", color: "white" }}>
              About
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link to="cart" style={{ textDecoration: "none", color: "white" }}>
              Cart
            </Link>
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link
              to="signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              SignUp
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link to="login" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
