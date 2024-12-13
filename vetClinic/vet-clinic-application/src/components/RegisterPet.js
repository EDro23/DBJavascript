import React, { useState } from "react";
import { addPet } from "../services/apiService";

const RegisterPet = () => {
    const [petData, setPetData] = useState({ name: "", type: "", age: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetData({ ...petData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPet(petData);
            alert("Pet registered successfully!");
            setPetData({ name: "", type: "", age: "" }); // Reset form
        } catch (error) {
            console.error("Error registering pet:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Pet</h1>
            <input name="name" value={petData.name} onChange={handleChange} placeholder="Name" required />
            <input name="type" value={petData.type} onChange={handleChange} placeholder="Type (e.g., Dog, Cat)" required />
            <input name="age" value={petData.age} onChange={handleChange} placeholder="Age" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPet;
