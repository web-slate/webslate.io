// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { dataStructurePosts } from "../../../utils/getPostsByType";

export default function DataStructureHubPage() {
  return (
    <>
      <Header title="Webslate.io - Data Structures" />
      <div className="postItemList">
        {dataStructurePosts.map((post) => (
          <PostItem type="data-structures" key={post.link} post={post} />
        ))}
      </div>
    </>
  );
}
