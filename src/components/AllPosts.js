import * as React from "react";
import UserDisny from "./userDisny.js";
import Post from "./Post.js";
// import { AutofpsSelectRounded } from "@mui/icons-material";


export default function AllPosts(props) {
   
  
    function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    }
  
    return (
      <>
        {UserDisny.map((user, i) => {
            return(
                
                    <Post 
                    key={uuidv4()} 
                    imgUser={`${user.avatar}`} 
                    userName={user.name} 
                    storyUser={user.story}>
                    </Post> //add paramiter function Post
                
            )



        })}
        </>
    )
}