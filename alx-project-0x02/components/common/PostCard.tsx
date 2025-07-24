import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <p className="text-sm text-gray-400 mt-3">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
