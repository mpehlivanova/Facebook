import React from "react";
import { makeStyles } from "@mui/styles";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieIcon from '@mui/icons-material/Movie';
import { Avatar } from "@mui/material";
// import Post from "../components/Post";
import VideoPost from "../components/VideoPost";


const useStyle = makeStyles({
    container: {
        marginTop: "50px",
        backgroundColor: "#F2F3F5",
        width: "100%",
        height: "100vh",
        display: "flex",

    },
    leftBarVideo: {
        width: "25%",

        backgroundColor: "white"
    },
    centurBarVideo: {
        width: "50%",

    },
    option: {
        display: "flex",
        marginLeft: "10px",
        textAlign: "center",
        alignItems: "center",
        gap: "25px",
        marginTop:"15px"
    },
    textInfo: {
        color: "black",
        fontFamily: "Arial",
        fontSize: "16px",
        marginLeft: "5px",
      },
    iconStyle:{
        color:"black"
    }  





})


export default function Video() {
    const style = useStyle();
    return (
        <div className={style.container}>

            <div className={style.leftBarVideo}>
                <h3>Watch</h3>

                <div className="topLeftBar">

                    <div className={style.option}>
                        <OndemandVideoIcon className={style.iconStyle} fontSize="large"/>
                        <h2 className={style.textInfo}>Начало</h2>
                    </div>

                    <div className={style.option}>
                        <VideocamIcon className={style.iconStyle} fontSize="large"/>
                        <h2 className={style.textInfo}>На живо</h2>
                    </div>
                    <div className={style.option}>
                        <MovieIcon className={style.iconStyle} fontSize="large"/>
                        <h2 className={style.textInfo}>Шоута</h2>
                    </div>

                </div>
                <hr/>
                <div className="bottomLeftBar">
                    <h3>Вашият списък за гледане</h3>
                    <div className={style.option}>
                        <Avatar />
                        <h3 className={style.textInfo}>Група 1</h3>
                    </div>
                    <div className={style.option}>
                        <Avatar />
                        <h3 className={style.textInfo}>Група 2</h3>
                    </div>
                    <div className={style.option}>
                        <Avatar />
                        <h3 className={style.textInfo}>Група 3</h3>
                    </div>
                    <div className={style.option}>
                        <Avatar />
                        <h3 className={style.textInfo}>Група 4</h3>
                    </div>
                    <div className={style.option}>
                        <Avatar />
                        <h3 className={style.textInfo}>Група 5</h3>
                    </div>
                </div>
            </div>


            <div className={style.centurBarVideo}>
            
            <VideoPost/>
            </div>
        </div>
    )
}
