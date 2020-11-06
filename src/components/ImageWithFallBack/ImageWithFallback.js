import React from "react";



const ImageWithFallback = ({
    src,
    fallback,
    type = 'image/webp',
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} />
      </picture>
    );
  };

  export default ImageWithFallback