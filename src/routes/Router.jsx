import React from "react";
import { shallowEqual, useSelector } from "react-redux";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import MainLayout from "../layout/MainLayout";

export default function Router() {
  // Check Is user Authenticated
  const { isAuthenticated } = useSelector(
    ({ auth }) => ({
      isAuthenticated: auth.login.isAuthenticated,
    }),
    shallowEqual
  );
  return (
    <>
      {/* Main Layout */}
      <MainLayout  >
        <PublicRoutes />

        {/* If user is authenticated can access to private routes */}
        {isAuthenticated === true && (
          <>
            <PrivateRoutes />
          </>
        )}
      </MainLayout>
    </>
  );
}
