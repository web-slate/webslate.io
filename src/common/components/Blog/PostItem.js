import Link from "next/link";
import { Head } from "./Head";

export const PostItem = ({ type, post }) => {
  const {
    link,
    module: { meta },
  } = post;

  const postLink = `/blogs/${type}` + link
  return (
    <article>
      <Head meta={meta} link={postLink} />
      <Link href={postLink}>
        <a>Read more &rarr;</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};

