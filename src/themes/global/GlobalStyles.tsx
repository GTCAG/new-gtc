import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.background};
    }

    .nav-open.nv-open {
        top: 0;
    }

    .loader {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.background};
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 0.4s ease-in-out;
    }

    .loader.loaded {
        opacity: 0;
    }

    .loader.hidden {
        visibility: hidden;
    }

    .slide {
        transform: translateY(200px);
        transition: all 0.7s ease-out;
    }
    .slide.activated {
        transform: translateY(0px);
    }
`;

export default GlobalStyles;
