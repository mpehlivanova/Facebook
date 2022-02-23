import React from "react";
import { makeStyles } from "@mui/styles";
import CreatePost from "./CreatePost"
import Post from './Post';

const useStyle = makeStyles({
    mainRight: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: "-19px",
      gap:"5px"
    }
});

export default function ProfilePageRightSide() {
  const style = useStyle();

  return (
    <div className={style.mainRight}>
      <CreatePost />
      <Post />
    </div>
  );
}
