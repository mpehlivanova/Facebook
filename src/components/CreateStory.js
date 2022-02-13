import React from 'react'
import { makeStyles } from '@mui/styles';
import AddIcon from "@mui/icons-material/Add";





const useStyle = makeStyles({
  createStoryBox: {
    width: "112px",
    height: "198px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      overflow: "hidden",
      transform: "scale(1.03)",
      transition: "0.25s ",
    },
  },
  addIcon: {
    backgroundColor: "#1877f2",
    borderRadius: "99px",
    color: "white",
    position: "relative",
    top: "130px",
    left: "40px",
    border: "5px solid white",
  },
  name: {
    color: "black",
    position: "relative",
    top: "120px",
    left: "14px",
  },
});

export default function CreateStory() {
    const style = useStyle();
    return (
      <>
        <div
          className={style.createStoryBox}
          style={{
            backgroundImage: `url(https://cdn.hmv.com/r/w-640/hmv/files/9d/9dc35313-9a06-4776-8a3e-4397d603c149.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
                <AddIcon className={style.addIcon} />
                <p className={style.name}>Create story</p>
        </div>
      </>
    );
}
