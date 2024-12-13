import React, { useEffect, useState } from "react";
import { getOwners } from "../services/apiService";

const ViewAllOwners = () => {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const response = await getOwners();
                setOwners(response.data);
            } catch (error) {
                console.error("Error fetching owners:", error);
            }
        };
        fetchOwners();
    }, []);

    return (
        <div>
            <h1>All Owners</h1>
            <ul>
                {owners.map((owner) => (
                    <li key={owner._id}>
                        {owner.name} - {owner.phone} - {owner.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAllOwners;
