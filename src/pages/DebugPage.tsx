import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';

import useBrowserControl from '@/hooks/useBrowserControls';
import useBrowserTheme from '@/hooks/useBrowserTheme';

import ThemeDebug from '@/components/ThemeDebug';

const DebugPage = () => {
  const { setBodyTheme, setDocumentTitle } = useBrowserControl();
  const browserTheme = useBrowserTheme();
  const confAppTheme = useAppSelector((state) => state.appConfigReducer.theme);

  useEffect(() => {
    setDocumentTitle('Debug app');
    setBodyTheme(confAppTheme === 'system' ? browserTheme : confAppTheme);
  }, [browserTheme, confAppTheme, setBodyTheme, setDocumentTitle]);

  return (
    <div>
      <ThemeDebug />
    </div>
  );
};

export default DebugPage;
