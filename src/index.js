import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";

import reportWebVitals from "./reportWebVitals";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Core styles
import "@fortawesome/fontawesome-free/css/all.min.css"; // fontawesome icons
import "./assets/scss/_persian-fonts.scss";
import "./assets/scss/_svg-icons.scss"; // Styles for SVG icons

// Import Swiper styles
import "swiper/css";

// ** Redux Imports
import store from "./redux/store";

// ** Intl, CASL & ThemeColors Context
import ability from "./config/acl/ability";
import { AbilityContext } from "./utility/context/Can";
import { SiteLangProvider } from "./i18n/SiteLangProvider";

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SiteLangProvider>
        <BrowserRouter>
          <PerfectScrollbar>
            <AbilityContext.Provider value={ability}>
              <Suspense fallback={"loading ..."}>
                <LazyApp />
              </Suspense>
            </AbilityContext.Provider>
          </PerfectScrollbar>
        </BrowserRouter>
      </SiteLangProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
