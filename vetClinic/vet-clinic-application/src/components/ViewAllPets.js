import React, { useEffect, useState } from "react";
import { getPets } from "../services/apiService";

const ViewAllPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await getPets();
                setPets(response.data);
            } catch (error) {
                console.error("Error fetching pets:", error);
            }
        };
        fetchPets();
    }, []);

    return (
        <div>
            <h1>All Pets</h1>
            <ul>
                {pets.map((pet) => (
                    <li key={pet._id}>
                        {pet.name} - {pet.type} - {pet.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAllPets;
