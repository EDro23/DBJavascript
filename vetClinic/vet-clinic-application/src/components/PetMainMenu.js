import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardContent, Typography, Button, Box } from "@mui/material";
import dogImage from "../assets/transparent-cat.png"; // Replace with your image

const PetMainMenu = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Page Title */}
          <Typography variant="h4" align="center" gutterBottom>
            Pet Management Menu
          </Typography>

          {/* Buttons Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 3 }}>
            <Link to="/register-pet" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Register Pet
              </Button>
            </Link>
            <Link to="/find-pet" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary" fullWidth>
                Find Pet
              </Button>
            </Link>
            <Link to="/view-all-pets" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                View All Pets
              </Button>
            </Link>
          </Box>

          {/* Image at the Bottom */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <img src={dogImage} alt="Dog" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PetMainMenu;
