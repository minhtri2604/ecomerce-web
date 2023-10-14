/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const LazyBackgroundImage = ({ imageUrl, children, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };
    image.src = imageUrl;
  }, [imageUrl]);

  return (
    <div
      className={`${className} w-full h-full bg-cover bg-center bg-no-repeat opacity-0 transition ${
        loaded ? "opacity-100" : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default LazyBackgroundImage;
