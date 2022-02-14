import React from "react";
import CreateComment from "./CreateComment";
import { makeStyles } from "@mui/styles";
import StoryContainer from "./StoryContainer";

const useStyles = makeStyles({
  feed: {
    width: "60%",
    background: "#F2F3F5",    //change color /Marian
    padding: "20px",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
      //add new style /Marian
  createPost:{

  }  

  },

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
        <CreateComment />
      </div>
      
    </>
  );

}