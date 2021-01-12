import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
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
  }
}
