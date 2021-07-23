// Components.
import { PostItem } from "../../../common/components/Blog/PostItem";
import Header from "../../../common/components/Blog/Header";

// Utils.
import { jsPosts } from "../../../utils/getPostsByType";

export default function JsHubPage() {
  return (
    <>
      <Header title="Webslate.io - Javascript Articles"/>
      {jsPosts.map((post) => (
        <PostItem type="js" key={post.link} post={post} />
      ))}
    </>
  );
}
