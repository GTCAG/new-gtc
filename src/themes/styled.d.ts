import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: {
        light: string;
        default: string;
        dark: string;
      };
      cta: {
        default: string;
      };
      lights: {
        white: string;
        offWhite: string;
      };
      accent: {
        default: string;
        dark: string;
      };
    };
    fonts: {
      display: string;
      text: string;
    };
    dimensions: {
      margins: {
        dekstop: string;
        tablet: string;
        mobile: string;
      };
      maxWidth: string;
    };
    breakPoints: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }
}
