# Vet Clinic Management System

This project is a full-stack web application designed to manage pets and owners in a veterinary clinic. It includes a **React frontend** and an **Express backend** connected to a MongoDB database.

---

## **Project Overview**
- **Backend**: Handles API requests and interacts with the MongoDB database.
- **Frontend**: Provides a user interface built with React and Material-UI for managing pets and owners.

---

## **Prerequisites**
Before running the project, ensure the following are installed:
1. **Node.js** and **npm**: Download from [https://nodejs.org](https://nodejs.org).
2. **MongoDB**: Ensure MongoDB is set up locally or provide a remote MongoDB connection URL.

---

---

## **Step-by-Step Instructions**

### **1. Backend Setup**

1. Open a terminal and navigate to the backend folder:
cd vetClinic


2. Install backend dependencies:
npm install
### **Backend Dependencies**:
- `express`: Web framework for handling API requests.
- `mongoose`: MongoDB ODM for handling database operations.
- `cors`: Middleware to handle cross-origin requests.
- `nodemon`: Automatically restarts the backend server during development.




3. Start the backend server using `nodemon`:
npx nodemon index.js

- The backend server will start at **`http://localhost:3001`**.

4. Verify the backend:
- Test a sample endpoint in your browser or Postman:
  ```
  http://localhost:3001/api/pets
  ```

---

### **2. Frontend Setup**

1. Open a new terminal and navigate to the frontend folder:
cd vet-clinic-application


2. Install frontend dependencies:
npm install
### **Frontend Dependencies**:
- `react`, `react-dom`: Core React libraries.
- `react-router-dom`: For handling routing between pages.
- `axios`: For making API requests to the backend.
- `@mui/material` and `@mui/icons-material`: Material-UI components for styling.


3. Start the React frontend:
npm start

- The frontend will open in your browser at **`http://localhost:3000`**.

4. Verify the frontend:
- Ensure the backend is running at `http://localhost:3001`.
- Test features like "Register Pet" and "Find Owner" to confirm everything works.

---

## **4. Database Configuration**
The backend connects to a MongoDB database. If you are using a `.env` file, ensure it includes:
MONGODB_URI=mongodb://your-database-url PORT=3001 (Logan Database MongoURI)


---

## **5. Troubleshooting**

### Backend Issues:
- **Server doesn't start**: Ensure `nodemon` is installed and `index.js` exists in the backend folder.
- **Database connection fails**: Check the `MONGODB_URI` in the `.env` file.

### Frontend Issues:
- **React app fails to start**: Ensure dependencies are installed:
npm install

- **API calls fail**: Confirm the backend is running and accessible at `http://localhost:3001`.

### CORS Errors:
- Verify that the backend allows cross-origin requests (CORS).

---

## **Author**
- **Ethan Drover**

---

## **Notes**
1. Make sure the backend is running **before** starting the frontend.
2. Default ports:
- **Backend**: `http://localhost:3001`
- **Frontend**: `http://localhost:3000`

---

## **Thank You for Testing the Vet Clinic Management System!**