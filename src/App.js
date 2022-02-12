import React from "react";
import Header from "./components/Header";
import Login from './components/Login';
import LeftSidebar from './components/LeftSidebar';
// import RightSidebar from './components/RightSidebar';
// import NewsFeed from './components/NewsFeed';

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
              <LeftSidebar />
              {/* <NewsFeed /> */}
              {/* <RightSidebar /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );}

export default App;



    


