import React from "react";
import CreateStory from "./CreateStory";
import StoryBox from "./StoryBox";
import { makeStyles } from "@mui/styles";
import { userActivate } from "video-react/lib/actions/player";
import  UserStories from "./UserStories"

const useStyle = makeStyles({
  storyContainer: {
    width: "130%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function StoryContainer() {
  const style = useStyle();
  return (
    <div className={style.storyContainer}>
      <CreateStory />
      {UserStories.map((u) => {
        return (
          <StoryBox
            key={u.name}
            img={u.story}
            avatar={u.avatar}
            name={u.name}
            story={u.story}
          />
        );
      })}
    </div>
  );
}
