// Components.
import { PostItem } from "@/common/components/Blog/PostItem";
import Header from "@/common/components/Blog/Header";

// Utils.
import { facebookProblemsHashTablesPosts } from "@/utils/getPostsByType";

export default function FacebookHashTableProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook Hash Table Coding Problems" />
      {facebookProblemsHashTablesPosts.map((post) => (
        <PostItem type="problems/hash-tables/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
