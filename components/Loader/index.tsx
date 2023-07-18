import React from 'react'

const Loader = () => {
  return (
    <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 ">
      <div className="w-24 h-24 border-8 border-blue-400 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}

export default Loader
