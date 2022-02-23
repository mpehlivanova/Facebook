// import { Stack } from "@mui/material";
// import React, { useEffect, useState } from "react";
// // import Box from '@mui/material/Box';
// import BadgeAvatars from "./Avatar.js";
// import PublicIcon from "@mui/icons-material/Public";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { grey } from "@mui/material/colors";
// import { makeStyles } from "@mui/styles";
// import { Button, ListItemIcon } from "@mui/material";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
// import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
// import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
// import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
// import IconButton from "@mui/material/IconButton";
// // import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

// export const InfiniteScroll = React.memo(() => {
//   const useStyles = makeStyles({
//     conrainerPost: {
//       width: "75%",
//       background: "white",
//       display: "flex",
//       flexDirection: "column",
//       gap: "10px",
//       boxShadow: "5px 5px 5px 5px rgb(169,169,169,0.25)",
//       borderRadius: "10px",
//       paddingBottom: "20px",
//     },
//     header: {
//       display: "flex",
//       justifyContent: "space-between",
//       height: "20px",
//       padding: "20px",
//     },
//     row: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       paddingLeft: "5px",
//       poddingLeft: "10px",
//     },
//     textSmall: {
//       fontSize: "small",
//       margin: "2px 0px 0px 5px",
//       fontFamily: "Segoe UI Historic, Helvetica, Arial",
//     },
//     textXsmall: {
//       fontSize: "x-small",
//       margin: "0px 0px 0px 5px",
//       color: "action",
//       fontFamily: "Segoe UI Historic, Helvetica, Arial",
//     },
//     textInput: {
//       fontSize: "medium",
//       fontFamily: "Segoe UI Historic, Helvetica, Arial",
//       margin: "5px 5px",
//     },
//     border: {
//       borderTop: "1px solid #cfd0d1",
//       borderBottom: "1px solid #cfd0d1",
//     },
//     buttonBox: {
//       display: "flex",
//       justifyContent: "space-around",
//       // padding: "4px",
//     },
//     addComment: {
//       width: "100%",
//       display: "flex",
//       alignItems: "center",
//       flexDirection: "row",
//       gap: "10px",
//     },
//     form: {
//       display: "flex",
//       alignItems: "center",
//       flexDirection: "row",
//       borderRadius: "20px",
//       backgroundColor: " #eff2f5",
//     },
//     input: {
//       borderRadius: "20px",
//       width: "60%",
//       height: "30px",
//       color: "action",
//       border: "none",
//       backgroundColor: " #eff2f5",
//       padding: "10px",
//       marginLeft: "5px",
//     },
//     iconContact: {
//       opacity: "0.5",
//       scale: "0.7",
//     },
//     like: {
//       width: "20px",
//       height: "20px",
//       borderRadius: "50%",
//       backgroundColor: "red",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       margin: "2px 0px",
//     },
//     likeConrainer: {
//       height: "10px",
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       paddingLeft: "5px",
//     },
//     textBox: {
//       display: "flex",
//       justifyContent: "space-between",
//       height: "20px",
//       padding: "20px",
//     },

//     inputComment: {
//       border: "none",
//       backgroundColor: " #eff2f5",
//       padding: "10px",
//       borderRadius: "20px",
//       width: "60%",
//       height: "30px",
//     },
//     commenrWrite: {
//       display: "flex",
//       width: "95%",
//       flexDirection: "row",
//       alignItems: "baseline",
//       justifyContent: "space-between",
//       // alignItems: "center",
//       backgroundColor: " #eff2f5",
//       borderRadius: "20px",
//       marginLeft: "5px",
//     },
//     img: {
//       width: "40px",
//       height: "40px",
//       borderRadius: "33px",
//     },
//   });

//   const style = useStyles();
//   const [like, isLike] = useState(false);
//   const [commentButton, isComment] = useState(false);
//   // const [comment, createComent] = useState([]);

//   const changeLikeOption = () => {
//     if (like === false) {
//       isLike(true);
//       isLike(like + 1);
//     } else {
//       isLike(like - 1);
//       isLike(false);
//     }
//   };

//   const createNewComment = () => {
//     if (commentButton === false) {
//       isComment(true);
//     } else {
//       isComment(false);
//     }
//   };

//   function uuidv4() {
//     return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
//       (
//         c ^
//         (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
//       ).toString(16)
//     );
//   }
//   const [posts, setPosts] = useState([]);
//   const [startNum, setStartNum] = useState(0);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreData = () => {
//     if (posts.length >= 30) {
//       setHasMore(false);
//       return;
//     }

//     fetch(`http://localhost:3000/posts?_page=${startNum}`)
//       .then((resp) => resp.json())
//       .then((data) => setPosts(posts.concat(data)));

