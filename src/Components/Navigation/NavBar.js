import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
  return (
    <div className="navBarBox">

        <div className="navBarLeft">
            <span className="logo"> facebook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBox">
                <SearchIcon className='schIcon'/>
                <input placeholder='Search for your fiends' className="schInput" />
            </div>
        </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navLink">HomePage</span>
                <span className="navLink">Profile</span>
            </div>
            <div className="navBarIcons">

            <div className="navIcon">
            <PersonIcon/>
            <span className="iconTag">8</span>
            </div>

            <div className="navIcon">
            <MailIcon/>
            <span className="iconTag">5</span>
            </div>

            <div className="navIcon">
            <SettingsIcon/>
            <span className="iconTag">2</span>
            </div>

            </div>
            <div className="pic">
                <img src="/images/ishara.jpg" alt="" className="profilePicImg" />
            </div>
        </div>

      

    </div>
  )
}
