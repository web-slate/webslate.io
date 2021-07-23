import { Head } from "./Head";
import Header from "./Header";

export default function Post({ children, meta }) {
  return (
    <>
      <Header title={meta.title} />
      <Head meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
