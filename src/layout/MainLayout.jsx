import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


export default function MainLayout({ children }) {
  const direction = useSelector((state) => state.layout.config.direction);
  useEffect(() => {
    // ** Get HTML Tag
    const element = document.getElementsByTagName("html")[0];

    // ** If isRTL then add attr dir='rtl' with HTML else attr dir='ltr'
    if (direction === "rtl") {
      element.setAttribute("dir", "rtl");
    } else {
      element.setAttribute("dir", "ltr");
    }
  }, [direction]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
