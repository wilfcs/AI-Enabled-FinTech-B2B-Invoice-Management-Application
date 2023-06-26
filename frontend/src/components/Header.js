import React from 'react'
import './css/Header.css'
import abcLogo from '../images/abclogo.svg'
import hrclogo from '../images/hrclogo.svg'

const Header = () => {
  return (
    <>
      <div className="header-body">
        <div class="left">
          <img src={hrclogo} alt="hrclogo" />
        </div>
        <div class="middle">
          <img src={abcLogo} alt="abcLogo" />
        </div>
      </div>
      <div className='invoiceList'>Invoice List</div>
    </>
  );
}

export default Header