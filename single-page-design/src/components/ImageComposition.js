import React from 'react'
import styles from './ImageComposition.css'

const ImageComposition = (props) => {
  const { image1, image2, image3 } = props
  return (
    <div className={styles} >
      <img className='img1' src={image1.img} alt={image1.alt} />
      <img className='img2' src={image2.img} alt={image2.alt} />
      <img className='img3' src={image3.img} alt={image2.alt} />
    </div>
  );
};

export default ImageComposition;