// Components.
import { PostItem } from "@/common/components/Blog/PostItem";
import Header from "@/common/components/Blog/Header";

// Utils.
import { facebookProblemsArrayPosts } from "@/utils/getPostsByType";

export default function FacebookStringsProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook String Coding Problems" />
      {facebookProblemsArrayPosts.map((post) => (
        <PostItem type="problems/strings/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
