import React, { useState } from "react";
import { getOwnerById } from "../services/apiService";
import { Container, Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";
import dogImage from "../assets/findowner-img.png"; // Import the image you provide

const FindOwner = () => {
  const [ownerId, setOwnerId] = useState("");
  const [owner, setOwner] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getOwnerById(ownerId);
      setOwner(response.data);
    } catch (error) {
      console.error("Error finding owner:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Image at the top */}
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
            <img src={dogImage} alt="Dog" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
          
          {/* Header */}
          <Typography variant="h4" align="center" gutterBottom>
            Find Owner
          </Typography>
          
          {/* Input and Button */}
          <TextField
            label="Owner ID"
            variant="outlined"
            fullWidth
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
            Search
          </Button>
          
          {/* Owner Details */}
          {owner && (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6">Owner Details:</Typography>
              <Typography>Name: {owner.name}</Typography>
              <Typography>Phone: {owner.phone}</Typography>
              <Typography>Address: {owner.address}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default FindOwner;
