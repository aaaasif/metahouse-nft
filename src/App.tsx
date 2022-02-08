import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "./components";
import { CompletedProject, PendingProject, SignIn, SignUp } from "./pages";
import { CreateProject } from "./pages";

let isUser = true;

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isUser ? (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div className="app">
          <Profile />
          <div className="profile_route_wrapper">
            <Routes>
              <Route path="/" element={<CreateProject />} />
              <Route path="/completed-project" element={<CompletedProject />} />
              <Route path="/pending-project" element={<PendingProject />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
