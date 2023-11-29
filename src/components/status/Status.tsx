import React from 'react'
import './Status.scss';
import status1 from '../../assets/images/card-1.png';
import status2 from '../../assets/images/card-2.png';
import status3 from '../../assets/images/card-3.png';

const Status = () => {

  return (
    <div className='status-cards'>
      <div className="status-cards-inner">
        <img src={status1} alt="" className='status-img'/>
        <img src={status3} alt="" className='status-img'/>
        <img src={status2} alt="" className='status-img'/>
      </div>
    </div>
  );

}

export default Status