import React from "react";
import AddPost from "./AddPost";
import NavBar from "./NavBar";
import PostList from "./PostList";

function HomePage() {
  return (
    <div>
      <NavBar/>
      <AddPost />
      <PostList/>
    </div>
  );
}

export default HomePage;
