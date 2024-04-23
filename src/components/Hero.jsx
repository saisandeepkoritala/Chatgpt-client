import React from 'react';
import Logo from "../assets/logo.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Logo} alt="" />
      <p>How can i help you today?</p>

      <div className='query'>
          <p>Explain airplane turbulence <br/>
            <span>to someone who has never flown before</span></p>
          <p>Make a content strategy for a <br/>
            <span>newsletter featuring free local weekend events</span></p>
          <p>Explain why popcorn pops to a <br/>
            <span>kid who loves watching it in the microwave</span></p>
          <p>Help me pick a birthday gift <br/>
            <span>for my mom who likes gardening</span></p>
      </div>
      
    </div>
  )
}

export default Hero