import React from 'react';
import './Yes.scss';
import yellowLogo from '../../assets/icons/logo-2.png';

const Yes = () => {

  return (
    <div className='yes'>
        <div className="yes-inner">
            <div className="left">
                <div className="up"></div>
                <div className="down">
                    <h1 className='header'>SAY TACO</h1>
                    <h1 className='header'>YES!</h1>
                </div>
            </div>
            <div className="right">
                <img className='yellowLogo' src={yellowLogo} alt="" />
            </div>
        </div>
    </div>
  );

}

export default Yes