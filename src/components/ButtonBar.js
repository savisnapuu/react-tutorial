import React, { useContext } from "react";
import DataContext from "../DataContext";

function ButtonBar() {
  const { data } = useContext(DataContext);
  return (
    <button
      onClick={() => {
        console.log(data);
      }}
    >
      Click me
    </button>
  );
}

export default ButtonBar;
