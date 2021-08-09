import NextHead from "next/head";
import styled from 'styled-components';

// Components.
import Menu from "../Menu";
import Logo from "../Logo";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = ({ title }) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
    <HeaderWrapper>
      <Logo />
      <Menu />
    </HeaderWrapper>
  </>
);

export default Header;
