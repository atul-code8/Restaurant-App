import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div style={{margin: '1rem'}}>
    <p className='p_cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon_img'/>
  </div>
);

export default SubHeading;
