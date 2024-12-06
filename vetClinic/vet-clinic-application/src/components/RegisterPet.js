import React from "react";
import { Link } from "react-router-dom";

const RegisterPet = () => {
  return (
    <div>
      <h1>Register Pet</h1>
      <form>
        <input name="name" placeholder="Pet Name" />
        <input name="breed" placeholder="Breed" />
        <input name="age" placeholder="Age" />
        <input name="owner" placeholder="Owner Name" />
      </form>
      <button>Register</button>
      <Link to="/">
        <button>Main Menu</button>
      </Link>
    </div>
  );
};

export default RegisterPet;
