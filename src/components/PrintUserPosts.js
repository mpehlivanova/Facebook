import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';
import UUidv4 from "./Util.js";

export default function PrintUserPosts() {

  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const logUserEmail = useSelector((state) => state.userData.currLogged[0].logIdUse);
const allPost =useSelector(state=>state.actionPost.addedPosts);
 const userLogPost =allPost.filter(u=>u.logIdUse === logUserEmail)
 console.log(userLogPost);
 console.log("userLogPost");
 const id = UUidv4()
 return (
    <>
      {userLogPost.map((post) => {
          return(
              
                  <Post 
                    userName={post.userName}
                    text={post.descripion}
                    img={avatar} 
                    storyImg={post.story}
                    id={post.postId}
                    key={id} 
                  ></Post> 
              
          )



      })
      }
      </>

  )}

