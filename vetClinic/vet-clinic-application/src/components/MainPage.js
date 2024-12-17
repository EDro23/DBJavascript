import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Button, Typography, Card, CardContent } from "@mui/material";

const MainPage = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Vet Clinic Registry
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
            <Link to="/pet-menu" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Manage Pets
              </Button>
            </Link>
            <Link to="/owner-menu" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary" fullWidth>
                Manage Owners
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MainPage;
