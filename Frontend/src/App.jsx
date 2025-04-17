import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./test.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main class="container">
      <h1>Hello, Sass!</h1>
      <p>This is a simple example of using Sass with HTML.</p>
    </main>
  );
}

export default App;
