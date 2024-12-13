import React, { useState } from 'react';
import { addOwner } from '../services/apiService';

const AddOwner = ({ onOwnerAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addOwner(formData);
            onOwnerAdded(); // Notify parent to refresh owner list
            setFormData({ name: '', phone: '', address: '' }); // Reset form
        } catch (error) {
            console.error('Error adding owner:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Owner</h1>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
            />
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                required
            />
            <button type="submit">Add Owner</button>
        </form>
    );
};

export default AddOwner;
