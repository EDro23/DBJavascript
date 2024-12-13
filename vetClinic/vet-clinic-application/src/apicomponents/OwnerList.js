import React, { useEffect, useState } from 'react';
import { getOwners, deleteOwner } from '../services/apiService';

const OwnerList = () => {
    const [owners, setOwners] = useState([]);

    const fetchOwners = async () => {
        try {
            const data = await getOwners();
            setOwners(data);
        } catch (error) {
            console.error('Error fetching owners:', error);
        }
    };

    const removeOwner = async (id) => {
        try {
            await deleteOwner(id);
            fetchOwners(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting owner:', error);
        }
    };

    useEffect(() => {
        fetchOwners();
    }, []);

    return (
        <div>
            <h1>Owners</h1>
            <ul>
                {owners.map((owner) => (
                    <li key={owner._id}>
                        {owner.name} - {owner.phone}
                        <button onClick={() => removeOwner(owner._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OwnerList;
