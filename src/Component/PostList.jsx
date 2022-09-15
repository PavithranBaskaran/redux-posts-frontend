import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/actions/actionCreator";
import PostDetails from "./PostDetails";

function PostList() {
  let post = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);
  console.log(post.posts.state);

  return (
    <div className="container">
      <div className="row">
        {post.posts.state &&
          post.posts.state.map((post) => {
            
            return <PostDetails post={post} key={post._id} />;
          })}
      </div>
    </div>
  );
}

export default PostList;
