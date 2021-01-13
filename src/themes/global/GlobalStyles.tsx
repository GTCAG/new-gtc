import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.background};
    }
`;

export default GlobalStyles;
