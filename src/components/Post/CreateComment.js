import * as React from "react";
import BadgeAvatars from "../Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UUidv4 from "../Util";
import { makeStyles } from "@mui/styles";
import { Button } from "react-rainbow-components";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ButtonPost from "./ButtonPost";
import AddIcon from "@mui/icons-material/Add";

import { Picker } from "@material-ui/pickers";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
    gap: "5px",
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
    width: "80%",
    height: "20px",
    outlineWidth: "0",
  },
  commenrWrite: {
    display: "flex",
    width: "95%",
    flexDirection: "row",
    // alignItems: "baseline",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " #eff2f5",
    borderRadius: "20px",
    marginLeft: "5px",
    "&focus": { border: "none" },
  },
});

export default function CreateComment(props) {
  const post = useStyles();
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const [comment, setComment] = useState("");

  const setHandleComment = (ev) => {
    setComment(ev.target.value);
  };

  const handleViewEmoji=()=>{
    viewEmoji?setViewEmoji(false):setViewEmoji(true)
  }

  const onEmojiClick = (ev, emojiObject) => {
    setComment(comment=>comment + emojiObject.emoji);
    setViewEmoji(false);
    console.log(comment + emojiObject.emoji);
  };
  const dispatch = useDispatch();

  const handleCreateComment = () => {
    console.log(" allPosts");
    if (comment.length !== 0) {
      dispatch({
        type: "CREATECOMMENT",
        payload: {
          comment: comment,
          idcomment: UUidv4(),
          postId: props.id,
        },
      });
    }
  };

  const [viewEmoji, setViewEmoji] = React.useState(null);
 
  return (
    <>
      <div className={post.row}>
        <div>
          <BadgeAvatars image={avatar} />
        </div>
        <div className={`${post.commenrWrite}`}>
          <input
            onChange={setHandleComment}
            className={post.inputComment}
            type="text"
            placeholder="White a comment"
          ></input>

          <div
            className={post.row}
            onClick={() => {
              handleCreateComment();
            }}
          >     <IconButton size="small">
            <AddIcon size="small" color="disabled" />
            </IconButton>
          </div>
          <IconButton size="small">
            <SentimentSatisfiedOutlinedIcon
              onClick={handleViewEmoji}
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
      {viewEmoji && <EmojiPicker
            pickerStyle={{width: "450px"}}
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
            />}
    </>
  );
}
