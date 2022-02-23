import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';

export default function MyPost() {

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }

 const myAllPost =useSelector(state=>state.actionPost.addedPosts);

 return (
    <>
      {myAllPost.map((post) => {
          return(
              
                  <Post 
                  key={uuidv4()} 
                  text={post.text}>
                  </Post> 
              
          )



      })}
      </>

  )}
