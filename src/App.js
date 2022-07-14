import "./App.css";
import React from "react";
import CombatantForm from "./components/CombatantForm";
import { DataProvider } from "./DataContext";
import BattleTracker from "./components/BattleTracker";
import ButtonBar from "./components/ButtonBar";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <CombatantForm />
        <BattleTracker />
        <ButtonBar />
      </DataProvider>
    </div>
  );
}

export default App;
