import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import Box from '@mui/material/Box';
// import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PostForInfinity from "./PostForInfinity";

export const PostsLayout = React.memo(() => {
  const [posts, setPosts] = useState([]);
  const [startNum, setStartNum] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (posts.length >= 100) {
      setHasMore(false);
      return;
    }
    //localhost:3000/posts?_page=${startNum}&_limit=5?

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${startNum}&_limit=5`
    )
      .then((resp) => resp.json())
      .then((data) => setPosts(posts.concat(data)));
    console.log(posts);

    setStartNum(startNum + 5);
  };
  fetchMoreData();

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<span>No more posts</span>}
    >
      <Stack>
        {posts.map((post) => (
          <PostForInfinity
            //   key={uuidv4()}
            //   avatar={post.avatar}
            key={post.id}
            name={post.userId}
            postText={post.body}
          ></PostForInfinity>

          //add paramiter function Post
        ))}
      </Stack>
    </InfiniteScroll>
  );
});
