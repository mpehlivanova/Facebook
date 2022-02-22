import * as React from "react";
// import Box from '@mui/material/Box';
import BadgeAvatars from "./Avatar.js";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Button, ListItemIcon } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  conrainerPost: {
    width: "75%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "5px 5px 5px 5px rgb(169,169,169,0.25)",
    borderRadius: "10px",
    paddingBottom: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textXsmall: {
    fontSize: "x-small",
    margin: "0px 0px 0px 5px",
    color: "action",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textInput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "5px 5px",
  },
  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-around",
    // padding: "4px",
  },
  addComment: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",
  },
  addedCom:{
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 3px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  input: {
    borderRadius: "10px",
    width: "60%",
    height: "20px",
    color: "action",
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "3px 10px",
    marginLeft: "5px",
    display:"flex",
    alignItems:"center"
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },
  like: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px 0px",
  },
  likeConrainer: {
    height: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
  },
  textBox: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },

  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "5px",
    borderRadius: "20px",
    width: "60%",
    height: "20px",
  },
  commenrWrite: {
    display: "flex",
    width: "95%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " #eff2f5",
    borderRadius: "20px",
    marginLeft: "5px",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "33px",
  },
});

export default function Post(props) {
  const post = useStyles();

  const [like, isLike] = useState(false);
  // const [thisPost, useThisPost] = useState(true)

  const changeLikeOption = () => {
    if (like === false) {
      isLike(true);
      isLike(like + 1);
    } else {
      isLike(like - 1);
      isLike(false);
    }
  };

  // const createNewComment = () => {
  //   if(commentButton === false){
  //     isComment(true)
  //   }
  //   else{
  //     isComment(false)
  //   }
  // }

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }


  const [createComment, setcreateComment] = useState("");

  const setHandleCreateComment = (ev) => {
    setcreateComment(ev.target.value.trim());
   
  };
  const dispatch = useDispatch();
  const commentArr = useSelector((state) => state.actionPost.addedCommented);

  const handleCreateComment = () => {
    console.log(commentArr);
    console.log("create comment");
    dispatch({ type: "CREATECOMMENT", payload: { comment: createComment } });
   

  };

  return (
    <>
      <>
        <div className={post.conrainerPost}>
          <div className={post.header}>
            <div className={post.row}>
              <ListItemIcon>
                <img
                  className={post.img}
                  src={props.imgUser} //props
                  alt="icon my profil"
                ></img>
              </ListItemIcon>
              <div height="8px">
                <p className={post.textInput}>
                  <strong>{props.userName} </strong> is width
                  <strong>{"{friend}"}</strong> at
                  <strong>{"{Hotel}"}</strong>
                </p>
                <p className={post.textXsmall}>
                  15h *
                  <PublicIcon
                    sx={{
                      fontSize: 12,
                      color: grey[600],
                      marginLeft: "2px",
                    }}
                  />
                </p>
              </div>
            </div>
            <div>
              <IconButton size="small">
                <MoreHorizIcon color="disabled" />
              </IconButton>
            </div>
          </div>
          <div className={post.textInput}>
            <p>{props.text}</p>
          </div>
          <div>
            <img
              className={post.border}
              width="100%"
              src={props.storyUser}
              alt="user img"
            ></img>
          </div>
          <div className={post.likeConrainer}>
            <FavoriteRoundedIcon sx={{ color: red[600] }} />
            <RecommendRoundedIcon color="primary" />
            <p className={post.textSmall}>{like}</p>
          </div>

          <div className={`${post.border} ${post.buttonBox}`}>
            <Button
              // sx={{ "&:hover": , textTransform: "none" }} //Mitko- without this row the button works appropriate
              color="inherit"
              startIcon={<ThumbUpOutlinedIcon color="disabled" />}
              onClick={changeLikeOption}>
              Like
            </Button>
            <Button
              // sx={{ "&:hover": { width: "40%" }, textTransform: "none" }}//Mitko- without this row the button works appropriate
              color="inherit"
              startIcon={<ModeCommentOutlinedIcon color="action" />}
              // onClick = {createNewComment}
              onClick={handleCreateComment}
            ></Button>
          </div>

          <div>
            <p className={post.textSmall}>View previouse comments</p>
              {/* need to chech  */}
            {
        
              
              commentArr.map((com) => {

              return (
                <>
                  <div key={uuidv4()}  className={post.row}>
                    <div>
                      <BadgeAvatars />
                    </div>
                    <div className={post.input}>
                      <p clasName={post.addedCom}>{com.comment}</p>
                    </div>
                    <IconButton size="small">
                      <MoreHorizIcon color="disabled" />
                    </IconButton>
                  </div>
                </>
              );
            })}
          </div>

          {/* {commentButton ? ( */}
          <div className={post.row}>
            <div>
              <BadgeAvatars />
            </div>
            <div className={`${post.commenrWrite}`}>
              <input
                onChange={setHandleCreateComment}
                className={post.inputComment}
                type="text"
                placeholder="White a comment"
              ></input>

              <div>
                <Button onClick={handleCreateComment}>add post</Button>
                <IconButton size="small">
                  <SentimentSatisfiedOutlinedIcon
                    className={post.iconContact}/>
                </IconButton>
                <IconButton size="small">
                  <PhotoCameraOutlinedIcon className={post.iconContact} />
                </IconButton>
                <IconButton size="small">
                  <GifBoxOutlinedIcon className={post.iconContact} />
                </IconButton>
                <IconButton size="small">
                  <StickyNote2OutlinedIcon className={post.iconContact} />
                </IconButton>
              </div>
            </div>
          </div>
          {/* ) : null } */}
        </div>
      </>
    </>
  );
}
