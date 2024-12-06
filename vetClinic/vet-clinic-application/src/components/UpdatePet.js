import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdatePet = () => {
  const { id } = useParams(); // Get the pet ID from the URL
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    ownerName: "",
  });

  useEffect(() => {
    // Fetch the pet's current data
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };
    fetchPet();
  }, [id]);

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3001/api/pets/${id}`, pet);
      alert("Pet updated successfully!");
    } catch (error) {
      console.error("Error updating pet:", error);
      alert("Failed to update pet.");
    }
  };

  return (
    <div>
      <h1>Update Pet</h1>
      <form>
        <input
          name="name"
          value={pet.name}
          placeholder="Pet Name"
          onChange={handleChange}
        />
        <input
          name="breed"
          value={pet.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        <input
          name="age"
          value={pet.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          name="ownerName"
          value={pet.ownerName}
          placeholder="Owner Name"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Save Changes</button>
      <Link to="/pet-menu">
        <button>Back to Pet Menu</button>
      </Link>
    </div>
  );
};

export default UpdatePet;
