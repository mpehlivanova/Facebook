import React from "react";
import { makeStyles } from "@mui/styles";
import ProfilePageLeftSideField from "./ProfilePageLeftSideField";
import ProfilePageLeftSideFormDialog from "./ProfilePageLeftSideFormDialog";
import Biography from './Biography';
import { useSelector } from 'react-redux';


const useStyle = makeStyles({
  mainWrapper: {
    fontSize: "12px",
    marginTop: "16px",
    marginLeft: "10%",
    height: "320px",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    fontFamily: "Segoe UI",
    textTransform: "uppercase",
  },
  mainText: {
    marginLeft: "-61%",
    fontSize: "22px",
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: "12px                          ",
  },
  biography: {
    marginTop: "-15px",
    width: "400px",
    textAlign: "center",
    fontFamilies: "Helvetica"
    
  }
});

export default function ProfilePageLeftSide() {
  const style = useStyle();

  const biography = useSelector((state) => state.profile.biography.text);
  console.log(biography);

  // const [biographyText, setBiographyText] = React.useState("");

  // const setHandleInputBiography = (ev) => {
  //   setBiographyText(ev.target.value.trim());
  // };


  
  return (
    <div className={style.mainWrapper}>
      <p className={style.mainText}>Въведение</p>
      {/* <Biography/> */}
      <p className={style.biography}> {biography}</p>
      {/* <ProfilePageLeftSideField
        key="1"
        onClick={() => console.log("click")}
        name="Добавяне на биография"
      /> */}
      <ProfilePageLeftSideFormDialog />
      <ProfilePageLeftSideField
        className={style.secondaryText}
        key="2"
        name="Редактиране на подробностите"
      />
      <ProfilePageLeftSideField
        className={style.secondaryText}
        key="3"
        name="Добавяне на хобита"
      />
      <ProfilePageLeftSideField
        className={style.secondaryText}
        key="4"
        name="Добавяне на препоръчано съдържание"
      />
    </div>
  );
}
