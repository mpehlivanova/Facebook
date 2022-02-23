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
    background: "#F2F3F5",    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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