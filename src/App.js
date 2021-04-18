import logo from "./logo.svg";
import "./App.css";

import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  return <HomePage />;
}

export default App;
