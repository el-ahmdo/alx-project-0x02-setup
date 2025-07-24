import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  const formatted: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts: formatted,
    },
  };
};

export default Posts;
