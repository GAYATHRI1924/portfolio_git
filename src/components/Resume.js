import React from 'react'
import resumefile from'../assests/GayathriMresume.pdf'

const Resume =() =>{
  return (
    <div>
        <iframe src={resumefile} className='resume' frameborder="0"></iframe>
    </div>
  )
}

export default Resume