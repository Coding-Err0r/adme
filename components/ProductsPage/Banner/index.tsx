import images from '@/config/images';
import React from 'react'

const Banner = () => {
  return (
    <div className="w-full lg:h-[470px] md:h-[304px] h-[230px]">
      <img src={images.productBanner} className="object-cover w-full h-full" />
    </div>
  );
}

export default Banner
