import Header from "./components/Header";
import Login from './components/Login';
import LeftSidebar from './components/LeftSideBar';
import RightSidebar from './components/RightSideBar';
import NewsFeed from './components/NewsFeed';

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <LeftSidebar />
            <NewsFeed />
            <RightSidebar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
