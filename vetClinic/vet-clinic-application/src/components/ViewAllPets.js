import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import dogImage from "../assets/dog-cat.png"; // Replace with your dog image
import axios from "axios";

const ViewAllPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pets"); // Adjust your backend URL
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Header */}
          <Typography variant="h4" align="center" gutterBottom>
            View All Pets
          </Typography>

          {/* Pets List */}
          <Box sx={{ marginTop: 2 }}>
            {pets.length > 0 ? (
              pets.map((pet, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                  {index + 1}. {pet.name} - {pet.breed} (Owner: {pet.ownerName})
                </Typography>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary" align="center">
                No pets available.
              </Typography>
            )}
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

export default ViewAllPets;
