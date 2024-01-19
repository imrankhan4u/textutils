import React from 'react'
import './custom.css';
import imran1 from '../images/imran1.jpg';

export default function About() {
  const handleMouseOver = (event) => {
    const element = event.currentTarget;

    if (element) {
      element.style.transform = 'scale(1.04)';
      element.style.boxShadow = '0px 0px 5px 5px #386641';
      
    }
  };

  const handleMouseOut = (event) => {
    const element = event.currentTarget;

    if (element) {
      element.style.transform = 'scale(1)';
      element.style.boxShadow = 'none';
    }
  };

  return (
    <>
      <div className="container text-center my-5">
        <div className="row justify-content-center ">
          <div className="col my-3" style={{ height: '200px' }}>
            <img src={imran1} className='h-100 profile' style={{borderRadius: '10%', transition: 'all 0.25s ease-in-out'}} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} alt="profile" />
          </div>
          <div className="col-8 my-3 d-flex align-items-center justify-content-center" style={{color: '#6A994E'}}>
            <div>
              <h2 className='h2inAbout'>Hi There! I'm <span style={{color: '#386641'}}>Imran khan</span></h2>
              <h4 className='h4inAbout'>This App contains all the utilities required to modify a text</h4>
              <h6 className='h4inAbout'>Empower Your Words: Your All-in-One Hub for Text Transformation and Enhancement!</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
