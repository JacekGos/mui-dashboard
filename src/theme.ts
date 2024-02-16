import { createContext, useState, useMemo, ReactNode } from "react";
import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";

export const ColorContext = createContext({});

// export const theme = ({children}: {children: ReactNode}) => ({
export const tokens = () => ({
  // #F5F4F4
  primary: {
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#f9f8f8",
    400: "#f7f6f6",
    500: "#f5f4f4",
    600: "#c4c3c3",
    700: "#939292",
    800: "#626262",
    900: "#313131",
  },
  secondary: {
    100: "#fff2d5",
    200: "#ffe4ab",
    300: "#ffd781",
    400: "#ffc957",
    500: "#ffbc2d",
    600: "#cc9624",
    700: "#99711b",
    800: "#664b12",
    900: "#332609",
  },
  background: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
});

export const themeSettings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.secondary[500],
      },
      background: {
        default: colors.background[500],
      },
    },
    typography: {
      fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "Sans-serif"].join(","),
        fontsize: 14,
      },
    },
  };
};


export const useMode = () => {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return [theme];
};
