// Components.
import { PostItem } from "../../../../../common/components/Blog/PostItem";
import Header from "../../../../../common/components/Blog/Header";

// Utils.
import { facebookProblemsArrayPosts } from "../../../../../utils/getPostsByType";

export default function FacebookArrayProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook Array Coding Problems" />
      {facebookProblemsArrayPosts.map((post) => (
        <PostItem type="problems/arrays/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
