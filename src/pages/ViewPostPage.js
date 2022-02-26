import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-rainbow-components";
import RightButton from "../components/header/RightButton";
import ButtonPost from "../components/Post/ButtonPost";
import PostHeader from "../components/Post/PostHeader";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { grey } from "@mui/material/colors";
import CommentList from "../components/Post/CommentList";
import { useSelector } from "react-redux";
import CreateComment from "../components/Post/CreateComment";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    // padding: "46px 0px 0px 0px",
  },
  leftDiv: {
    width: "70%",
    // height: "100vh",
    backgroundColor: "rgb(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
  },
  rightDiv: {
    width: "30%",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  img: {
    width: "65%",
    // height: "100vh",
  },
  right: {
    display: "flex",
    justifyContent: "right",
    borderBottom: "1px solid #cfd0d1",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid #cfd0d1",
    borderTop: "1px solid #cfd0d1",
  },
  iconButton: {
    color: "action",
    marginLeft: "2px",
  },

  likeConrainer: {
    height: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
    justifyContent: "space-between",
  },
  hover: {
    cursor: "pointer",
  },
});

export default function ViewPostPage(props) {
  const avatar = useSelector((state) => state.userData.registered[0].avatar);
  const fName = useSelector((state) => state.userData.registered[0].firstName);
  const lName = useSelector((state) => state.userData.registered[0].lastName);
  const fullName = fName + " " + lName;

  const post = useSelector((state) => state.userData.addedPosts);

  const viewPost = useStyle();
  const [like, isLike] = useState(false);
  const [liked, viewLiked] = useState(false);

  const changeLikeOption = () => {
    if (like === false) {
      isLike(true);
      isLike(like + 1);
    } else {
      isLike(like - 1);
      isLike(false);
    }
  };
  
  const allPostsComment = useSelector((state) => state.actionPost.addedComment);
  const onePostComment = allPostsComment.filter(
    (com) => com.postId === props.id
  );
  const [numberComment, setNumbetCommentt] = useState("");

  const handleAddNewComment = () => {
    setNumbetCommentt(onePostComment.length+"коментари");
  };


  const handleViewLiked = (props) => {
    liked ? viewLiked(false) : viewLiked(true);
  };
  const [commentList, viewCommentList] = useState(true);
  const handleViewCommentList = () => {
    commentList ? viewCommentList(false) : viewCommentList(true);
  };



  return (
    <>
      <div className={viewPost.container}>
        <div className={viewPost.leftDiv}>
            <CloseIcon
            onClick={props.handleClose}
            sx={{
              fontSize: 24,
              color: grey[200],
              margin: "5px 10px",
            }}
          />
          <img className={viewPost.img} src={props.img} alt="user post"></img>
        </div>
        <div className={viewPost.rightDiv}>
          <div className={viewPost.right}>
            <RightButton />
          </div>
          <PostHeader userName="Ivan" imgUser={props.avatar} />
          <div className={viewPost.likeConrainer}>
            <div>
              {liked ? (
                <div className={viewPost.likeConrainer}>
                  <RecommendRoundedIcon color="primary" />
                  <p className={viewPost.textSmall}>{like}</p>
                </div>
              ) : null}
            </div>
            {
            commentList  ? (
                <p 
                onChange={handleAddNewComment} 
                className={viewPost.textSmall}>{ onePostComment.length} коментар</p>
              ):(null)

            }
           
          </div>
          <div className={viewPost.buttonBox}>
            <div
              onClick={() => {
                changeLikeOption();
                handleViewLiked();
              }}
            >
              <ButtonPost
                name="Like"
                icon={<ThumbUpOutlinedIcon sx={{ mr: 1 }} color="action" />}
              ></ButtonPost>
            </div>
            <div
            onClick={handleViewCommentList}>
              <ButtonPost
                name="Comment"
                icon={<ModeCommentOutlinedIcon sx={{ mr: 1 }} color="action" />}
              ></ButtonPost>
            </div>
          </div>

          <div>
            <p 
            onClick={handleViewCommentList}
            className={`${viewPost.textSmall} ${viewPost.hover}`}>
              View previouse comments
            </p>
          {
            commentList?(
              onePostComment.map(com=>{
              return(
                <>
                <CommentList
                text={com.comment}
                 /> 
                </>

              )
            })
            ):(null)
            

          }
          <CreateComment/>
          </div>
         
        </div>
      </div>
    </>
  );
}
