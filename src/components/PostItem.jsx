import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className="list-group mb-2">
      <Link
        to={`/posts/${props.post.id}`}
        className="list-group-item list-group-item-action"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            <span className="">{props.post.id}.</span>
            <strong className="border-bottom border-2 border-black">
              {props.post.title}
            </strong>
          </h5>
          <Button
            variant="outline-danger"
            onClick={() => {
              props.remove(props.post);
            }}
          >
            Delete
          </Button>
        </div>
        <p className="mb-1">{props.post.body}</p>
      </Link>
    </div>
  );
};

export default PostItem;
