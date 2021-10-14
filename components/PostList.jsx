import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="grid">
          <Post post={post}></Post>
        </div>
      ))}

      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
        `}
      </style>
    </div>
  );
}
