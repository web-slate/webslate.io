// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { performancePosts } from "../../../utils/getPostsByType";

export default function PerformanceHubPage() {
  return (
    <>
      <Header title="Webslate.io - Performance Articles" />
      {performancePosts.map((post) => (
        <PostItem type="performance" key={post.link} post={post} />
      ))}
    </>
  );
}
