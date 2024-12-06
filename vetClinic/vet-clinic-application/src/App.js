import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import MainMenu from "./components/PetMainMenu";
import OwnerMainMenu from "./components/OwnerMainMenu";
import RegisterPet from "./components/RegisterPet";
import FindPet from "./components/FindPet";
import ViewAllPets from "./components/ViewAllPets";
import RegisterOwner from "./components/RegisterOwner";
import FindOwner from "./components/FindOwner";
import ViewAllOwners from "./components/ViewAllOwners";
import UpdateOwner from "./components/UpdateOwner";
import UpdatePet from "./components/UpdatePet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pet-menu" element={<MainMenu />} />
          <Route path="/owner-menu" element={<OwnerMainMenu />} />
          <Route path="/register-pet" element={<RegisterPet />} />
          <Route path="/find-pet" element={<FindPet />} />
          <Route path="/view-all-pets" element={<ViewAllPets />} />
          <Route path="/register-owner" element={<RegisterOwner />} />
          <Route path="/find-owner" element={<FindOwner />} />
          <Route path="/view-all-owners" element={<ViewAllOwners />} />
          <Route path="/update-pet/:id" element={<UpdatePet />} />
          <Route path="/update-owner/:id" element={<UpdateOwner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;