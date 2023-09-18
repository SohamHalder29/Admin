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
<p className='title'>Total sales made today</p>
<p className='amount'>$429</p>
<p className='desc'>Previous transactions processing. Last payments may not be included</p>
<div className='summary'>
    <div className='item'>
        <div className='itemTitle'>Target</div>
        <div className='itemResult negetive'>
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>$12.4k</div>
        </div>
    </div>

    <div className='item'>
        <div className='itemTitle'>Lastweek</div>
        <div className='itemResult positive'>
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>$12.4k</div>
        </div>
    </div>

    <div className='item'>
        <div className='itemTitle'>Last Month</div>
        <div className='itemResult  positive' >
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
            <div className='resultAmount'>$12.4k</div>
        </div>
    </div>
</div>
      
      
      
      
      
      </div>


</div>
  )
}

export default Featured;
