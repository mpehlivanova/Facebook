import React from "react";
import CreateComment from "./CreateComment";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  feed: {
    width: "60%",
    background: "#F2F3F5",    //change color /Marian
    padding: "20px",
    display:"flex",
    justifyContent:"center",  //add new style /Marian
    

  
  createPost:{

  }  

  },
  
});

export default function NewsFeed(){
    const classes = useStyles();
return(
  <div className={classes.feed}>
    <CreateComment/>
    
  </div>
  
)
}