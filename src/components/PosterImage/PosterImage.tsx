import { useEffect, useState, useCallback, useContext } from 'react';
import StaticServerContext from '@/context/StaticServerContext';
import { ThemeContext } from '@/context/ThemeContext';

import lightPlaceholder from '@/assets/poster_placeholder_light.svg';
import darkPlaceholder from '@/assets/poster_placeholder_dark.svg';

type PosterImageProps = {
  assetId: string;
  className: string;
  alt: string;
};

const PosterImage = ({ className, assetId, alt }: PosterImageProps) => {
  const theme = useContext(ThemeContext);
  const staticServ = useContext(StaticServerContext);
  const [posterLoaded, setPosterLoaded] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const loadImage = useCallback(() => {
    fetch(`https://${staticServ}${assetId}`)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
        setPosterLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [assetId, staticServ]);

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
