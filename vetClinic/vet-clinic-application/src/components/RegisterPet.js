import React, { useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";
import dogImage from "../assets/registerpet.png"; // Replace with your image

const RegisterPet = () => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    ownerName: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Registering Pet:", pet);
    // Perform the backend API call to register a pet here
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Header */}
          <Typography variant="h4" align="center" gutterBottom>
            Register Pet
          </Typography>

          {/* Form Fields */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
            <TextField
              label="Pet Name"
              name="name"
              variant="outlined"
              fullWidth
              value={pet.name}
              onChange={handleChange}
            />
            <TextField
              label="Breed"
              name="breed"
              variant="outlined"
              fullWidth
              value={pet.breed}
              onChange={handleChange}
            />
            <TextField
              label="Age"
              name="age"
              variant="outlined"
              fullWidth
              value={pet.age}
              onChange={handleChange}
            />
            <TextField
              label="Owner Name"
              name="ownerName"
              variant="outlined"
              fullWidth
              value={pet.ownerName}
              onChange={handleChange}
            />
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 3 }}
            onClick={handleSubmit}
          >
            Register
          </Button>

          {/* Image at the Bottom */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <img src={dogImage} alt="Dog" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegisterPet;
