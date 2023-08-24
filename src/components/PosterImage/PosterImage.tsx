import { ThemeContext } from '@/context/ThemeContext';
import { useEffect, useState, useCallback, useContext } from 'react';

import lightPlaceholder from '@/assets/poster_placeholder_light.svg';
import darkPlaceholder from '@/assets/poster_placeholder_dark.svg';

type PosterImageProps = {
  src: string;
  className: string;
  alt: string;
};

const PosterImage = ({ className, src, alt }: PosterImageProps) => {
  const theme = useContext(ThemeContext);
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

  return posterLoaded ? (
    <img className={className} alt={alt} src={imageUrl} />
  ) : (
    <img className={className} alt={alt} src={theme === 'light' ? lightPlaceholder : darkPlaceholder} />
  );
};

export default PosterImage;
