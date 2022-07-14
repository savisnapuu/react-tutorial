import { Container } from "@mui/system";
import React, { useState, useContext } from "react";
import DataContext from "../DataContext";

function CombatantForm() {
  const { data } = useContext(DataContext);
  const { pushData } = useContext(DataContext);
  const [combatants, setCombatants] = useState([
    { name: "", hp: "", init: 0, bonus: 0, type: "player" },
    { name: "", hp: "", init: 0, bonus: 0, type: "player" },
  ]);

  const handleChange = (event, index) => {
    const values = [...combatants];
    values[index][event.target.name] = event.target.value;
    setCombatants(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    pushData(combatants);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        {combatants.map((combatant, index) => (
          <Container key={index}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={combatant.name}
              onChange={(event) => handleChange(event, index)}
            ></input>
            <input
              type="text"
              name="hp"
              placeholder="hp"
              value={combatant.hp}
              onChange={(event) => handleChange(event, index)}
            ></input>
            <input
              type="text"
              name="init"
              placeholder="init"
              value={combatant.init}
              onChange={(event) => handleChange(event, index)}
            ></input>
            <input
              type="text"
              name="bonus"
              placeholder="bonus"
              value={combatant.bonus}
              onChange={(event) => handleChange(event, index)}
            ></input>
          </Container>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CombatantForm;
