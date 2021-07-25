// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { problemsPosts } from "../../../utils/getPostsByType";

export default function ReactHubPage() {
  return (
    <>
      <Header title="Webslate.io - Problems" />
      {problemsPosts.map((post) => (
        <PostItem type="problems" key={post.link} post={post} />
      ))}
    </>
  );
}
