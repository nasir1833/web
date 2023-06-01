import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}
