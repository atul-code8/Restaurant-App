import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus app_bg flex_center section_padding' id='#about'>
    <div className="app_aboutus-overlay flex_center">
      <img src={images.G} alt="G letter"/>
    </div>
    <div className="app_aboutus-content flex_center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon_img'/>
        <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom_button'>Know more</button>
      </div>

      <div className="app_aboutus-content_knife flex_center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app_aboutus-content_history">
          <h1 className="headtext_cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon_img'/>
          <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='custom_button'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
