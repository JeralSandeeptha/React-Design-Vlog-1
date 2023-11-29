import React from 'react'
import './StatusDown.scss';
import redLogo from '../../assets/icons/logo-1.png';

const StatusDown = () => {
  return (
    <div className='status'>
      <div className="left"></div>
      <div className="right">
        <img src={redLogo} alt="" className='logo'/>
      </div>
    </div>
  )
}

export default StatusDown