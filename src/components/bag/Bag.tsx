import React from 'react'
import './Bag.scss';
import bag from '../../assets/images/bag.png';

const Bag = () => {

  return (
    <div className="bag">
      <img src={bag} alt="" className='bag-img'/>
    </div>
  );

}

export default Bag;