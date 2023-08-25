import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/postService";
import MyLoader from "../components/UI/Loader/MyLoader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className="">
      {isLoading ? <MyLoader /> : <h3>{post.title}</h3>}
      {comments.map((com) => (
        <div key={com.id} className="">
          <h4>{com.name}</h4>
          <h5>{com.email}</h5>
          <p>{com.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostIdPage;
