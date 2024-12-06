import React from "react";
import { Link } from "react-router-dom";

const OwnerMainMenu = () => {
  return (
    <div>
      <h1>Owner Registry</h1>
      <div>
        <Link to="/register-owner">
          <button>Register Owner</button>
        </Link>
        <Link to="/find-owner">
          <button>Find Owner</button>
        </Link>
        <Link to="/view-all-owners">
          <button>View All Owners</button>
        </Link>
      </div>
      <Link to="/">
        <button>Back to Main Page</button>
      </Link>
    </div>
  );
};

export default OwnerMainMenu;
