// Components.
import { PostItem } from "@/common/components/Blog/PostItem";
import Header from "@/common/components/Blog/Header";

// Utils.
import { facebookSortingAlgorithmPosts } from "@/utils/getPostsByType";

export default function FacebookSortingProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook Sorting Coding Problems" />
      {facebookSortingAlgorithmPosts.map((post) => (
        <PostItem type="algorithms/sorting/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
