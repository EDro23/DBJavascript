import React from "react";
import { Link } from "react-router-dom";

const ViewAllPets = () => {
  return (
    <div>
      <h1>All Pets</h1>
      <ul>
        <li>Pet 1</li>
        <li>Pet 2</li>
        <li>Pet 3</li>
      </ul>
      <Link to="/">
        <button>Main Menu</button>
      </Link>
    </div>
  );
};

export default ViewAllPets;
