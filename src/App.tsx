import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import StoryLine from "./Components/StoryLine/StoryLine";
import Whitepaper from "./Components/Whitepaper/Whitepaper";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/storyline" element={<StoryLine />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
};

export default App;
