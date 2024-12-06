import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MainMenu = () => {
  return (
    <div>
      <h1>Vet Clinic Registry</h1>
      <div>
        <Link to="/register-pet">
          <button>Register Pet</button>
        </Link>
        <Link to="/find-pet">
          <button>Find Pet</button>
        </Link>
        <Link to="/view-all-pets">
          <button>View All Pets</button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
