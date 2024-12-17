import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vet Clinic Registry
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/pet-menu">
          Pets
        </Button>
        <Button color="inherit" component={Link} to="/owner-menu">
          Owners
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
