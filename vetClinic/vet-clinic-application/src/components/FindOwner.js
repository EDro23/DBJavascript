import React, { useState } from "react";
import { getOwnerById } from "../services/apiService";

const FindOwner = () => {
    const [ownerId, setOwnerId] = useState("");
    const [owner, setOwner] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await getOwnerById(ownerId);
            setOwner(response.data);
        } catch (error) {
            console.error("Error finding owner:", error);
        }
    };

    return (
        <div>
            <h1>Find Owner</h1>
            <input value={ownerId} onChange={(e) => setOwnerId(e.target.value)} placeholder="Enter Owner ID" />
            <button onClick={handleSearch}>Search</button>
            {owner && (
                <div>
                    <h2>Owner Details</h2>
                    <p>Name: {owner.name}</p>
                    <p>Phone: {owner.phone}</p>
                    <p>Address: {owner.address}</p>
                </div>
            )}
        </div>
    );
};

export default FindOwner;
