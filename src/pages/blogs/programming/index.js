// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { programmingPosts } from "../../../utils/getPostsByType";

export default function ReactHubPage() {
  return (
    <>
      <Header title="Webslate.io - Programming" />
      {programmingPosts.map((post) => (
        <PostItem type="programming" key={post.link} post={post} />
      ))}
    </>
  );
}
