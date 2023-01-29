import React from 'react';
import "./leftPane.css";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPane'>
     <div className="leftPainContainer">
      <div className="leftPainMenu">
        <li className="leftPainMenuItem">

          <MarkUnreadChatAltIcon className='leftPainIcons'/>
          <span className="leftMenuText">Messages</span>
        </li>

        <li className="leftPainMenuItem">
          <GroupIcon className='leftPainIcons'/>
          <span className="leftMenuText">Groups</span>
        </li>

        <li className="leftPainMenuItem">
          <RssFeedIcon className='leftPainIcons'/>
          <span className="leftMenuText">Feed</span>
        </li>

        <li className="leftPainMenuItem">
          <FlagIcon className='leftPainIcons'/>
          <span className="leftMenuText">Pages</span>
        </li>

        <li className="leftPainMenuItem">
          <CalendarMonthIcon className='leftPainIcons'/>
          <span className="leftMenuText">Events</span>
        </li>

        <li className="leftPainMenuItem">
          <BuildIcon className='leftPainIcons'/>
          <span className="leftMenuText">Settings</span>
        </li>

        <li className="leftPainMenuItem">
          <SportsEsportsIcon className='leftPainIcons'/>
          <span className="leftMenuText">Games</span>
        </li>

        <li className="leftPainMenuItem">
          <NewspaperIcon className='leftPainIcons'/>
          <span className="leftMenuText">News</span>
        </li>

        <li className="leftPainMenuItem">
          <WorkOutlineIcon className='leftPainIcons'/>
          <span className="leftMenuText">Jobs</span>
        </li>

        <li className="leftPainMenuItem">
          <AddShoppingCartIcon className='leftPainIcons'/>
          <span className="leftMenuText">Market</span>
        </li>

        <hr/>
        <div className="pagesOfwatched">
          <h3>Pages you recently viewed</h3>
        </div>

        <div className='PageList'>

        <li className="pageListItem">
          <img src="./images/dream.jpg" alt="" className="pagePic" />
          <span className="PageName">Dream world</span>
        </li>

        <li className="pageListItem">
          <img src="./images/music.jpg" alt="" className="pagePic" />
          <span className="PageName">Best Soul Music</span>
        </li>

        <li className="pageListItem">
          <img src="./images/food.jpg" alt="" className="pagePic" />
          <span className="PageName">Asian Spicy foods</span>
        </li>

        <li className="pageListItem">
          <img src="./images/hiking-adventure.jpg" alt="" className="pagePic" />
          <span className="PageName">Hiking Adventure</span>
        </li>

        <li className="pageListItem">
          <img src="./images/nature_life.jpg" alt="" className="pagePic" />
          <span className="PageName">Nature life</span>
        </li>

        <li className="pageListItem">
          <img src="./images/sport-world.jpg" alt="" className="pagePic" />
          <span className="PageName">Sports world</span>
        </li>

        <li className="pageListItem">
          <img src="./images/landscape-paradise.jpg" alt="" className="pagePic" />
          <span className="PageName">Landscapes Paradise</span>
        </li>


        </div>

        



      </div>
     </div>
      </div>
  )
}
