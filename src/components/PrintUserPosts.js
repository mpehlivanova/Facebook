import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';
import UUidv4 from "./Util.js";

export default function PrintUserPosts() {


 const userAllPost =useSelector(state=>state.actionPost.addedPosts);
 console.log(userAllPost);
 const id = UUidv4()
 return (
    <>
      {userAllPost.map((post) => {
          return(
              
                  <Post 
                    key={id} 
                    idPost={id}
                    img={post.img} 
                    userName={post.userName} 
                    story={post.img}
                    text={post.descripion}>
                  </Post> 
              
          )



      })}
      </>

  )}
