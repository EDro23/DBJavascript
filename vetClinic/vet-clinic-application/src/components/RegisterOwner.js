import React, { useState } from "react";
import { Link } from "react-router-dom";


const RegisterOwner = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Send the data to your backend
    console.log("Registering owner:", form);
  };

  return (
    <div>
      <h1>Register Owner</h1>
      <form>
        <input name="name" placeholder="Owner Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
      </form>
      <button onClick={handleSubmit}>Register</button>
      <Link to="/owner-menu">
        <button>Back to Owner Menu</button>
      </Link>
    </div>
  );
};

export default RegisterOwner;
