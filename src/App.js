
import React from "react";
import Header from "./components/Header";
import Login from './components/Login';
import Main from "./components/Main.js"
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";


function App() {
  const user = 1;
  return (
    <>
      <div className="app">
        {!user ? (
          <>
            <Login/>
          </>
        ) : (
          <div>
            <Header />
            <div className="app__body">

            <Main/>
            </div>
          </div>
        )}
      </div>
    </>
  );}

export default App;



    


