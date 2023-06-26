import React from 'react'
import './css/Footer.css'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="link">
      <span className="footer-text">
        <a href="https://www.highradius.com/privacy-policy/" target="_">
          Privacy Policy
        </a>{" "}
        |
        <span>
          <AiOutlineCopyrightCircle />
        </span>{" "}
        2023 HighRadius Corporation. All rights reserved.
      </span>
    </div>
  );
}

export default Footer
