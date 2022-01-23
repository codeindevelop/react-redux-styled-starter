import React from "react";
import Header from "./Header/Header";
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
