import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./test.scss";
import Home from "./pages/Home/Home.jsx";
import Components from "./pages/Components/Components.jsx";
import Builds from "./pages/Builds/Builds.jsx";
import Configurator from "./pages/Configurator/Configurator.jsx";
import Compare from "./pages/Compare/Compare.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
