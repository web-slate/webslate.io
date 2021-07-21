import Head from "next/head";

// Components.
import Menu from "../common/components/Menu";
import Logo from "../common/components/Logo";

function AboutUs() {
  return (
    <>
      <Head>
        <title>About Webslate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page">
        <Logo />
        <Menu />
        <h1>👋 Hi, I'm Venkat.R</h1>
        <img src="venkat.jpeg" className="photo" alt="Venkat.R" />
        <p>
          Happy to see you visting <a href="http://webslate.io/">WebSlate.IO</a>
          . I'm a JavaScript and web developer living in sunny Singapore creator
          of <a href="http://webslate.io/">WebSlate.IO</a>.
        </p>
        <p>
          With a passion for teaching, I started making lot of training
          materials for free. during pandemic 2020, i started helping people who
          lose jobs through offline now its online called &nbsp;<a href="http://webslate.io/">WebSlate.IO</a>.
        </p>
        <p>I'm just getting started.</p>
      </div>
    </>
  );
}

export default AboutUs;
