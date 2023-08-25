import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найденны</h1>;
  }
  return (
    <div className="postsList">
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          key={post.id}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
