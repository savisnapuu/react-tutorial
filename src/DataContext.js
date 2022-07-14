import { useState, createContext } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([
    { name: "asd", hp: "5", init: 0, bonus: 0, type: "player" },
  ]);

  const pushData = (data) => {
    setData((prevState) => data);
  };

  return (
    <DataContext.Provider value={{ data, pushData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
