import './widgedSm.css'
import {Visibility} from '@mui/icons-material';

export default function WidgedSm() {
  return (
    <div className='widgedsm'>
     <span className="widgedsmTitle">New Join Members</span>
     <ul className="widgetsmList">
      <li className="widgetsmListItem">
       <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedsmImg" />
       <div className="widgedsmUser">
        <span className="widgedsmUsername">Anna Keller</span>
        <span className="widgedsmUserTitle">Software Engineer</span>
       </div>
       <button className="widgedsmButton">
       <Visibility className="widgedsmIcon"/>
       Display
       </button>
      </li>
      <li className="widgetsmListItem">
       <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedsmImg" />
       <div className="widgedsmUser">
        <span className="widgedsmUsername">Anna Keller</span>
        <span className="widgedsmUserTitle">Software Engineer</span>
       </div>
       <button className="widgedsmButton">
       <Visibility className="widgedsmIcon"/>
       Display
       </button>
      </li>
      <li className="widgetsmListItem">
       <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedsmImg" />
       <div className="widgedsmUser">
        <span className="widgedsmUsername">Anna Keller</span>
        <span className="widgedsmUserTitle">Software Engineer</span>
       </div>
       <button className="widgedsmButton">
       <Visibility className="widgedsmIcon"/>
       Display
       </button>
      </li>
      <li className="widgetsmListItem">
       <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedsmImg" />
       <div className="widgedsmUser">
        <span className="widgedsmUsername">Anna Keller</span>
        <span className="widgedsmUserTitle">Software Engineer</span>
       </div>
       <button className="widgedsmButton">
       <Visibility className="widgedsmIcon"/>
       Display
       </button>
      </li>
      <li className="widgetsmListItem">
       <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedsmImg" />
       <div className="widgedsmUser">
        <span className="widgedsmUsername">Anna Keller</span>
        <span className="widgedsmUserTitle">Software Engineer</span>
       </div>
       <button className="widgedsmButton">
       <Visibility className="widgedsmIcon"/>
       Display
       </button>
      </li>
     </ul>
    </div>
  )
}
