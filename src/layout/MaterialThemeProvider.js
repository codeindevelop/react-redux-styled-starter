import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    direction: "rtl",
    typography: {
      fontFamily: ["webYekan"].join(","),
    },

    palette: {
      type: 'dark',
      danger: {
        // light: will be calculated from palette.primary.main,
        main: "#f64e60",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#3783e7",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        
        main: "#17c191",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },

      error: {
        light: " #e57373",
        main: "#f44336",
        dark: "#d32f2f",
      },
    },

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },

      // Set default elevation to 1 for popovers.
      MuiPopover: {
        elevation: 1,
      },
    },
  }
);

export function MaterialThemeProvider(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>{children}</StylesProvider>
    </ThemeProvider>
  );
}
