import React from "react";
import { makeStyles } from "@mui/styles";
import CreatePost from "./CreatePost";

const useStyle = makeStyles({
    mainRight: {
        display: "flex",

    }
});

export default function ProfilePageRightSide() {
  const style = useStyle();

    return <div className={style.mainRight}>
      <CreatePost />
  </div>;
}
