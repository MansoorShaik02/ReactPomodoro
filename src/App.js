import Timer from "./Timer"
import './App.css';
import SettingsIcon from "./SetingsIcon";
import { useState } from "react";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";


function App() {
  const percentage = 1
  const [showSettings, setShowSettings] = useState(false);
  const [work, setwork] = useState(30);
  const [breaktime, setbreaktime] = useState(15)
  return (
    <>
      <SettingsContext.Provider value={{ workMinutes: work, breakminutes: breaktime, setbreaktime, setwork, showSettings, setShowSettings }}>


        {showSettings ? <Settings></Settings> : <Timer></Timer>}
      </SettingsContext.Provider>


    </>

  );
}

export default App;

