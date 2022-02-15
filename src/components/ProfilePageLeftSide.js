import React from 'react'
import { makeStyles } from "@mui/styles";
import ProfilePageLeftSideFields from './ProfilePageLeftSideFields';

const useStyle = makeStyles({
  mainWrapper: {
    marginTop: "16px",
    marginLeft: "10%",
    height: "286px",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    fontFamily: "Segoe UI",
  },
  mainText: {
    marginLeft: "-61%",
    fontSize: "22px",
    fontWeight: "bold",
  },
});


export default function ProfilePageLeftSide() {
    const style = useStyle();
  return (
      <div className={style.mainWrapper}>
          <p className={style.mainText}>Въведение</p>
          <ProfilePageLeftSideFields name="Добавяне на биография"/>
          <ProfilePageLeftSideFields name="Редактиране на подробностите"/>
          <ProfilePageLeftSideFields name="Добавяне на хобита"/>
          <ProfilePageLeftSideFields name="Добавяне на препоръчано съдържание"/>
          
    </div>
  )
}
