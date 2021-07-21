import Head from "next/head";

// Components.
import Menu from "../common/components/Menu";
import Logo from "../common/components/Logo";

function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Webslate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page">
        <h1>Welcome to Webslate</h1>
        <Menu />
        <Logo type="" />
      </div>
    </>
  );
}

export default Home;
