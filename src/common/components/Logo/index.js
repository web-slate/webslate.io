import Link from "next/link";

function Logo({ type = "header-logo" }) {
  if (!type) {
    return <img src="images/webslate.jpg" alt="Web Slate.io" />
  }

  return (
    <>
      <Link href="/" className="link">
        <img src="images/webslate.jpg" alt="Web Slate.io" className={type} />
      </Link>
    </>
  );
}

export default Logo;
