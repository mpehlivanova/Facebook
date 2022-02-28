import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { makeStyles } from "@mui/styles";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import colorImg from "../components-css/color.PNG";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { useDispatch, useSelector } from "react-redux";
import UUidv4 from "./Util";
import { Picker } from "@material-ui/pickers";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { EmojiPeople } from "@mui/icons-material";
import Emoji from "./Emoji";
import zIndex from "@mui/material/styles/zIndex";

const cssStyle = makeStyles({


  containerPost: {
    width: "500px",
    backgroundColor: "whate",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
    borderBottom: "1px solid #cfd0d1",
    alignItems: "center",
  },
  text: {
    margin: "0px 110px",
    color: "action",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textInput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 0px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0px 10px",
    gap: "5px",
  },
  friend: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "5px",
    gap: "2px",
    backgroundColor: "#CCCCCC",
    justifyContent:"center"
  },
  postAdd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
    margin: "10px 10px",
  },
  input: {
    width: "480px",  
    border: "none",
    color: "#8A8D91",
    margin: "5px 10px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    fontSize: "large",
    outlineWidth: "0",
  },
  footer: {
    border: "1px solid #cfd0d1",
    borderRadius: "10px",
    height: "50px",
    padding: "0px 10px",
    margin: "0px 10px",
  },
  buttonPost: {
    width: "480px",
    height: "30px",
    borderRadius: "30px",
    margin: "10px 10px",
  },
  inputTextPost: {
    width: "450px",
    height: "50px",
  },
  type:{
    border: "none",
  display:'none'
    
  },
  emojiConatinerView:{
    width: "480px",
    display:"flex",
    justifyContent:"center",

  },
});

export default function NewCreatePost(props) {
  const avatar = useSelector((state) => state.userData.registered[0].avatar);
  const fName = useSelector((state) => state.userData.registered[0].firstName);
  const lName = useSelector((state) => state.userData.registered[0].lastName);
  const fullName = fName + " " + lName;

  const fileInput = React.useRef(null)

  const style = cssStyle();
  const [viewEmoji, setViewEmoji] = React.useState(false);
  const [viewPhotoPost, setviewPhotoPost] = React.useState(false);

  const handleviewPhotoPost=()=>{
    viewPhotoPost?setviewPhotoPost(false):setviewPhotoPost(true)
  }
  const handleViewEmoji=()=>{
    viewEmoji?setViewEmoji(false):setViewEmoji(true)
  }

  const onEmojiClick = (event, emojiObject) => {
    setpInputText(inputText=>inputText + emojiObject.emoji);
    setViewEmoji(false);
    console.log(inputText + emojiObject.emoji);
  };
  const [inputText, setpInputText] = React.useState("");
  const setHandleInputPost = (ev) => {
    setpInputText(ev.target.value);
  };

  const [fileImg, setFileImg] = React.useState("");
  const setHandleFildUploud = (ev) => {
    const { files } = ev.target;
    const localImgUrl = URL.createObjectURL(files[0]);
    setFileImg(localImgUrl);
  };
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.actionPost.addedPosts); //get all post from global
  const handleCreatePost = () => {
    console.log(fileImg);
    console.log("img file");
    console.log(posts);
    console.log("create post");
    if (inputText !== "") {
      dispatch({
        type: "CREATEPOST",
        payload: {
          userName: fullName,
          descripion: inputText,
          img: avatar,
          story: fileImg,
          postId: UUidv4(),
        },
      });
    }
  };

  return (
    <>
    <div className={style.containerPost} >
          <div className={style.header}>
            <h3 className={style.text}>Създаване на публикация</h3>
            <IconButton onClose={props.handleClose} sx={{ bgcolor: grey[200] }}>
              <AddIcon color="action" />
            </IconButton>
          </div>
          <div className={style.row}>
            <Avatar
              alt="user img"
              src={avatar}
              sx={{ width: 36, height: 36 }}
            />
            <div height="8px">
              <p className={style.textInput}>
                <strong>{fullName} </strong>
              </p>
              <div className={style.friend}>
                <PeopleAltIcon
                  sx={{
                    fontSize: 16,
                    color: grey[900],
                    marginLeft: "2px",
                  }}
                />
                <p className={style.textSmall}>Приятели</p>
                <ArrowDropDownIcon sx={{ width: 24, height: 24}}  />
              </div>
            </div>
          </div>
          <div>
          <div className={style.inputTextPost}>
            <input
             type="text"
             onChange={ e => setHandleInputPost(e.target.value.trim())}
              className={style.input}
              placeholder={`Какво мислите, ${fullName}?`}
            >
            </input>
        
          </div>
          <div className={style.emojiConatinerView}>
            {
            viewPhotoPost ?(<img  width="200px" src={fileImg} alt="addPhotoStory"></img>):(null)
            }
          </div>
         
         {
            viewEmoji?(     
            <EmojiPicker
            pickerStyle={{width: "480px"}}
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
            />):(null)
         }
         
          <div className={style.postAdd}>
          <img src={colorImg} alt="imgColor"></img>
            <SentimentSatisfiedAltIcon onClick={handleViewEmoji} color="action"  />
          </div>
          <div className={`${style.postAdd} ${style.footer}`}>
            <p className={style.p}>Добавете към публикацията си</p>
            <div>
             <label>
            <input 
             type='file'
              name='image'
              ref={fileInput}
              style={{ display: 'none' }}
              onChange={()=>{setHandleFildUploud()}}
            >
             </input>
             </label>
              <IconButton  size="small"   onClick={() => fileInput.current.click()}>
              <PhotoLibraryOutlinedIcon onClick={handleviewPhotoPost}  sx={{ color: green[700] }} />
              </IconButton>
              <IconButton  size="small">
                <PersonAddAltRoundedIcon     sx={{ color: blue[700] }} />
              </IconButton>
              <IconButton  size="small">
                <MoodRoundedIcon   onClick={handleViewEmoji}
                sx={{ color: yellow[700] }} />
              </IconButton>
              <IconButton size="small">
                <FmdGoodRoundedIcon sx={{ color: red[700] }} />
              </IconButton>
              <IconButton size="small">
                <MoreHorizIcon color="disabled" />
              </IconButton>
            
            </div>
          </div>
          </div>
        </div>
        <DialogActions>
          <Button
            className={style.buttonPost}
            variant="contained"
            onClose={props.handleClose}
            handleCreatePost={props.handleCreatePost}
            onClick={() => {
              handleCreatePost();
              setViewEmoji();
              setviewPhotoPost();
            }}>
            Публикация
          </Button>
        </DialogActions>
       
    </>
  );
}
