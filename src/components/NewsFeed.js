import React from "react";
import { makeStyles } from "@mui/styles";
import StoryContainer from "./StoryContainer";
import CreatePost from "./post/CreatePost";
import PrintUserPosts from "./PrintUserPosts";

const useStyles = makeStyles({
  feed: {
    width: "75%",
    background: "#F2F3F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  createPost: {},

  storiesWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

export default function NewsFeed() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.feed}>
        <div className={classes.storiesWrapper}>
          <StoryContainer />
        </div>
        <CreatePost />
        <PrintUserPosts />
        {/* <PrintAllPosts/> */}
      </div>
    </>
  );
}
