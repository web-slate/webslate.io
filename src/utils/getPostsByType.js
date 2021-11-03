function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\.mdx$/, ""),
    module: r(fileName),
  }));
}

export const jsPosts = importAll(
  require.context('../pages/blogs/js', true, /\.mdx$/)
);

export const htmlPosts = importAll(
  require.context('../pages/blogs/html', true, /\.mdx$/)
);

export const reactPosts = importAll(
  require.context('../pages/blogs/react', true, /\.mdx$/)
);

export const programmingPosts = importAll(
  require.context('../pages/blogs/programming', true, /\.mdx$/)
);

// Coding Problem
export const problemsPosts = importAll(
  require.context('../pages/blogs/problems', true, /\.mdx$/)
);

export const problemsArrayPosts = importAll(
  require.context('../pages/blogs/problems/arrays', true, /\.mdx$/)
);

// Facebook Coding Problem for Queue.
export const facebookProblemsQueuePosts = importAll(
  require.context('../pages/blogs/problems/queues/facebook', true, /\.mdx$/)
);

// Facebook Coding Problem for Array
export const facebookProblemsArrayPosts = importAll(
  require.context('../pages/blogs/problems/arrays/facebook', true, /\.mdx$/)
);

// Facebook Coding Problem for Linked List.
export const facebookProblemsLinkedListPosts = importAll(
  require.context('../pages/blogs/problems/linked-list/facebook', true, /\.mdx$/)
);

// Facebook Coding Problem for Hash Tables.
export const facebookProblemsHashTablesPosts = importAll(
  require.context('../pages/blogs/problems/hash-tables/facebook', true, /\.mdx$/)
);


export const algorithmPosts = importAll(
  require.context('../pages/blogs/algorithms', true, /\.mdx$/)
);

export const dataStructurePosts = importAll(
  require.context('../pages/blogs/data-structures', true, /\.mdx$/)
);

export const securityPosts = importAll(
  require.context('../pages/blogs/security', true, /\.mdx$/)
);

export const performancePosts = importAll(
  require.context('../pages/blogs/performance', true, /\.mdx$/)
);

export const mobilePosts = importAll(
  require.context('../pages/blogs/mobile', true, /\.mdx$/)
);

