import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState({
    color: "primary",
    text: "Toggle Dark Mode",
  });
  const toggleMode = () => {
    if (mode.color === "primary") {
      setMode({
        color: "dark",
        text: "Toggle Light Mode",
      });
      document.body.style.backgroundColor = "#212530";
      document.getElementById("textArea").style.backgroundColor = "#212530";
      document.getElementById("textArea").style.color = "white";
      document.body.style.color = "white";
    } else {
      setMode({ color: "primary", text: "Toggle Dark Mode" });
      document.body.style.backgroundColor = "white";
      document.getElementById("textArea").style.backgroundColor = "white";
      document.getElementById("textArea").style.color = "black";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode.color}
        toggleMode={toggleMode}
        text={mode.text}
      />
      <TextForm />
    </>
  );
}

export default App;
