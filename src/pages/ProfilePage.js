import React from "react";
import ProfilePageLeftSide from "../components/ProfilePageLeftSide";
import ProfilePageTop from "./../components/ProfilePageTop";
import { makeStyles } from "@mui/styles";
import ProfilePageRightSide from "../components/ProfilePageRightSide";
import Post from './../components/Post';

const useStyle = makeStyles({
  container: {
    backgroundColor: "#f0f2f5",
    
  },
  main: {
    marginTop:"50%",
    display: "flex",
    gap: "40px"

  },
  rightSide: {
  
    width: "60%",

  }
});

export default function ProfilePage() {
  const style = useStyle();

  return (
    <div className={style.container}>
      <ProfilePageTop />
      
      <div className={style.main}>
        <ProfilePageLeftSide />

       <div className={style.rightSide}>
          <ProfilePageRightSide />
          <Post/>
       </div>
        
      </div>
    </div>
  );
}
