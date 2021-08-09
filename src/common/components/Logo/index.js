import Link from "next/link";
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 18%;
`;

function Logo({ type = "header-logo" }) {
  if (!type) {
    return (
      <LogoWrapper>
        <img src="images/webslate.jpg" alt="Web Slate.io" />
      </LogoWrapper>
    )
  }

  return (
    <LogoWrapper>
      <Link href="/" className="link">
        <img src="/images/webslate.jpg" alt="Web Slate.io" className={type} />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
