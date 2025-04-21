import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter } from 'react-router-dom';
import "./test.scss";
import Home from "./pages/Home/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
