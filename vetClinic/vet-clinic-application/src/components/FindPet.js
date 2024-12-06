import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FindPet = () => {
  const [phone, setPhone] = useState("");
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    // Simulate fetching a pet by owner's phone number from the backend
    console.log("Searching for pet by owner's phone:", phone);
    // Simulate a pet retrieval
    setPet({
      _id: "12345",
      name: "Fluffy",
      breed: "Golden Retriever",
      ownerName: "John Doe",
    });
  };

  return (
    <div>
      <h1>Find Pet</h1>
      <input
        placeholder="Enter owner's phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {pet && (
        <div>
          <h2>{pet.name} ({pet.breed})</h2>
          <p>Owner: {pet.ownerName}</p>
          <button onClick={() => navigate(`/update-pet/${pet._id}`)}>Update</button>
        </div>
      )}
      <Link to="/">
        <button>Main Menu</button>
      </Link>
    </div>
  );
};

export default FindPet;
