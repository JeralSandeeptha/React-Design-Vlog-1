import React from 'react'
import './Contact.scss';

const Contact = () => {

  return (
    <div className='contact'>
      <div className="left">
        <h4 className='job'>Designer</h4>
        <div className="name">
          <h4>Zyntra</h4>
          <h4>Tech</h4>
        </div>
        <div className="socials">
          <div className="social">
            <h5 className='parent'>INSTERGRAM:</h5>
            <h5 className='child'>@zyntratech</h5>
          </div>
          <div className="social">
            <h5 className='parent'>DRIBBLE:</h5>
            <h5 className='child'>zyntratech</h5>
          </div>
          <div className="social">
            <h5 className='parent'>PINTEREST:</h5>
            <h5 className='child'>@zyntratech</h5>
          </div>
          <div className="social">
            <h5 className='parent'>GMAIL:</h5>
            <h5 className='child'>@zyntra@gmail.com</h5>
          </div>
          <div className="social">
            <h5 className='parent'>CREATIVE MARKET:</h5>
            <h5 className='child'>zyntratech</h5>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );

}

export default Contact;
