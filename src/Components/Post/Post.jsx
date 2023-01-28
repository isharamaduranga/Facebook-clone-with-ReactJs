import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>

        <div className="postContainer">

          <div className="postTop">
            <div className="postTopLeft">
              <img src="/images/my.jpg" alt="" className="postImage" />
              <span className="postUserName">Ishara Maduranga</span>
              <span className='postTime'>10 mins ago...</span>
            </div>
          </div>

          <div className="postCenter">
            <div className="postCaption">
            Working Together for best output 😍😍😍 ...
            </div>
            <img src="/images/postone.jpg" alt="" className="postedImage" />

          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/images/fb_png/like.png" alt="" className="reactionPic" />
              <img src="/images/fb_png/love.png" alt="" className="reactionPic" />
              <img src="/images/fb_png/haha.png" alt="" className="reactionPic" />
              <span className="likeCount">Sachith Mihikalpa and 125 others.</span>
            </div>
            <div className="postBottomRight">
              <span className="commentCount">
              75 Comments ...
              </span>
             
            </div>
          </div>
        </div>
        <br/>
    </div>
  )
}
