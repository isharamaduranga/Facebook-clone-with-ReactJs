import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">


          <div className="postTop">
              <img src="/images/postone.jpg" alt="" className="postImage" />
              <span className="postUserName">Ishara Maduranga</span>
              <span className='postTime'>10 mins ago...</span>
          </div>

          <div className="postCenter">

          </div>

          <div className="postBottom">

          </div>


        </div>

    </div>
  )
}
