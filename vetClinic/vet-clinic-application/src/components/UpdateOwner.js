import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdateOwner = () => {
  const { id } = useParams(); // Get the owner ID from the URL
  const [owner, setOwner] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    // Fetch the owner's current data
    const fetchOwner = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/owners/${id}`);
        setOwner(response.data);
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    };
    fetchOwner();
  }, [id]);

  const handleChange = (e) => {
    setOwner({ ...owner, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3001/api/owners/${id}`, owner);
      alert("Owner updated successfully!");
    } catch (error) {
      console.error("Error updating owner:", error);
      alert("Failed to update owner.");
    }
  };

  return (
    <div>
      <h1>Update Owner</h1>
      <form>
        <input
          name="name"
          value={owner.name}
          placeholder="Owner Name"
          onChange={handleChange}
        />
        <input
          name="phone"
          value={owner.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          name="address"
          value={owner.address}
          placeholder="Address"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Save Changes</button>
      <Link to="/owner-menu">
        <button>Back to Owner Menu</button>
      </Link>
    </div>
  );
};

export default UpdateOwner;
