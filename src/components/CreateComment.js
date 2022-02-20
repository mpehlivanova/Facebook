// import React from "react";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import myProfil from "../components-css/imgLeftBar/guest.png";
// import { makeStyles } from "@mui/styles";
// import { borderRadius, display } from "@mui/system";
// import VideocamIcon from '@mui/icons-material/Videocam';
// import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

// const cssStyle = makeStyles({
//   topComment: {
//     display: "flex",
//     height: "50%",
//     borderBottom: "1px solid #eff2f5",
//     paddingBottom: "15px",
//     padding: "15px",
//   },
//   img: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "33px",
//   },
//   input: {
//     border: "none",
//     outlineWidth: "0",
//     padding: "5px 20px",
//     margin: "0 10px",
//     borderRadius: "33px",
//     backgroundColor: "#eff2f5",
//     flex: "1",
//     height: "30px",
//   },
//   conteiner: {
//     width: "75%",
//     height: "130px",
//     display: "flex",
//     marginTop: "20px",
//     flexDirection: "column",
//     backgroundColor: "white",
//     borderRadius: "15px",
//     boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
//   },
//   bottomComment: {
//     display: "flex",
//     padding: " 0px 20px 0px 20px",
//     alignItems: "center",
//     margin: "5px",
//     height: "50%",
//     justifyContent: "space-around",
//   },
//   camera: {
//     color: "#f3425f",
//   },
//   photo: {
//     color: "#45bd62",
//   },
//   emoji: {
//     color: "#f7b928",
//   },
//   textInfo: {
//     color: "grey",
//     fontFamily: "Arial",
//     fontSize: "14px",
//     marginLeft: "5px",
//   },
//   conteiner_option: {
//     display: "flex",
//     // textAlign:"center", // да сложа *hover
//     // padding:" 0px 20px 0px 20px",
//     alignItems: "center",
//     margin: "5px",
//     cursor: "pointer",
//   },
// });

// function CreatePost() {

//     const style = cssStyle()
    

//     return (
//       <div className={style.conteiner}>
//         <div className={style.topComment}>
//           <ListItemIcon>
//             <img
//               className={style.img}
//               src={myProfil}
//               alt="icon my profil"
//             ></img>
//           </ListItemIcon>
//           <input
//             className={style.input}
//             placeholder={`Какво мислите,king ${"Julien"}`}
//           ></input>
     
//         </div>

//         <div className={style.bottomComment}>
//           <div className={style.conteiner_option}>
//             <VideoCameraFrontIcon className={style.camera} fontSize="large" />
//             <h3 className={style.textInfo}>Видео на живо</h3>
//           </div>

//           <div className={style.conteiner_option}>
//             <InsertPhotoIcon className={style.photo} fontSize="large" />
//             <h3 className={style.textInfo}>Снимка/видеоклип</h3>
//           </div>

//           <div className={style.conteiner_option}>
//             <EmojiEmotionsIcon className={style.emoji} fontSize="large" />
//             <h3 className={style.textInfo}>Чувство/Дейност</h3>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default CreatePost