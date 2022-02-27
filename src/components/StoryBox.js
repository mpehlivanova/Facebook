import React from "react";
// import "../components-css/StoryBox"
import { makeStyles } from "@mui/styles";
// import users from "../server/users"
export default function StoryBox() {
  const stories = [
    {
      name: "Ervin Howell",
      avatar:
        "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",

      story:
        "https://i.pinimg.com/originals/6b/cb/e1/6bcbe10420ae10b82b550b3d4adeb13e.jpg",
    },
    {
      name: "Kurtis Weissnat",
      avatar: "https://randomuser.me/api/portraits/men/27.jpg",

      story:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      name: "Clementine Bauch",
      avatar:
        "https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg",

      story:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      name: "Glenna Reichert",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9U_yJRVYMZX4I-rliowO8_qW4e-Ms_VrnbHCiFzVKVVRTmtHGAZKRN7dijPNHVfBZFE&usqp=CAU",

      story:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxGUYCSRsgb_jb5vQBQtWQbpXEhsdc6ijeHjjFZjiPbpRXEM4_FCeEd2IO8wtDTYJl_w&usqp=CAU",
    },
  ];

  const useStyle = makeStyles({
    storyWrapper: {
      width: "112px",
      height: "198px",
      margin: "5px",
      borderRadius: "10px",
      backgroundImage: "",
      display: "flex",
      flexDirection: "column",

      justifyContent: "space-between",
      "&:hover": {
        overflow: "hidden",
        transform: "scale(1.03)",
        transition: "0.25s ",
      },
    },

    userAvatar: {
      width: "35px",
      height: "35px",
      borderRadius: "99px",
      position: "relative",
      top: "10px",
      left: "10px",
      border: "5px solid white",
    },

    authorName: {
      color: "white",
      fontFamily: "Segoe UI",
      fontSize: "12px",
      marginBottom: "5px",
      marginLeft: "5px",
    },
  });
  const style = useStyle();

  return (
    <>
      {
        stories.map((story) => {

        return (
          <div key={story.name}
            className={style.storyWrapper}
            style={{
              backgroundImage: `url(${story.story})`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
            }}
          >
            <img
              className={style.userAvatar}
              src={story.avatar}
              alt="userAvatar"
            />

            <h4 className={style.authorName}>{story.name}</h4>
          </div>
        );
      
      })}
    </>
  );
}
