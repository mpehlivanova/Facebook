import React from "react";
import { makeStyles } from "@mui/styles";
import StoryContainer from "./StoryContainer";
import CreatePost from "./CreatePost";
import PrintAllPosts from "./PrintAllPosts";
import PrintUserPosts from "./PrintUserPosts";
// import PostHeader from "./Post/PostHeader";
import ViewPostPage from "../pages/ViewPostPage";
import Emoji from "./Emoji"


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


    
  return (
    <>
      <div className={classes.feed}>
        <div className={classes.storiesWrapper}>
          <StoryContainer />
        </div>
          <CreatePost/>
          <PrintUserPosts/>
          <PrintAllPosts/>


      </div>
      
    </>
  );

}