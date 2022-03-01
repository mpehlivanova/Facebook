import * as React from "react";
import BadgeAvatars from "../Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  container: {
    width:"100%",

  },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
    justifyContent: "space-between",
    
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },

  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "5px",
    borderRadius: "50px",
    width: "100%",
    height: "20px",
    outlineWidth: "0",
    
  },
  commenrWrite: {
    display: "flex",
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " #eff2f5",
    borderRadius: "20px",
    marginLeft: "5px",
    "&focus": { border: "none" },
  },
  right:{
    display: "flex",
    justifyContent:"end",
  }
  
});
export default function CreateComment(props) {
  const post = useStyles();
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  return (
    <div className={post.container}>
      <div className={post.row}>
     
          <BadgeAvatars image={avatar} />
       
        <div className={`${post.commenrWrite}`}>
          <input
            onChange={(ev) => props.onChange(ev)}
            className={post.inputComment}
            type="text"
            placeholder="White a comment"
            value={props.comment}
          ></input>{" "}
        </div>
        <div className={post.right}>
          <IconButton
            onClick={(ev) => {
              props.onClick(ev)
              props.numberComment()}}
            size="small"
          >
            <AddIcon size="small" color="disabled" />
          </IconButton>
          <IconButton size="small">
            <SentimentSatisfiedOutlinedIcon
              onClick={props.handleViewEmoji}
              className={post.iconContact}
            />
          </IconButton>
          <IconButton size="small">
            <PhotoCameraOutlinedIcon className={post.iconContact} />
          </IconButton>
          <IconButton size="small">
            <StickyNote2OutlinedIcon className={post.iconContact} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
