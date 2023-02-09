// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { reactPosts } from "../../../utils/getPostsByType";

export default function ReactHubPage() {
  return (
    <>
      <Header title="Webslate.io - React Articles" />
      {reactPosts.map((post) => (
        <PostItem type="react" key={post.link} post={post} />
      ))}
    </>
  );
}
