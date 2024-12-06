import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ViewAllOwners = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    // Fetch all owners from the backend
    console.log("Fetching all owners...");
    // Simulate fetching owners
    setOwners([
      { name: "John Doe", pets: ["Fluffy", "Spot"] },
      { name: "Jane Smith", pets: ["Buddy"] },
    ]);
  }, []);

  return (
    <div>
      <h1>All Owners</h1>
      <ul>
        {owners.map((owner, index) => (
          <li key={index}>
            {owner.name} - Pets: {owner.pets.join(", ")}
          </li>
        ))}
      </ul>
      <Link to="/owner-menu">
        <button>Back to Owner Menu</button>
      </Link>
    </div>
  );
};

export default ViewAllOwners;
