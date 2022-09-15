import React from "react";
import { useDispatch } from "react-redux";
import { deletePOST } from "../Redux/actions/actionCreator";

function PostDetails({ post }) {
  let dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deletePOST(id));
  };
  return (
    <div className="col s12 m6">
      <div className="card teal ">
        <div className="card-content">
          <span className="card-title white-text">{post.title}</span>
          <p className="white-text">{post.content}</p>
        </div>
        <div className="card-action">
          <button onClick={() => deletePost(post._id)} className="btn red">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
