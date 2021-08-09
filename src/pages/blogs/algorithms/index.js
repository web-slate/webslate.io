// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { algorithmPosts } from "../../../utils/getPostsByType";

export default function AlgorithmHubPage() {
  return (
    <>
      <Header title="Webslate.io - Algorithms" />
      <div className="postItemList">
        {algorithmPosts.map((post) => (
          <PostItem type="algorithms" key={post.link} post={post} />
        ))}
      </div>
    </>
  );
}
