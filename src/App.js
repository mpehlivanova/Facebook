
import React from "react";
import Header from "./components/Header";
import Login from './components/Login';
import Main from "./components/Main.js"


function App() {
  const user = null;
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



    


