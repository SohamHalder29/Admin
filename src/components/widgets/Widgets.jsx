import React from 'react'
import "./widgets1.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widgets = ({type}) => {

  let data;
//temporary
 
 
 const diff=1;

  switch(type)

  {
    case "user":
      data={
        title:"USERS",
        isMonkey:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"crimson",
        backgroundColor: "rgba(255,0,0.2) "}} /> ,
      };
      break;
      case "order":
      data={
        title:"PROJECTS",
        isMonkey:false,
        link:"view all orders",
        icon:<ShoppingCartOutlinedIcon className='icon' style={{backgroundColor:"yellow",  cursor:"pointer"}} />,
      };
      break;
      case "earning":
      data={
        title:"DOCUMENTS",
        isMonkey:true,
        link:"View net earnings",
        icon:<MonitorOutlinedIcon className='icon' style={{backgroundColor:"lightgreen" }} />,
      };
      break;
      case "balance":
      data={
        title:"STASTICS",
        isMonkey:true,
        link:"See details",
        icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor:"green", color:"white"}}/>,
      };
       break;
       default:
        break;
    
  }
   

  return (
    <div className='widget'>
<div className='left'>
    <span className='title'>{data.title}</span>
    <span className='counter'>{data.isMonkey && "@"}  </span>
    <span className='link'>See all users</span>
</div>
<div className='right'>
<div className='percentage positive'>

<KeyboardArrowUpOutlinedIcon/>
{diff} %
</div>
{data.icon}

<PersonOutlineOutlinedIcon className='icon'/>

</div>
    </div>
  )
}

export default Widgets
