// Components.
import { PostItem } from "@/common/components/Blog/PostItem";
import Header from "@/common/components/Blog/Header";

// Utils.
import { facebookProblemsLinkedListPosts } from "@/utils/getPostsByType";

export default function FacebookLinkedListProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook Linked List Coding Problems" />
      {facebookProblemsLinkedListPosts.map((post) => (
        <PostItem type="problems/linked-list/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