//     setStartNum(startNum + 1);
//   };

//   useEffect(() => {
//     fetchMoreData();
//   }, []);

//   return (
//     <InfiniteScroll
//       dataLength={posts.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={<span>No more posts</span>}
//     >
//       <Stack>
//         {posts.map((post) => (
//           //   <Post
//           //     key={uuidv4()}
//           //     imgUser={post.avatar}
//           //     userName={post.name}
//           //     storyUser={post.story}
//           //     text={post.text}
//           //   ></Post>
//           <>
//             <div key={uuidv4()} className={style.conrainerPost}>
//               <div className={style.header}>
//                 <div className={style.row}>
//                   <ListItemIcon>
//                     <img
//                       className={style.img}
//                       src={post.avatar} //props
//                       alt="icon my profil"
//                     ></img>
//                   </ListItemIcon>
//                   <div height="8px">
//                     <p className={style.textInput}>
//                       <strong>{style.name} </strong> is width
//                       <strong>{"{friend}"}</strong> at
//                       <strong>{"{Hotel}"}</strong>
//                     </p>
//                     <p className={style.textXsmall}>
//                       15h *
//                       <PublicIcon
//                         sx={{
//                           fontSize: 12,
//                           color: grey[600],
//                           marginLeft: "2px",
//                         }}
//                       />
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <IconButton size="small">
//                     <MoreHorizIcon color="disabled" />
//                   </IconButton>
//                 </div>
//               </div>
//               <div className={style.textInput}>
//                 <p>{post.text}</p>
//               </div>
//               <div>
//                 <img
//                   className={style.border}
//                   width="100%"
//                   src={post.story}
//                   alt="user img"
//                 ></img>
//               </div>
//               <div className={style.likeConrainer}>
//                 <RecommendRoundedIcon color="primary" />
//                 <p className={style.textSmall}>{like}</p>
//               </div>

//               <div className={`${style.border} ${style.buttonBox}`}>
//                 <Button
//                   // sx={{ "&:hover": , textTransform: "none" }} //Mitko- without this row the button works appropriate
//                   color="inherit"
//                   startIcon={<ThumbUpOutlinedIcon color="disabled" />}
//                   onClick={changeLikeOption}
//                 >
//                   Like
//                 </Button>
//                 <Button
//                   // sx={{ "&:hover": { width: "40%" }, textTransform: "none" }}//Mitko- without this row the button works appropriate
//                   color="inherit"
//                   startIcon={<ModeCommentOutlinedIcon color="action" />}
//                   onClick={createNewComment}
//                 >
//                   Comment
//                 </Button>
//               </div>

//               {commentButton ? (
//                 <div>
//                   <div className={style.row}>
//                     <div>
//                       <BadgeAvatars />
//                     </div>
//                     <div className={`${style.commenrWrite}`}>
//                       <input
//                         className={style.inputComment}
//                         type="text"
//                         placeholder="White a comment"
//                       ></input>
//                       <div>
//                         <IconButton size="small">
//                           <SentimentSatisfiedOutlinedIcon
//                             className={style.iconContact}
//                           />
//                         </IconButton>
//                         <IconButton size="small">
//                           <PhotoCameraOutlinedIcon
//                             className={style.iconContact}
//                           />
//                         </IconButton>
//                         <IconButton size="small">
//                           <GifBoxOutlinedIcon className={style.iconContact} />
//                         </IconButton>
//                         <IconButton size="small">
//                           <StickyNote2OutlinedIcon
//                             className={style.iconContact}
//                           />
//                         </IconButton>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     {comments.map((element) => (
//                       <div>
//                         <div className={style.row}>
//                           <div>
//                             <BadgeAvatars />
//                           </div>
//                           <div className={`${style.commenrWrite}`}>
//                             <p>{}</p>
//                             <div>
//                               <IconButton size="small">
//                                 <SentimentSatisfiedOutlinedIcon
//                                   className={style.iconContact}
//                                 />
//                               </IconButton>
//                               <IconButton size="small">
//                                 <PhotoCameraOutlinedIcon
//                                   className={style.iconContact}
//                                 />
//                               </IconButton>
//                               <IconButton size="small">
//                                 <GifBoxOutlinedIcon
//                                   className={style.iconContact}
//                                 />
//                               </IconButton>
//                               <IconButton size="small">
//                                 <StickyNote2OutlinedIcon
//                                   className={style.iconContact}
//                                 />
//                               </IconButton>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </>
//           //add paramiter function Post
//         ))}
//       </Stack>
//     </InfiniteScroll>
//   );
// });
