import React, { useState, useEffect } from "react";
import { getPetById, updatePet } from "../services/apiService";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [petData, setPetData] = useState({
        name: "",
        type: "",
        age: "",
    });

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await getPetById(id);
                setPetData(response.data);
            } catch (error) {
                console.error("Error fetching pet:", error);
            }
        };

        fetchPet();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetData({ ...petData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePet(id, petData);
            alert("Pet updated successfully!");
            navigate("/view-all-pets"); // Redirect to the pets list
        } catch (error) {
            console.error("Error updating pet:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update Pet</h1>
            <input
                name="name"
                value={petData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                name="type"
                value={petData.type}
                onChange={handleChange}
                placeholder="Type (e.g., Dog, Cat)"
                required
            />
            <input
                name="age"
                value={petData.age}
                onChange={handleChange}
                placeholder="Age"
                required
            />
            <button type="submit">Update Pet</button>
        </form>
    );
};

export default UpdatePet;
