import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.background};
    }

    .nav-open.nv-open {
        top: 0;
    }
`;

export default GlobalStyles;
