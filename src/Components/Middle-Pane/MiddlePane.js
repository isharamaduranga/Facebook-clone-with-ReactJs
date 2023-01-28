import React from 'react';
import Display_Post from '../Display_Post/Display_Post';
import Post from '../Post/Post';
import "./middlePane.css";

export default function MiddlePane() {
  return (
    <div className='middlePane'>
    <Display_Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    
    </div>

  )
}
