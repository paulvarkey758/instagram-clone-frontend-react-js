import React from 'react'
import './Footer.css';

function FooterButton(props) {
  return (
    <div>
      <div className="footer-btn">
        <img src={`/images/${props.image}.png`} alt="" />
      </div>
    </div>
  )
}

export default FooterButton
