import * as React from "react";
import UserDisny from "./userDisny.js";
import Post from "./Post.js";
import { useDispatch, useSelector } from "react-redux";
// import { AutofpsSelectRounded } from "@mui/icons-material";

export default function AllPosts(props) {
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state.actionPost.addedPosts); //get all post from global
  // const nameUser=useSelector() // get user name of logged user
  // const imgUser=useSelector() // get user name of logged user

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  return (
    <>
      {UserDisny.map((user) => {
        return (
          <Post
            key={uuidv4()}
            imgUser={`${user.avatar}`}
            userName={user.name}
            storyUser={user.story}
            text={user.text}
          ></Post> //add paramiter function Post
        );
      })}
    </>
  );
}
