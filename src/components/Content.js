import React from 'react'
import  videoBg from '../assests/Backgroundgif.mp4'


function Content() {
  return (
    <div>
        <video src={videoBg} autoPlay loop muted className='photo'/>
        <p className='para'>Hello, I am full stack webdeveloper pursuing Engineering from East point college of engineering and technology with career interests in tech,Skill-development.</p>
    </div>
  )
}

export default Content