import * as React from "react";
import Post from "./Post.js";
import users from "../server/users";
// import UUidv4 from "./Util.js";
export default function PrintAllPosts(props) {

   

  
    return (
      <>
        {/* {users.map((u) => {
            return(
              <>
                  <Post 
                    id={u.postId}
                    img={`${u.image}`} 
                    userName={u.name} 
                    storyImg={u.image}
                    text={u.company.catchPhrase}
                    key={u.postId}
                    >
                  </Post> 
               
                </>
            )
        })} */}
        </>
    )
}