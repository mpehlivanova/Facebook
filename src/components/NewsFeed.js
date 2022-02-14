import React from "react";
import CreateComment from "./CreateComment";

import { makeStyles } from "@mui/styles";
import StoryContainer from "./StoryContainer";
import Post from "./Post";

const useStyles = makeStyles({
  feed: {
    width: "60%",
    background: "#F2F3F5",    //change color /Marian
    display:"flex",
    justifyContent:"center", 
    flexDirection: "column",
    alignItems: "center" ,//add new style /Marian
    gap:"20px"
  },

  storiesWrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function NewsFeed(){
    const classes = useStyles();


  return (
    <>
      <div className={classes.feed}>
        <div className={classes.storiesWrapper}>
          <StoryContainer/>
        </div>
        {/* <CreateStory/>
          <StoryBox /> */}
          <CreateComment/>
          <Post/>
      </div>
    </>
  );

}