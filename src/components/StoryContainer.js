import React from 'react';
import CreateStory from './CreateStory';
import StoryBox from './StoryBox';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    storyContainer: { 
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        
    }
})

export default function StoryContainer() {
    const style = useStyle();
  return (
      <div className={style.storyContainer}>
          <CreateStory />
          <StoryBox/>
    </div>
  )
}
