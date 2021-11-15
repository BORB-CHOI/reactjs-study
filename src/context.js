import { createContext, useState } from "react";

const isFormView = false;

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, setContext] = useState(isFormView);

  return (
    <Context.Provider value={{ isFormView: state, setContext }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
