import { useEffect, useState, useCallback } from 'react';

type PosterImageProps = {
  src: string;
  className: string;
  alt: string;
};

const PosterImage = ({ className, src, alt }: PosterImageProps) => {
  const [posterLoaded, setPosterLoaded] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const loadImage = useCallback(() => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
        setPosterLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [src]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return posterLoaded ? <img className={className} alt={alt} src={imageUrl} /> : <div>+</div>;
};

export default PosterImage;
