import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

export default function PrintUserPosts() {
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);

  const allPost = useSelector((state) => state.actionPost.addedPosts);
  const userLogPost = allPost.filter((u) => u.userName === fullName);

  return (
    <>
      {userLogPost.map((post) => {
        return (
          <Post
            userName={post.userName}
            text={post.descripion}
            img={avatar}
            storyImg={post.story}
            id={post.postId}
            key={post.postId}
          ></Post>
        );
      })}
    </>
  );
}
