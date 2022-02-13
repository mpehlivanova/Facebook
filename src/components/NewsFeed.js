import React from "react";

import { makeStyles } from "@mui/styles";
import StoryBox from './StoryBox';
import CreateStory from "./CreateStory";

const useStyles = makeStyles({
  feed: {
    width: "60%",
    background: "#f2f3f5",
    padding: "20px",
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
          <CreateStory/>
          <StoryBox />
          
        </div>
      </div>
    </>
  );
}