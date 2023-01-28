import React from 'react'
import "./display_post.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import StyleIcon from '@mui/icons-material/Style';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Display_Post() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/abc.jpg" alt="" className="addPostPic" />
                <input placeholder='Whats in your mind..? ' className="addpostInput" />
            </div>
            <hr  className='hrLine'/>
            <div className="addPostBottom">
              <div className="addPostOptions">


                <div className="addPostOption">
                <InsertPhotoIcon className='addPhoto'/>
                <span className="addPostOptionText">Add Image/Video</span>
                </div>

                <div className="addPostOption">
                <AddLocationAltIcon className='addPhoto'/>
                <span className="addPostOptionText">Add Location</span>
                </div>

                <div className="addPostOption">
                <StyleIcon className='addPhoto'/>
                <span className="addPostOptionText">Add Tag</span>
                </div>

                <div className="addPostOption">
                <LiveTvIcon className='addPhoto'/>
                <span className="addPostOptionText">Go live</span>
                </div>


              </div>

            </div>
        </div>
    </div>
  )
}
