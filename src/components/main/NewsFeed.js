import React from "react";
import { makeStyles } from "@mui/styles";
import StoryContainer from "../story/StoryContainer";
import CreatePost from "../Post/CreatePost";
import PrintUserPosts from "../Post/PrintUserPosts";
import Post from "../Post/Post";

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
        <Post storyImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <Post storyImg="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
        <Post storyImg="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Post storyImg="https://media.istockphoto.com/photos/alexander-nevsky-cathedral-in-sofia-bulgaria-taken-in-may-2019-taken-picture-id1182393363?k=20&m=1182393363&s=612x612&w=0&h=1tVDnEAxLygwPdod5B9ijIBnscyLy-mMNxPI2Mw2RjU=" />
      </div>
    </>
  );
}
