import React, { useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

// create - callback function for add new post
const MyPostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    if (post.title && post.body) {
      e.preventDefault();
      const newPost = {
        ...post,
        id: Date.now(),
      };
      create(newPost);
      setPost({ title: "", body: "" });
    }
  };

  return (
    <form action="">
      <FloatingLabel
        controlId="floatingInput"
        label="Название поста"
        className="mb-3 mt-3"
      >
        <Form.Control
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
      </FloatingLabel>
      <FloatingLabel
        className="mb-3"
        controlId="floatingInput"
        label="Описание поста"
      >
        <Form.Control
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
          value={post.body}
          type="text"
          placeholder="Описание поста"
        />
      </FloatingLabel>

      <Button className="mt-4 w-50 " variant="primary" onClick={addNewPost}>
        Создать пост
      </Button>
      {/* <MyInput
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        value={post.title}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
        value={post.body}
        type="text"
        placeholder="Описание поста"
      /> */}
      {/* <MyButton onClick={addNewPost}>Создать пост</MyButton> */}
    </form>
  );
};

export default MyPostForm;
