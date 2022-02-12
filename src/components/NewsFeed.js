import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  feed: {
    width: "60%",
    background: "white",
    padding: "20px",
   

  },
  
});

export default function NewsFeed(){
    const classes = useStyles();
return(
  <div className={classes.feed}></div>
)
}