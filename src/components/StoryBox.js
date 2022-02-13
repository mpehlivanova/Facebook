import React from "react";
// import "../components-css/StoryBox"
import { makeStyles } from "@mui/styles";

export default function StoryBox() {
  const stories = [
    {
      name: "Rango",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabbR9Ce-BSxT-U8aJ_TrRKPuCh3P_z4srnQ&usqp=CAU",

      story:
        "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg",
    },
    {
      name: "Koko",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OzZHYTinWIYI4RJLsl4b02230uWIKVB5lWn0mgR0DncE-0GAckushHZ9TyRIlbbphKI&usqp=CAU",

      story:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6VUAnaCaXucCfLBspbFe8wpFAyD-TEJBq2Gx_pI5cSJ4Fr_et8nPO_qDc6PDkbCsDo0&usqp=CAU",
    },
    {
      name: "Nemo",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM01N479KkBK_s89MUT0XhuGjWSnNcwkybCfGZnFOwkjRWhb6_7sc-Qyg_CIvd-k67Ahw&usqp=CAU",

      story:
        "https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_QL75_UX500_CR0,47,500,281_.jpg",
    },
    {
      name: "Simba",
      avatar:
        "https://imgix.bustle.com/rehost/2016/9/13/cdeb5e9c-34ac-4ba0-96a6-a878a5187414.png?w=800&fit=crop&crop=faces&auto=format%2Ccompress",

      story:
        "https://www.jenmansafaris.com/wp-content/uploads/2018/04/37069384-lion-king-pictures.jpg",
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
      {stories.map(story => {
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
