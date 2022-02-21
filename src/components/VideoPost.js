import * as React from "react";
// import Box from '@mui/material/Box';
import BadgeAvatars from "./Avatar.js";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import UserDisny from "./userDisny.js";
import { Player } from 'video-react';
import { IFrame } from "./IFrame.js";


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
    poddingLeft:"10px",
 
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
    margin:"5px 5px",
  
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
    width:"100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",
  },
  form: {
    
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  input: {
    borderRadius: "20px",
    width: "60%",
    height: "30px",
    color:"action",
    border: "none",
    backgroundColor: " #eff2f5",
    padding:"10px",
    marginLeft:"5px"
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
  textBox:{
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },


  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding:"10px",
    borderRadius:"20px",
    width: "60%",
    height: "30px",
 
  },
  commenrWrite:{

    display: "flex",
    width:"95%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " #eff2f5",
    borderRadius:"20px",
    marginLeft:"5px"

  },
  IFrame:{
      width:"100%",

  }
  
 
});

export default function VideoPost() {
  const post = useStyles();

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  return (
    <>
      {UserDisny.map((user,i) => {
        return (
          <>
            <div key={uuidv4()} className={post.conrainerPost}>
              <div className={post.header}>
                <div className={post.row}>
                  <BadgeAvatars />
                  <div height="8px">
                    <p className={post.textInput}>
                      <strong>{user.name} </strong>
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
              
              <div>
             <IFrame className={post.IFrame}/>
              </div>
              <div className={post.likeConrainer}>
                <div className={post.like}>
                  <FavoriteRoundedIcon
                    sx={{ width: 15, height: 15, color: grey["A100"] }}
                  />
                </div>
                <RecommendRoundedIcon color="primary" />
                <p className={post.textSmall}>10</p>
              </div>

              <div className={`${post.border} ${post.buttonBox}`}>
                <Button
                  // sx={{ "&:hover": , textTransform: "none" }} //Mitko- without this row the button works appropriate
                  color="inherit"
                  startIcon={<ThumbUpOutlinedIcon color="action" />}
                >
                  Like
                </Button>
                <Button
                  // sx={{ "&:hover": { width: "40%" }, textTransform: "none" }}//Mitko- without this row the button works appropriate
                  color="inherit"
                  startIcon={<ModeCommentOutlinedIcon color="action" />}
                >
                  Comment
                </Button>
              </div>

            

              <div className={post.row}>
                <div>
                  <BadgeAvatars />
                </div>
                <div className={`${post.commenrWrite}`}>
                  <input
                    className={post.inputComment}
                    type="text"
                    placeholder="White a comment"
                  ></input>

                  <div>
                    <IconButton size="small">
                      <SentimentSatisfiedOutlinedIcon
                        className={post.iconContact}
                      />
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
      })}
    </>
  );
}