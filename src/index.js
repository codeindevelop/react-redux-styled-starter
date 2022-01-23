import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Core styles

import "./assets/scss/_persian-fonts.scss";
import "./assets/scss/_svg-icons.scss"; // Styles for SVG icons

// Import Swiper styles
import "swiper/css";

// ** Redux Imports
import store from "./redux/store";

// ** Intl, CASL & ThemeColors Context
import ability from "./config/acl/ability";
import { AbilityContext } from "./utility/context/Can";

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AbilityContext.Provider value={ability}>
          <Suspense fallback={"loading ..."}>
            <LazyApp />
          </Suspense>
        </AbilityContext.Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
