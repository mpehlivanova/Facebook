import React from "react";
import { makeStyles } from "@mui/styles";
import StoryContainer from "./StoryContainer";
import Post from "./Post";
// import FriendsCard from "./FriendsCard";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import MyPost from "./MyPost";
// import { InfiniteScroll }  from './InfiniteScroll';

const useStyles = makeStyles({
  feed: {
    width: "75%",
    background: "#F2F3F5",    //change color /Marian
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    //add new style /Marian
    gap: "20px"
  },
  createPost:{

  } , 

  storiesWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
});

export default function NewsFeed(){
    const classes = useStyles();

  return (
    <>
      <div className={classes.feed}>
        <div className={classes.storiesWrapper}>
          <StoryContainer />
        </div>
          <CreatePost/>
        <MyPost />
        <AllPosts/>
          {/* <InfiniteScroll/> */}
      </div>
      
    </>
  );

}