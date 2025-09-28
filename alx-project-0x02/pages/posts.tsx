import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: PostProps[] = await res.json();

    return {
      props: {
        posts: data.slice(0, 10), // only first 10 posts for simplicity
      },
      revalidate: 60, // optional: rebuild page every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

