import React, { useState } from "react";
import { addOwner } from "../services/apiService";

const RegisterOwner = () => {
    const [ownerData, setOwnerData] = useState({ name: "", phone: "", address: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOwnerData({ ...ownerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addOwner(ownerData);
            alert("Owner registered successfully!");
            setOwnerData({ name: "", phone: "", address: "" }); // Reset form
        } catch (error) {
            console.error("Error registering owner:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Owner</h1>
            <input name="name" value={ownerData.name} onChange={handleChange} placeholder="Name" required />
            <input name="phone" value={ownerData.phone} onChange={handleChange} placeholder="Phone" required />
            <input name="address" value={ownerData.address} onChange={handleChange} placeholder="Address" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterOwner;
