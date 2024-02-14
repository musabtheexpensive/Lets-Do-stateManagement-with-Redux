import React, { createContext } from "react";

const CounterContext = ({ children }) => {
  const COUNTER_CONTEXT = createContext();
  const value = {
    count: 0,
  };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      {children}
    </COUNTER_CONTEXT.Provider>
  );
};

export default CounterContext;
