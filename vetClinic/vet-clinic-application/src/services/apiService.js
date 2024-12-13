import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

// Pet APIs
export const getPets = async () => await axios.get(`${API_BASE_URL}/pets`);
export const getPetById = async (id) => await axios.get(`${API_BASE_URL}/pets/${id}`);
export const addPet = async (petData) => await axios.post(`${API_BASE_URL}/pets`, petData);
export const deletePet = async (id) => await axios.delete(`${API_BASE_URL}/pets/${id}`);

// Owner APIs
export const getOwners = async () => await axios.get(`${API_BASE_URL}/owners`);
export const getOwnerById = async (id) => await axios.get(`${API_BASE_URL}/owners/${id}`);
export const addOwner = async (ownerData) => await axios.post(`${API_BASE_URL}/owners`, ownerData);
export const deleteOwner = async (id) => await axios.delete(`${API_BASE_URL}/owners/${id}`);

// Update owner
export const updateOwner = async (id, ownerData) => {
    const response = await axios.put(`${API_BASE_URL}/owners/${id}`, ownerData);
    return response.data;
};

// Update pet
export const updatePet = async (id, petData) => {
    const response = await axios.put(`${API_BASE_URL}/pets/${id}`, petData);
    return response.data;
};