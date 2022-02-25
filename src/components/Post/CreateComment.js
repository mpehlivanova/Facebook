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

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
  },

  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },

  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "5px",
    borderRadius: "0px",
    width: "60%",
    height: "20px",
    "&focus": { border: "none" },
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
  const [createComment, setCreateComment] = useState("");
  const setHandleCreateComment = (ev) => {
    setCreateComment(ev.target.value.trim());
    // console.log(createComment);
  };

  // const cleanInput = () => {
  //   setCreateComment("");
  // }
  const dispatch = useDispatch();
  const allPost = useSelector((state) =>
    state.actionPost.addedPosts.map((el) => el.addedCommented)
  );

  const handleCreateComment = () => {
    console.log(allPost);
    console.log("create comment");

    dispatch({
      type: "CREATECOMMENT",
      payload: {
        addedCommented: {
          comment: createComment,
          idComment: { UUidv4 },
        },
      },
    });
    setCreateComment("")
  };

  return (
    <>
      <div className={post.row}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={post.commenrWrite}>
          <input
            onChange={setHandleCreateComment}
            className={post.inputComment}
            value={createComment}
            type="text"
            placeholder="White a comment"
          ></input>

          <div className={post.row}>
            <div onClick={() => {
              handleCreateComment()
              // cleanInput()
            }}>
              <ButtonPost name="add"></ButtonPost>
            </div>
            <IconButton size="small">
              <SentimentSatisfiedOutlinedIcon className={post.iconContact} />
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
    </>
  );
}
