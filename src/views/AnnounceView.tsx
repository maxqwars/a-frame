import { useContext } from 'react'
import Announce from '@/components/Announce';
import { ThemeContext } from '@/context/ThemeContext'

const AnnounceView = () => {

  const theme = useContext(ThemeContext)

  console.log(`Current color theme ${theme}`)

  return (
    <div>
      <Announce />
    </div>
  );
};

export default AnnounceView;
