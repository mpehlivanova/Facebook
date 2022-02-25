import * as React from "react";
import BadgeAvatars from "./Avatar.js";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Button, Link, ListItemIcon } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PeopleIcon from "@mui/icons-material/People";
import UUidv4 from "./Util.js";
import Login from "../pages/Login.js";
import AddIcon from "@mui/icons-material/Add";
// import { type } from "@testing-library/user-event/dist/type";

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
  addedCom: {
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
    display: "flex",
    alignItems: "center",
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
    alignItems: "center",
    padding: "0px 5px",
    justifyContent: "space-between",
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

  link: {
    textDecoration: "none",
    color: "#2c2d2d",
  },
  imgPost: {
    width: "100%",
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
    cursor: "pointer",
  },
  hover: {
    cursor: "pointer",
  },

  colorText: {
    color: "#2e81f4",
  },
});

export default function Post(props) {
  const post = useStyles();
  const avatar = useSelector((state) => state.userData.registered[0].avatar);
  const [like, isLike] = useState(false);
  const [liked, viewLiked] = useState(false);
  const [createComment, setCreateComment] = useState("");
  const [commentList, viewCommentList] = useState(false);
  const [newComment, addNewComment] = useState("");
  

  const changeLikeOption = () => {
    if (like === false) {
      isLike(true);
      isLike(like + 1);
    } else {
      isLike(like - 1);
      isLike(false);
    }
  };

  const handleViewLiked = () => {
    liked ? 
    viewLiked(false) : 
    viewLiked(true);
  };

  const handleViewCommentList = () => {
    commentList ? 
    viewCommentList(false) : 
    viewCommentList(true);
  };

  const setHandleCreateComment = (ev) => {
    setCreateComment(ev.target.value.trim());
  };

  const handleAddNewComment=()=>{
    addNewComment("");
  }
  const dispatch = useDispatch();
  const allPosts = useSelector((state) =>
    state.actionPost.addedPosts.map((p) => {
      <Link to={"/view/" + p.postId}>{p.story}</Link>;
    })
  );

  const allPostsComment = useSelector((state) => state.actionPost.addedComment);
  const onePostComment = allPostsComment.filter(
    (com) => com.postId === props.id
  );

  const handleCreateComment = () => {
    // console.log(createComment);
    // console.log(allPostsComment);
    console.log(onePostComment);
    console.log("create comment");
    console.log(allPosts);
    console.log(" allPosts");
    if (createComment.length !== 0) {
      dispatch({
        type: "CREATECOMMENT",
        payload: {
          comment: createComment,
          idcomment: UUidv4(),
          postId: props.id,
        },
      });
      
    }
  };

  return (
    <>
      <div className={post.conrainerPost}>
        <div className={post.header}>
          <div className={post.row}>
            <ListItemIcon>
              <img
                className={post.img}
                src={props.img}
                alt="icon my profil"
              ></img>
            </ListItemIcon>
            <div height="8px">
              <p className={post.textInput}>
                <strong>{props.userName} </strong>
              </p>
              <p className={post.textXsmall}>
                15h *
                <PeopleIcon
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
          <Link className={post.link} to={"/view/" + post.id}>
            <img
              className={post.imgPost}
              src={props.storyImg}
              alt="user img"
            ></img>
          </Link>
        </div>

        <div className={post.likeConrainer}>
          <div className={post.likeConrainer}>
            {liked ? (
              <>
                <RecommendRoundedIcon color="primary" />
                <p className={post.textSmall}>{like}</p> 
              </>
            ) : null}
          </div>

          <p className={post.textSmall}>{onePostComment.length} commentar</p>
        </div>

        <div className={`${post.border} ${post.buttonBox}`}>
          <Button
            onClick={() => {
              changeLikeOption();
              handleViewLiked();
            }}
            sx={{ textTransform: "none" }}
            color="inherit"
            startIcon={<ThumbUpOutlinedIcon color="disabled" />}
          >
            Like
          </Button>
          <Button
            onClick={handleViewCommentList}
            sx={{ textTransform: "none" }}
            color="inherit"
            startIcon={<ModeCommentOutlinedIcon color="action" />}
          >
            Comment
          </Button>
        </div>

        <div>
          <p
            onClick={handleViewCommentList}
            className={`${post.textSmall} ${post.hover}`}>
            Преглед на предишните коментари
          </p>

          {commentList
            ? onePostComment.map((com) => {
                return (
                  <>
                    <div key={com.commentId} className={post.row}>
                      <div>
                        <BadgeAvatars img={avatar} />
                      </div>
                      <div className={post.input}>
                        <p className={post.addedCom}>{com.comment}</p>
                      </div>
                      <IconButton size="small">
                        <MoreHorizIcon color="disabled" />
                      </IconButton>
                    </div>
                  </>
                );
              })
            : null}
        </div>
        <div className={post.row}>
          <div>
            <BadgeAvatars img={avatar} />
          </div>
          <div className={`${post.commenrWrite}`}>
            <input
              onChange={setHandleCreateComment}
              className={post.inputComment}
              type="text"
              placeholder="White a comment"
              // value=""
            ></input>

            <div>
              <Button
                onClick={() => {
                  handleCreateComment();
                  viewCommentList(true);
                  handleAddNewComment();
                  console.log(onePostComment);
                  console.log("added Comment");
                }}
                sx={{ textTransform: "none",
                }}
              >
                <AddIcon color="disabled" />
              </Button>
              <IconButton size="small">
                <SentimentSatisfiedOutlinedIcon className={post.iconContact} />
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
      </div>
    </>
  );
}
