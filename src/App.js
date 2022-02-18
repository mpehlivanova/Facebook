import React from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./pages/Main.js";
import {  Routes, Route } from "react-router-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Friends from "./pages/Friends";
import VideoPage from "./pages/VideoPage";
import Grups from "./pages/Grups";
import ProfilePage from './pages/ProfilePage';
import { useSelector } from "react-redux";


function App() {
  const logged = useSelector(state => state.userData.logged);
  return (

      <>
         {!logged ? (
        <Login />
      ) : (
          <>
            <Header/>
            <Routes>
              <Route path="/"  element={<Main></Main>} />
              <Route path="/user" element={<ProfilePage></ProfilePage>}/>
              <Route path="/friends" element={<Friends></Friends>} />
              <Route path="/video" element ={<VideoPage></VideoPage>}/>
              <Route path="/grup" element ={<Grups></Grups>}/>
            </Routes>
        </>
      )}
    </>
  );
}

export default App;
