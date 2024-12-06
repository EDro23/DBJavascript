import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FindOwner = () => {
  const [phone, setPhone] = useState("");
  const [owner, setOwner] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    // Simulate fetching an owner by phone number from the backend
    console.log("Searching for owner by phone:", phone);
    // Simulate an owner retrieval
    setOwner({
      _id: "67890",
      name: "John Doe",
      pets: ["Fluffy", "Spot"],
    });
  };

  return (
    <div>
      <h1>Find Owner</h1>
      <input
        placeholder="Enter owner's phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {owner && (
        <div>
          <h2>{owner.name}</h2>
          <p>Pets: {owner.pets.join(", ")}</p>
          <button onClick={() => navigate(`/update-owner/${owner._id}`)}>Update</button>
        </div>
      )}
      <Link to="/owner-menu">
        <button>Back to Owner Menu</button>
      </Link>
    </div>
  );
};

export default FindOwner;
