import Link from "next/link";

const BlogIndex = () => {
  const posts = [
    { title: "First Post", slug: "first-post" },
    { title: "Second Post", slug: "second-post" },
  ];

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogIndex;
