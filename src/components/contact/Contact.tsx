import React from 'react'
import './Contact.scss';

const Contact = () => {

  return (
    <div className='contact'>
      <div className="left">
        <h4 className='job'>Designer</h4>
        <div className="name">
          <h4>Yuliia</h4>
          <h4>Hrabynska</h4>
        </div>
        <div className="socials">
          <div className="social">
            <h5 className='parent'>INSTERGRAM:</h5>
            <h5 className='child'>@julidesignco</h5>
          </div>
          <div className="social">
            <h5 className='parent'>DRIBBLE:</h5>
            <h5 className='child'>juliDesignCo</h5>
          </div>
          <div className="social">
            <h5 className='parent'>PINTEREST:</h5>
            <h5 className='child'>@julidesignco</h5>
          </div>
          <div className="social">
            <h5 className='parent'>GMAIL:</h5>
            <h5 className='child'>@juilahrabwork@gmail.com</h5>
          </div>
          <div className="social">
            <h5 className='parent'>CREATIVE MARKET:</h5>
            <h5 className='child'>juliDesignCo</h5>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );

}

export default Contact;