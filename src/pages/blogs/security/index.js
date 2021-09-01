// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { securityPosts } from "../../../utils/getPostsByType";

export default function ReactHubPage() {
  return (
    <>
      <Header title="Webslate.io - Security Articles" />
      {securityPosts.map((post) => (
        <PostItem type="react" key={post.link} post={post} />
      ))}
    </>
  );
}
