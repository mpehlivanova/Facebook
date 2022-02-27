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


const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "row",
    padding: "46px 0px 0px 0px",
  },
  leftDiv: {
    width: "70%",
    height: "94vh",
    backgroundColor: "rgb(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
  },
  rightDiv: {
    width: "30%",
    height: "94vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  img: {
    width: "65%",
    height: "94vh",
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

export default function ViewPostPage() {

  const avatar = useSelector((state) => state.userData.registered[0].avatar);
  const fName = useSelector((state) => state.userData.registered[0].firstName);
  const lName = useSelector((state) => state.userData.registered[0].lastName);
  const fullName = fName + " " + lName;


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
  const handleViewLiked = () => {
    liked ? viewLiked(false) : viewLiked(true);
  };
  const [commentList, viewCommentList] = useState(false);
  const handleViewCommentList = () => {
    commentList ? viewCommentList(false) : viewCommentList(true);
  };

  const allCommentList = useSelector(
    (state) => state.actionPost.addedCommented
  );

  return (
    <>
      <div className={viewPost.container}>
        <div className={viewPost.leftDiv}>
          <img
            className={viewPost.img}
            src={"https://i.pinimg.com/736x/88/73/26/88732696e902cd550f8c63a048d8e003.jpg"}
            alt="user post"
          ></img>
        </div>
        <div className={viewPost.rightDiv}>
          <div className={viewPost.right}>
            <RightButton />
          </div>

          <PostHeader
            userName="Ivan"
            imgUser={avatar}
          />

          {/* //Button  */}
          <div className={viewPost.likeConrainer}>
            <div>
              {/* <FavoriteRoundedIcon sx={{ color: red[600] }} /> */}
              {liked ? (
                <div>
                  <RecommendRoundedIcon color="primary" />
                  <p className={viewPost.textSmall}>{like}</p>
                </div>
              ) : null}
            </div>

            <p className={viewPost.textSmall}>1 commentar</p>
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
            // onClick={handleViewCommentList}
            >
              <ButtonPost
                name="Comment"
                icon={<ModeCommentOutlinedIcon sx={{ mr: 1 }} color="action" />}
              ></ButtonPost>
            </div>
          </div>

          {/* //Comments  */}
          <div>
            <p

              className={`${viewPost.textSmall} ${viewPost.hover}`}
            >
              View previouse comments
            </p>
            {commentList
              ? allCommentList.map((com) => {
                  return <CommentList />;
                })
              : null}
          </div>
          <CreateComment/>
        </div>
      </div>
    </>
  );
}
