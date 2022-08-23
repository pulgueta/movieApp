import { FC } from "react";

import { Route, Routes } from "react-router-dom";


import { Login } from "./views";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </>
  );
};
