import React, { useState } from "react";
import styled, { withTheme, DefaultTheme, keyframes } from "styled-components";
import logoImg from "../../images/GTC-Logo.svg";
import arrowImg from "../../images/chevron_down.svg";
import Text from "../texts/Text";
import { Link } from "react-router-dom";

const navData = [
  {
    sectionTitle: "Who We Are",
    links: [
      { title: "What We Believe", route: "/belief" },
      { title: "Our Story", route: "/story" },
      { title: "Leadership", route: "/leadership" },
    ],
  },
  {
    sectionTitle: "Our Ministries",
    links: [
      { title: "Youth", route: "/youth" },
      { title: "Kids", route: "/kids" },
      { title: "GTC Cafe", route: "/cafe" },
    ],
  },
  {
    sectionTitle: "Resouces",
    links: [
      { title: "Media", route: "/Media" },
      { title: "Contact Us", route: "/contact" },
    ],
  },
  {
    title: "Give Back",
    route: "https://www.google.com",
  },
];

interface NavBarProps {
  theme: DefaultTheme;
  children?: any;
}

const slideInLeft = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 320px;
  }
`;

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.dimensions.margins.dekstop};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};

  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 91.54px;
  height: 40px;
  padding-right: 15%;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: none;
  }
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  white-space: nowrap;
  padding: 16px 16px 16px 24px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.default};
  }

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
  padding: 12px 20px;

  transition: background-color 0.1s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.default};
  }
`;

const DropdownIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-left: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.lights.offWhite};
  min-width: 100%;

  z-index: 5;
`;

const MobileRoot = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 320px;
  height: 100vh;
  z-index: 4;
  background-color: ${({ theme }) => theme.colors.accent.default};
  display: none;
  animation: ${slideInLeft} 0.1s ease-out;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: block;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  z-index: 5;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: block;
  }
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

const MobileNav = () => {
  return <MobileRoot></MobileRoot>;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Root>
      <Logo src={logoImg} />
      <Links>
        {navData.map((data, index) => {
          if (data.sectionTitle)
            return (
              <DropdownLink title={data.sectionTitle} key={index}>
                {data.links.map((linkData, linkIndex) => (
                  <Link to={linkData.route} key={linkIndex}>
                    <DropdownItem>
                      <Text variant="x-small">{linkData.title}</Text>
                    </DropdownItem>
                  </Link>
                ))}
              </DropdownLink>
            );

          return (
            <NormalLink href={data.route} key={index}>
              <Text
                variant="x-small"
                color={props.theme.colors.lights.offWhite}>
                {data.title}
              </Text>
            </NormalLink>
          );
        })}
      </Links>
      <HamburgerButton
        className={`hamburger hamburger--vortex ${navOpen ? "is-active" : ""}`}
        onClick={() => setNavOpen(!navOpen)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </HamburgerButton>
      {navOpen && <MobileNav></MobileNav>}
    </Root>
  );
};

export default withTheme(NavBar);
