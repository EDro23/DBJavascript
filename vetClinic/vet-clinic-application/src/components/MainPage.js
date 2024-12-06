import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to the Vet Clinic Registry</h1>
      <div>
        <Link to="/pet-menu">
          <button>Go to Pet Registry</button>
        </Link>
        <Link to="/owner-menu">
          <button>Go to Owner Registry</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
