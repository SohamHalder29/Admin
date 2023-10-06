import React from 'react';
import "./sidebar1.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PropaneOutlinedIcon from '@mui/icons-material/PropaneOutlined';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import FitbitIcon from '@mui/icons-material/Fitbit';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="sidebar">
        <div className='top'> 
        <Link  to="/Dashboard"  style={{textDecoration:"none"}}>
        <span className='logo'>Zero Work</span> 
        </Link>
        </div>
        
        <hr/>
        <div className='center'>
        <ul>
        <p className="title">Main</p>
        
            <li> 
            <DashboardIcon/>
            <span>Dashboard</span>
            </li>
            
            <p className="title">LISTS</p>
            <Link  to="/Dashboard/users"  style={{textDecoration:"none"}}>
            <li> 
            <Person2OutlinedIcon/>
            <span>User</span>
            </li>
            </Link>
            <Link  to="/Dashboard/products"  style={{textDecoration:"none"}}>
            <li> 
            <ProductionQuantityLimitsOutlinedIcon/>
            <span>Activity</span>
            </li>
            </Link>
           
            <li> 
            <PropaneOutlinedIcon/>
            <span>Projects</span>
            </li>
            
            <li>
            <CalendarMonthOutlinedIcon/>
              <span>Calender</span>
            </li>

            <p className="title">USEFUL</p>
            <li> 
            <StackedLineChartIcon/>
            <span>Stats</span>
            </li><li> 
            <NotificationsActiveIcon/>
            <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li> 
            <SettingsSystemDaydreamIcon/>
            <span>System Healths</span>
            </li>
            <li> 
            <FitbitIcon/>
            <span>Logs</span>
            </li>
            <li> 
            <SettingsIcon/>
            <span>Setting</span>
            </li>
            <p className="title">USER</p>
            <li> 
            <AccountCircleIcon/>
            <span>Profile</span>
            </li>
            <li> 
            <ExitToAppIcon/>
            <span>Logout</span>
            </li>
          </ul>
         </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
            

        </div>
    </div>
  )
}

export default Sidebar