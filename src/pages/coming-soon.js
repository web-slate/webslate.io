import Head from "next/head";

// Components.
import Menu from "../common/components/Menu";
import Logo from "../common/components/Logo";

function comingSoon() {
  return (
    <>
      <Head>
        <title>Webslate - Coming Soon...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page">
        <h1>Thanks for visiting this page. Its coming soon...</h1>
        <Menu />
        <Logo type="" />
      </div>
    </>
  );
}

export default comingSoon;
