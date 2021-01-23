import React, { useEffect, useRef, useState } from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import logoImg from "../../images/GTC-Logo.svg";
import arrowImg from "../../images/chevron_down.svg";
import Text from "../texts/Text";
import { Link as RouteLink } from "react-router-dom";
import ChevronDown from "../svgs/ChevronDown";
import navData from "../../data/nav-data";

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
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.dimensions.margins.dekstop};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0 ${({ theme }) => theme.dimensions.margins.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0 ${({ theme }) => theme.dimensions.margins.mobile};
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

const Link = styled(RouteLink)`
  text-decoration: none;
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
  top: -100vh;
  width: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  z-index: 4;
  display: none;
  background-color: ${({ theme }) => theme.colors.accent.default};
  padding: 40px;
  box-sizing: border-box;
  transition: top 0.3s ease-out;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: block;
  }
`;

const MobileLinks = styled.div`
  margin-top: 100px;
`;

const MobileDropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 12px;
  box-sizing: border-box;
  transition: all 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark};
  }
`;

const MobileDropDownIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const IconContainer = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileDropDownMenu = styled.div`
  width: 100%;
  max-height: 0;
  padding: 0px 8px;
  box-sizing: border-box;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
`;

const MobileNormalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 12px;
  box-sizing: border-box;
  transition: all 0.1s linear;
  cursor: pointer;

  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark};
  }
`;

const HamburgerButton = styled.button`
  display: none;
  z-index: 5;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: block;
  }
`;

const MobileMenuItem = styled.div`
  padding: 8px 12px;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.primary.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.dark};
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
      <IconContainer>
        <ChevronDown color={"white"} />
      </IconContainer>
      {menuOpen && (
        <DropdownMenu onClick={() => setMenuOpen(false)}>
          {children}
        </DropdownMenu>
      )}
    </Dropdown>
  );
});

const MobileDropDownLink = withTheme(
  ({
    sectionTitle,
    children,
    theme,
  }: {
    sectionTitle: string;
    children: any;
    theme: DefaultTheme;
  }) => {
    const [isActive, setActive] = useState(false);
    const menuEl = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      const currentEl = menuEl.current;
      if (currentEl && currentEl.style) {
        if (isActive) currentEl.style.maxHeight = currentEl.scrollHeight + "px";
        else currentEl.style.maxHeight = "0px";
      }
    }, [isActive]);
    return (
      <div>
        <MobileDropDown onClick={() => setActive(!isActive)}>
          <Text variant="medium" weight="700" color={theme.colors.cta.default}>
            {sectionTitle}
          </Text>
          <MobileDropDownIcon src={arrowImg} />
        </MobileDropDown>
        <MobileDropDownMenu ref={menuEl}>{children}</MobileDropDownMenu>
      </div>
    );
  }
);

const MobileNav = withTheme(
  (props: { theme: DefaultTheme; className: any }) => {
    return (
      <MobileRoot {...props}>
        <MobileLinks>
          {navData.map((data, index) => {
            if (data.sectionTitle)
              return (
                <MobileDropDownLink
                  sectionTitle={data.sectionTitle}
                  key={index}>
                  {data.links.map((linkData, dIndex) => (
                    <Link to={linkData.route} key={index + dIndex}>
                      <MobileMenuItem>
                        <Text variant="small">{linkData.title}</Text>
                      </MobileMenuItem>
                    </Link>
                  ))}
                </MobileDropDownLink>
              );
            return (
              <MobileNormalLink href={data.route} key={index}>
                <Text
                  variant="small"
                  weight="700"
                  color={props.theme.colors.cta.default}>
                  {data.title}
                </Text>
              </MobileNormalLink>
            );
          })}
        </MobileLinks>
      </MobileRoot>
    );
  }
);

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Root>
      <Link to="/">
        <Logo src={logoImg} />
      </Link>
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
      <MobileNav className={navOpen ? "nav-open nv-open" : ""}></MobileNav>
    </Root>
  );
};

export default withTheme(NavBar);
