import React, { useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";
import catImage from "../assets/registerpet.png"; // Replace with your image

const RegisterOwner = () => {
  const [owner, setOwner] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setOwner({ ...owner, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Registering Owner:", owner);
    // Perform the backend API call to register an owner here
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>
          {/* Header */}
          <Typography variant="h4" align="center" gutterBottom>
            Register Owner
          </Typography>

          {/* Form Fields */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
            <TextField
              label="Owner Name"
              name="name"
              variant="outlined"
              fullWidth
              value={owner.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              fullWidth
              value={owner.phone}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              value={owner.address}
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
            <img src={catImage} alt="Cat" style={{ width: "150px", borderRadius: "8px" }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegisterOwner;
