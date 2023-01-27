import React, { Fragment } from 'react';
import './home.css'
import NavBar from '../../Components/Navigation/NavBar';
import LeftPane from '../../Components/Left-Pane/LeftPane';
import MiddlePane from '../../Components/Middle-Pane/MiddlePane';
import RightPane from '../../Components/Right-Pane/RightPane';

export default function Home() {
  return (
    <Fragment>
        <NavBar/>
        <div className='mainContainer'>
           <LeftPane/>
           <MiddlePane/>
           <RightPane/>
        </div>
       
    </Fragment>
    
  )
}
