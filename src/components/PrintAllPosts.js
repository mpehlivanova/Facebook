import * as React from "react";
import UserDisny from "./Json/userDisny.js";
import Post from "./Post.js";
import UUidv4 from "./Util.js";
import Users from "./Json/Users";


export default function PrintAllPosts(props) {
    // const dispatch = useDispatch();
   
  const id =UUidv4()
   
  
    return (
      <>
        {/* {UserDisny.map((user) => {
            return(
              <>
           
                    <Post 
                    key={id} 
                    imgUser={`${user.avatar}`} 
                    userName={user.name} 
                    storyUser={user.story}
                    text={user.text}>
                    </Post> 
               
                </>
            )
        })} */}
        {Users.map((user) => {
            return(
              <>
                  <Post 
                    key={id} 
                    img={`${user.image}`} 
                    userName={user.name} 
                    story={user.image}
                    text={user.phone}>
                  </Post> 
               
                </>
            )
        })}
        </>
    )
}