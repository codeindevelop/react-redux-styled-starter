import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Views/Home/HomePage";

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
