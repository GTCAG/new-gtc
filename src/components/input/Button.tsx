import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  children?: any;
  width?: string;
  onClick?: () => void;
}

const Root = styled.button<ButtonProps>`
  padding: 0 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  height: 67px;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid ${({ theme }) => theme.colors.cta.default};

  letter-spacing: 0.75px;
  ${({ theme }) => theme.fonts.text};
  font-weight: 600;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.colors.lights.offWhite
      : props.theme.colors.primary.default};

  &:hover {
    color: ${(props) =>
      props.variant === "secondary"
        ? props.theme.colors.primary.default
        : props.theme.colors.lights.offWhite};
  }
  &:hover div {
    transform: ${({ variant }) =>
      variant === "secondary" ? "translateX(0%);" : "translateX(100%);"};
  }
`;

const ButtonFill = styled.div<ButtonProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.colors.accent.default
      : theme.colors.cta.default};
  z-index: -1;
  transform: ${({ variant }) =>
    variant === "secondary" ? "translateX(-100%);" : "translateX(0%);"};

  transition: all 0.37s ease;
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Root as={props.href ? "a" : "button"} {...props}>
      <ButtonFill {...{ ...props, children: null }} />
      {props.children}
    </Root>
  );
};

export default Button;
