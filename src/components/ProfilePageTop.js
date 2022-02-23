import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  topWrapper: {
    // position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // height: "800px"
  },

  coverImage: {
    position: "absolute",
    height: "400px",
    width: "80%",
    objectFit: "cover",
    objectPosition: "50% 0%",
    borderRadius: "0 0 10px 10px",
    // left: "20%",
  },

  editCoverImgBtn: {
    width: "300px",
    height: "40px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5px",
    borderRadius: "10px",
    border: "none",
    position: "relative",
    top: "348px",
    left: "53%",
    fontFamily: "Segoe UI",
    cursor: "pointer",
  },

  userAvatar: {
    position: "relative",
    width: "160px",
    height: "160px",
    borderRadius: "99px",
    top: "350px",
    left: "-25%",
    border: "3px solid #a0a1a3",
    outline:"3px solid white"
  },

  userName: {
    position: "relative",
    height: "30px",
    top: "380px",
    left: "-25%",
    fontFamily: "Segoe UI",
    fontSize: "28px",
  },

  addStoryBtn: {
    height: "40px",
    width: "220px",
    position: "relative",
    top: "420px",
    left: "33%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1876f2",
    color: "white",
    border: "none",
  },
  editProfileBtn: {
    height: "40px",
    width: "220px",
    position: "relative",
    top: "420px",
    left: "33%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f2f3f5",
    border: "none",
  },

  main: {
    height: "550px",
    display: "flex",
    justifyContent: "center",
  },

  hrWrapper: {
    width: "80%",
    marginLeft: "10%",
  },

  nav: {
    width: "100%",
    display: "flex",
    gap: "30px",
    marginLeft: "11%",
  },

  link: {
    textDecoration: "none",
    color: "#a0a1a3",
    fontFamily: "Segoe UI",
    fontSize: "16px",
    fontWeight: "600",

    // marginRight: "10px",
  },
});

export default function ProfilePageTop() {
  const style = useStyle();
  const avatar = useSelector((state) => state.userData.registered[0].avatar);
  const coverPhoto = useSelector((state) => state.userData.registered[0].coverPhoto);
  const fName = useSelector((state) => state.userData.registered[0].firstName);
  const lName = useSelector((state) => state.userData.registered[0].lastName);
  const fullName = fName + " " + lName;

  return (
    <>
      <div className={style.main}>
        <div className={style.topWrapper}>
          <img
            className={style.coverImage}
            src={coverPhoto}
            alt="coverImage"
          />
          <button className={style.editCoverImgBtn}>
            <CameraAltIcon className={style.cameraLogo} />
            Редактиране на снимката на корицата
          </button>

          <img
            className={style.userAvatar}
            src={avatar}
            alt="userAvatar"
          />
          <CameraAltIcon />

          <h4 className={style.userName}>{fullName}</h4>
          <div>
            <button className={style.addStoryBtn}>
              <AddCircleIcon />
              Добавяне към историята
            </button>
            <button className={style.editProfileBtn}>
              <EditIcon />
              Редактиране на профила
            </button>
          </div>
        </div>
      </div>

      <div className={style.hrWrapper}>
        <hr />
      </div>

      <nav className={style.nav}>
        <Link className={style.link} to="/">
          Публикации
        </Link>
        <Link className={style.link} to="/">
          Информация
        </Link>
        <Link className={style.link} to="/">
          Приятели
        </Link>
        <Link className={style.link} to="/">
          Снимки
        </Link>
        <Link className={style.link} to="/">
          Видеоклипове
        </Link>
        <Link className={style.link} to="/">
          Регистрации
        </Link>
        <Link className={style.link} to="/">
          Още
        </Link>
      </nav>
    </>
  );
}
