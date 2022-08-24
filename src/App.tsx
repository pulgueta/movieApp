import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./routes";
import { Home, Login } from "./views";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
