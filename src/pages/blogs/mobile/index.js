// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { mobilePosts } from "../../../utils/getPostsByType";

export default function MobileHubPage() {
  return (
    <>
      <Header title="Webslate.io - Mobile Articles" />
      {mobilePosts.map((post) => (
        <PostItem type="mobile" key={post.link} post={post} />
      ))}
    </>
  );
}
