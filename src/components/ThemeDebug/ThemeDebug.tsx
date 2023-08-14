import { ChangeEvent, useContext } from 'react';
import cn from 'classnames';

import { ThemeContext } from '@/context/ThemeContext';
import { useAppDispatch } from '@/store/hooks';
import { setTheme } from '@/store/slices/AppConfig';
import { appConfigModel } from '@/models/AppConfigModel';

import './ThemeDebug.css';

const ThemeDebug = () => {
  const appTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const onSelectInput = (event: ChangeEvent<HTMLSelectElement>) => {
    const theme = event.target.value as 'light' | 'dark' | 'system';
    appConfigModel.setTheme(theme);
    dispatch(setTheme(theme));
  };

  return (
    <div
      className={cn('theme-debug', {
        [`theme-debug--theme-${appTheme}`]: appTheme,
      })}
    >
      <h1>Theme Debug / Preview</h1>
      <h3>Current preset: {appTheme}</h3>
      <select defaultValue={appTheme} name="Select app theme" onChange={onSelectInput}>
        <option value="system">auto</option>
        <option value="light">light colors</option>
        <option value="dark">dark colors</option>
      </select>
    </div>
  );
};

export default ThemeDebug;
