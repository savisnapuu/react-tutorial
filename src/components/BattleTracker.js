import React, { useContext } from "react";
import DataContext from "../DataContext";

function BattleTracker() {
  const { data } = useContext(DataContext);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h1>{item.hp}</h1>
        </div>
      ))}
    </div>
  );
}

export default BattleTracker;
