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

export const problemsPosts = importAll(
  require.context('../pages/blogs/problems', true, /\.mdx$/)
);