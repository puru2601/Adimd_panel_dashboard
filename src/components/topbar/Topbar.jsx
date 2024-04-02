import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className='topbar'>
     <div className="topbarWrapper">
     <div className="topLeft">
      <span className="logo">Admin</span>
     </div>
     <div className="topRight">
      <div className="topbarIconContainer">
      <NotificationsNone/>
      <span className="topIconBag">2</span>
      </div>
      <div className="topbarIconContainer">
      <Language/>
      <span className="topIconBag">2</span>
      </div>
      <div className="topbarIconContainer">
      <Settings/>
      </div>
      <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"  className="topAvatar" alt="" />
     </div>
     </div>
    </div>
  )
}
