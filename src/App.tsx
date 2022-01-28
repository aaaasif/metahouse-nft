import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Menu } from "./components";
import Stake from "./pages/Stake";
import Dashboard from "./pages/Dashboard";
import { useEagerConnect } from "./hooks/useEagerConnect";

const App: React.FC = () => {
  useEagerConnect();
  return (
    <div className="app">
      <Menu />
      <div className="page_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stake" element={<Stake />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
