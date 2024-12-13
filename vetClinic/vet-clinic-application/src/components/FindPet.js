import React, { useState } from "react";
import { getPetById } from "../services/apiService";

const FindPet = () => {
    const [petId, setPetId] = useState("");
    const [pet, setPet] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await getPetById(petId);
            setPet(response.data);
        } catch (error) {
            console.error("Error finding pet:", error);
        }
    };

    return (
        <div>
            <h1>Find Pet</h1>
            <input value={petId} onChange={(e) => setPetId(e.target.value)} placeholder="Enter Pet ID" />
            <button onClick={handleSearch}>Search</button>
            {pet && (
                <div>
                    <h2>Pet Details</h2>
                    <p>Name: {pet.name}</p>
                    <p>Type: {pet.type}</p>
                    <p>Age: {pet.age}</p>
                </div>
            )}
        </div>
    );
};

export default FindPet;
