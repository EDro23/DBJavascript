import React, { useState, useEffect } from "react";
import { getOwnerById, updateOwner } from "../services/apiService";
import { useParams, useNavigate } from "react-router-dom";

const UpdateOwner = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ownerData, setOwnerData] = useState({
        name: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        const fetchOwner = async () => {
            try {
                const response = await getOwnerById(id);
                setOwnerData(response.data);
            } catch (error) {
                console.error("Error fetching owner:", error);
            }
        };

        fetchOwner();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOwnerData({ ...ownerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateOwner(id, ownerData);
            alert("Owner updated successfully!");
            navigate("/view-all-owners"); // Redirect to the owners list
        } catch (error) {
            console.error("Error updating owner:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update Owner</h1>
            <input
                name="name"
                value={ownerData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                name="phone"
                value={ownerData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
            />
            <input
                name="address"
                value={ownerData.address}
                onChange={handleChange}
                placeholder="Address"
                required
            />
            <button type="submit">Update Owner</button>
        </form>
    );
};

export default UpdateOwner;
