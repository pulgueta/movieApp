import React, { FC, ReactNode, useReducer } from "react";
import { authReducer } from "../reducer";

import { AuthContext } from "./";

const trigger = () => {
  const uid: any = sessionStorage.getItem("uid");

  return {
    logged: !!uid,
    uid,
  };
};

// export const AuthProvider = ({ children }: React.ReactNode) => {
//   const [state, dispatch] = useReducer(authReducer, {}, trigger);

//   return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
// };
