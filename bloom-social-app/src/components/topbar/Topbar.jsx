
import './topbar.css'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function Topbar() {
  return (
<div className="topbarContainer">
  <div className="topbarLeft">
    <span className="topbarHeadline">Bloom Social</span>
  </div>
  <div className="topbarCenter">
    <div className="topBarSearchBar">
    <SearchIcon className='topbarSearchIcon'/>
    <input placeholder="Search for friend, post or video" className="topBarSearchInput" />
    </div>
    
  </div>
  <div className="topbarRight">
    <div className="topbarLinks">
      <span className="topbarLink">Homepage</span>      
      <span className="topbarLink">Timeline</span>
    </div>
    <div className="topbarIcons">
      <div className="topbarIcon">
        <PersonIcon />
        <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIcon">
        <MessageIcon />
        <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIcon">
        <NotificationsIcon />
        <span className="topbarIconBadge">1
        </span>
      </div>
    </div>
    <img src="/assets/person/1.jpg" alt="" className="topbarImage" />
  </div>
</div>  )
}
