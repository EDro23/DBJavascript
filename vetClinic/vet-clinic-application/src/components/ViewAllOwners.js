import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import catImage from "../assets/dog-cat.png"; // Replace with your cat image
import axios from "axios";

const ViewAllOwners = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/owners"); // Adjust your backend URL
        setOwners(response.data);
      } catch (error) {
        console.error("Error fetching owners:", error);
      }
    };

    fetchOwners();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Header */}
          <Typography variant="h4" align="center" gutterBottom>
            View All Owners
          </Typography>

          {/* Owners List */}
          <Box sx={{ marginTop: 2 }}>
            {owners.length > 0 ? (
              owners.map((owner, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                  {index + 1}. {owner.name} - {owner.phone} (Address: {owner.address})
                </Typography>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary" align="center">
                No owners available.
              </Typography>
            )}
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

export default ViewAllOwners;
