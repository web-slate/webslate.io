import NextHead from "next/head";

// Components.
import Menu from "../Menu";
import Logo from "../Logo";

const Header = ({ title }) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
    <Logo />
    <Menu />
  </>
);

export default Header;
