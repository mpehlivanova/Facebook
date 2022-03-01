import React from "react";
import { makeStyles } from "@mui/styles";
import NewsFeed from "../components/main/NewsFeed";
import LeftSideBar from "../components/main/LeftSideBar.js";
import RightSideBar from "../components/main/RightSideBar.js";
// import ProfilePageTop from './../components/ProfilePageTop';

const useStyles = makeStyles({
  container: {
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "1300vh",
    marginTop: "50px",
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <LeftSideBar />
        <NewsFeed/>
        <RightSideBar />
      </div>
      
    </>
  );
}
