import React, { useState } from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import logoImg from "../../images/GTC-Logo.svg";
import arrowImg from "../../images/chevron_down.svg";
import Text from "../texts/Text";

interface NavBarProps {
  theme: DefaultTheme;
  children?: any;
}

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  height: 100px;
  width: 100%;

  display: flex;

  align-items: center;

  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.dimensions.margins.dekstop};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`;

const Logo = styled.img`
  width: 91.54px;
  height: 40px;
  padding-right: 15%;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  white-space: nowrap;
  padding: 16px 16px 16px 24px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark}20;
  }
`;

const NormalLink = styled.a`
  padding: 20px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark}20;
  }
`;

const DropdownItem = styled.div`
  color: ${({ theme }) => theme.colors.primary.default};
  padding: 8px;
`;

const DropdownIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-left: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 99%;
  background-color: ${({ theme }) => theme.colors.accent.default};
  width: 100%;

  z-index: 5;
`;

const DropdownLink = withTheme(({ children, theme, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Dropdown
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}>
      <Text variant="x-small" color={theme.colors.lights.offWhite}>
        {title}
      </Text>
      <DropdownIcon src={arrowImg} />
      {menuOpen && <DropdownMenu>{children}</DropdownMenu>}
    </Dropdown>
  );
});

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <Root>
      <Logo src={logoImg} />
      <Links>
        <DropdownLink title="Who We Are">
          <DropdownItem>
            <Text variant="x-small">What We Believe</Text>
          </DropdownItem>
          <DropdownItem>
            <Text variant="x-small">Our Story</Text>
          </DropdownItem>
          <DropdownItem>
            <Text variant="x-small">Leadership</Text>
          </DropdownItem>
        </DropdownLink>
        <DropdownLink title="Our Ministries">
          <DropdownItem>
            <Text variant="x-small">Youth</Text>
          </DropdownItem>
          <DropdownItem>
            <Text variant="x-small">Kids</Text>
          </DropdownItem>
          <DropdownItem>
            <Text variant="x-small">GTC Cafe</Text>
          </DropdownItem>
        </DropdownLink>
        <DropdownLink title="Resources">
          <DropdownItem>
            <Text variant="x-small">Media</Text>
          </DropdownItem>
          <DropdownItem>
            <Text variant="x-small">Leadership</Text>
          </DropdownItem>
        </DropdownLink>
        <NormalLink href="https://www.google.com">
          <Text variant="x-small" color={props.theme.colors.lights.offWhite}>
            Donate
          </Text>
        </NormalLink>
      </Links>
    </Root>
  );
};

export default withTheme(NavBar);
