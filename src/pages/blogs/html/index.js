// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { htmlPosts } from "../../../utils/getPostsByType";

export default function HTMLhubPage() {
  return (
    <>
      <Header title="Webslate.io - HTML5 Articles" />
      {htmlPosts.map((post) => (
        <PostItem type="html" key={post.link} post={post} />
      ))}
    </>
  );
}
