import React from "react";

import Router from "./routes/Router";
import { I18nProvider } from "./i18n/I18nProvider";

export default function App() {
  return (
    <>
      <I18nProvider>
        {/* Main Router File */}
        <Router />
      </I18nProvider>
    </>
  );
}
