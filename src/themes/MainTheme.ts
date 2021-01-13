import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#1E1E1D",
    primary: {
      default: "#292827",
      dark: "#1E1E1D",
      light: "#B1AEAB",
    },
    accent: {
      default: "#EFE4D6",
      dark: "#E2D0BD",
    },
    lights: {
      offWhite: "#F8F2F0",
      white: "#ffffff",
    },
    cta: {
      default: "#A37351",
    },
  },
  fonts: {
    display: "font-family: 'Merriweather', serif;",
    text: "font-family: 'Montserrat', sans-serif;",
  },
  dimensions: {
    margins: {
      dekstop: "70px",
      tablet: "50px",
      mobile: "30px",
    },
    maxWidth: "1300px",
  },
};
export { mainTheme };
