import React, { useContext, useState } from "react";

const ActiveSectionContext = React.createContext(null);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  return context;
};

const ActiveSectionProvider = ({ children }) => {
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(false);

  const value = { active, setActive, clicked, setClicked };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
