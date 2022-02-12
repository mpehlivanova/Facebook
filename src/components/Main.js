import React from "react";


import { makeStyles } from "@mui/styles";
import NewsFeed from "./NewsFeed.js";
import LeftSideBar from "./LeftSideBar.js";
import RightSideBar from "./RightSideBar.js";

const useStyles = makeStyles({
  conrainer: {
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection:"row",
  
  },
  
});



export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.conrainer}>
    <LeftSideBar/>
    <NewsFeed/>
    <RightSideBar/>
    </div>
  );
}
