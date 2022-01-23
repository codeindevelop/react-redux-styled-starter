import React from "react";
import Router from "./routes/Router";
import { I18nProvider } from "./i18n/I18nProvider";
import { MaterialThemeProvider } from "./layout/MaterialThemeProvider";

export default function App() {
  return (
    <>
      {/* Localization Config */}
      <I18nProvider>
        {/* Material Theme Config */}
        <MaterialThemeProvider>
          {/* Main Router File */}
          <Router />
        </MaterialThemeProvider>
      </I18nProvider>
    </>
  );
}
