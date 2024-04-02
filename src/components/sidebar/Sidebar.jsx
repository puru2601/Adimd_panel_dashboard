import React from 'react'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, People, Inventory, Paid, Assessment, MailOutline, Feedback, ChatBubbleOutline, ManageAccounts } from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
      <div className="sidebarMenu">
       <h3 className="sidebarTitle">Dashboard</h3>
       <ul className="sidebarList">
        <li className="sidebarListItem active">
         <LineStyle className='sidebarIcon'/>
         Home
        </li>
        <li className="sidebarListItem">
         <Timeline className='sidebarIcon'/>
         Analytics
        </li>
        <li className="sidebarListItem">
         <TrendingUp className='sidebarIcon'/>
         Sales
        </li>
       </ul>
      </div>
      <div className="sidebarMenu">
       <h3 className="sidebarTitle">Quick Menu</h3>
       <ul className="sidebarList">
        <li className="sidebarListItem">
         <People className='sidebarIcon'/>
         users
        </li>
        <li className="sidebarListItem">
         <Inventory className='sidebarIcon'/>
         Products
        </li>
        <li className="sidebarListItem">
         <Paid className='sidebarIcon'/>
         Transactions
        </li>
        <li className="sidebarListItem">
         <Assessment className='sidebarIcon'/>
         Reports
        </li>
       </ul>
      </div>
      <div className="sidebarMenu">
       <h3 className="sidebarTitle">Notifications</h3>
       <ul className="sidebarList">
        <li className="sidebarListItem">
         <MailOutline className='sidebarIcon'/>
         Mail
        </li>
        <li className="sidebarListItem">
         <Feedback className='sidebarIcon'/>
         Feedback
        </li>
        <li className="sidebarListItem">
         <ChatBubbleOutline className='sidebarIcon'/>
         Messages
        </li>
       </ul>
      </div>
      <div className="sidebarMenu">
       <h3 className="sidebarTitle">Staff</h3>
       <ul className="sidebarList">
        <li className="sidebarListItem">
         <ManageAccounts className='sidebarIcon'/>
         Manage
        </li>
        <li className="sidebarListItem">
         <Timeline className='sidebarIcon'/>
         Analytics
        </li>
        <li className="sidebarListItem">
         <Assessment className='sidebarIcon'/>
         Reports
        </li>
       </ul>
      </div>
     </div>
    </div>
  )
}
