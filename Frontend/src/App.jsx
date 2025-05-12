import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./test.scss";
import Home from "./pages/Home/Home.jsx";
import Components from "./pages/Components/Components.jsx";
import Builds from "./pages/Builds/Builds.jsx";
import Configurator from "./pages/Configurator/Configurator.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import MainLayout from "./components/layout/MainLyaout.jsx";
import AdminLayout from "./pages/Admin/Admin.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/components"
          element={
            <MainLayout>
              <Components />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout>
              <AdminLayout />
            </MainLayout>
          }
        />
        <Route
          path="/builds"
          element={
            <MainLayout>
              <Builds />
            </MainLayout>
          }
        />
        <Route
          path="/configurator"
          element={
            <MainLayout>
              <Configurator />
            </MainLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <MainLayout>
              <SignIn />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
