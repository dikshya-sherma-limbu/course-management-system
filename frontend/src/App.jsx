import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to Course Management System !</h1>
      <Outlet /> {/* This is where child components will be rendered */}
    </>
  );
}

export default App;
