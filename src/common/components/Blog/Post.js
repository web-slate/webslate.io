import { Head } from "./Head";
import Header from "./Header";
import styled from 'styled-components';

const PostWrapper = styled.div`
  margin: 0 35px;
`;

export default function Post({ children, meta }) {
  return (
    <>
      <Header title={meta.title} />
      <PostWrapper>
        <Head meta={meta} isBlogPost />
        <article>{children}</article>
      </PostWrapper>
    </>
  );
}
