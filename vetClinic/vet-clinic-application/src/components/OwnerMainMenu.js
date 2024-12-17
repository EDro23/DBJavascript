import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardContent, Typography, Button, Box } from "@mui/material";
import catImage from "../assets/transparent-cat.png"; // Replace with your image

const OwnerMainMenu = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Page Title */}
          <Typography variant="h4" align="center" gutterBottom>
            Owner Management Menu
          </Typography>

          {/* Buttons Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 3 }}>
            <Link to="/register-owner" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Register Owner
              </Button>
            </Link>
            <Link to="/find-owner" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary" fullWidth>
                Find Owner
              </Button>
            </Link>
            <Link to="/view-all-owners" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                View All Owners
              </Button>
            </Link>
          </Box>

          {/* Image at the Bottom */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <img src={catImage} alt="Cat" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OwnerMainMenu;
