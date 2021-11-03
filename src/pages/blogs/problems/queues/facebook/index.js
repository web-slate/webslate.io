// Components.
import { PostItem } from "@/common/components/Blog/PostItem";
import Header from "@/common/components/Blog/Header";

// Utils.
import { facebookProblemsQueuePosts } from "@/utils/getPostsByType";

export default function FacebookQueueProblemPage() {
  return (
    <>
      <Header title="Webslate.io - Facebook Queues Coding Problems" />
      {facebookProblemsQueuePosts.map((post) => (
        <PostItem type="problems/queues/facebook" key={post.link} post={post} />
      ))}
    </>
  );
}
