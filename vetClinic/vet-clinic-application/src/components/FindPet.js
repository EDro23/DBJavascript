import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import catImage from "../assets/cat-img.png"; // Import an animal image

const FindPet = () => {
  const [phone, setPhone] = useState("");
  const [pet, setPet] = useState(null);

  const handleSearch = () => {
    // Simulated fetch (replace with backend call)
    setPet({ name: "Fluffy", breed: "Golden Retriever", ownerName: "John Doe" });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
            <img src={catImage} alt="Cat" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Find Pet
          </Typography>
          <TextField
            label="Owner's Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
            Search
          </Button>
          {pet && (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6">Pet Found:</Typography>
              <Typography>Name: {pet.name}</Typography>
              <Typography>Breed: {pet.breed}</Typography>
              <Typography>Owner: {pet.ownerName}</Typography>
            </Box>
          )}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="text" color="secondary" sx={{ marginTop: 2 }}>
              Back to Main Menu
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FindPet;
