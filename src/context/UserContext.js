import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [uid, setUID] = useState(null)

  return (
    <UserContext.Provider
      value={{
        uid,
        setUID,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
