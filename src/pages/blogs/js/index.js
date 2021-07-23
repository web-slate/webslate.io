import { PostItem } from "../../../common/components/Blog/PostItem";
import { jsPosts } from "../../../getPostsByType";

// Components.
import Menu from "../../../common/components/Menu";
import Logo from "../../../common/components/Logo";

export default function JsHubPage() {
  return (
    <>
      <Logo />
      <Menu />
      {jsPosts.map((post) => (
        <PostItem type="js" key={post.link} post={post} />
      ))}
    </>
  );
}
