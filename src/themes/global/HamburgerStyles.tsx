import { createGlobalStyle } from "styled-components";

/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
const HamburgerStyles = createGlobalStyle`
    .hamburger {
        outline: none;
        padding: 15px 15px;
        cursor: pointer;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible; 
        opacity: 0.7;
        transition: all 0.1s ease-out;
    }
    .hamburger:hover {
    opacity: 1; }
    .hamburger.is-active:hover {
    opacity: 1; }
    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after {
    background-color: ${({ theme }) => theme.colors.primary.default}; }

    .hamburger-box {
    width: 32px;
    height: 24px;
    display: inline-block;
    position: relative; }

    .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px; }
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 32px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
    .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
    .hamburger-inner::before {
    top: -10px; }
    .hamburger-inner::after {
    bottom: -10px; }

    
    /*
    * Vortex
    */
    .hamburger--vortex .hamburger-inner {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear; }
    .hamburger--vortex .hamburger-inner::before {
    transition-property: top, opacity; }
    .hamburger--vortex .hamburger-inner::after {
    transition-property: bottom, transform; }

    .hamburger--vortex.is-active .hamburger-inner {
    transform: rotate(765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {
    transition-delay: 0s; }
    .hamburger--vortex.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0; }
    .hamburger--vortex.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg); }

    /*
    * Vortex Reverse
    */
    .hamburger--vortex-r .hamburger-inner {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear; }
    .hamburger--vortex-r .hamburger-inner::before {
    transition-property: top, opacity; }
    .hamburger--vortex-r .hamburger-inner::after {
    transition-property: bottom, transform; }

    .hamburger--vortex-r.is-active .hamburger-inner {
    transform: rotate(-765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {
    transition-delay: 0s; }
    .hamburger--vortex-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0; }
    .hamburger--vortex-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg); }
`;

export default HamburgerStyles;
