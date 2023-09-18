import React from 'react'
import "./featured1.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      Featured
      <div className='top'>
        <h1 className='title'>Total revenue</h1>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
             <CircularProgressbar value={80} text={"70%"} strokeWidth={4}/>
        </div>
<p className='title'>Total Project works today</p>
<p className='amount'>Workload</p>
<p className='desc'>Previous Projects working in progress</p>
<div className='summary'>
    <div className='item'>
        <div className='itemTitle'>Target</div>
        <div className='itemResult negetive'>
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>Pending</div>
        </div>
    </div>

    <div className='item'>
        <div className='itemTitle'>Active</div>
        <div className='itemResult positive'>
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>Running task</div>
        </div>
    </div>

    <div className='item'>
        <div className='itemTitle'>Last Month</div>
        <div className='itemResult  positive' >
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>Completed</div>
        </div>
    </div>
</div>
      
      
      
      
      
      </div>


</div>
  )
}

export default Featured;
