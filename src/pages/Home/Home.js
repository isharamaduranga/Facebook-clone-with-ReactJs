import React, { Fragment } from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/Left-Pane/LeftPane'

export default function Home() {
  return (
    <Fragment>
        <NavBar/>
        <div className='Container'>
           <LeftPane/>
        </div>
       
    </Fragment>
    
  )
}
