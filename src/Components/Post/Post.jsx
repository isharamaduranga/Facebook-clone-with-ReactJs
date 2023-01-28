import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">


          <div className="postTop">
              <img src="/images/my.jpg" alt="" className="postImage" />
              <span className="postUserName">Ishara Maduranga</span>
              <span className='postTime'>10 mins ago...</span>
          </div>

          <div className="postCenter">
            <div className="postCaption">
            Working Together for best output 😍😍😍 ...
            </div>
            <img src="/images/postone.jpg" alt="" className="postedImage" />

          </div>

          <div className="postBottom">

          </div>


        </div>

    </div>
  )
}
