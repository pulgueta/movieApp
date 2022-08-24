import React, { FC, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context";

interface Props {
  children: ReactNode;
}

export const PrivateRoute: FC<Props> = ({ children }) => {
  // const {logged} = useContext(AuthContext)

  return true ? <>{children}</> : <Navigate to="/login" />;
};
