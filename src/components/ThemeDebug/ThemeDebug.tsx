import { ChangeEvent, useContext } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

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
      <hr />
      <select defaultValue={appTheme} name="Select app theme" onChange={onSelectInput}>
        <option value="system">auto</option>
        <option value="light">light colors</option>
        <option value="dark">dark colors</option>
      </select>
      <hr />

      <table className={cn('theme-debug__color-table')}>
        <tr>
          <td
            className={cn({
              [`theme-debug__primary-color--theme-${appTheme}`]: appTheme,
            })}
          >
            primary
          </td>
          <td
            className={cn({
              [`theme-debug__secondary-color--theme-${appTheme}`]: appTheme,
            })}
          >
            Secondary
          </td>
          <td>Primary variant</td>
          <td>Secondary Variant</td>
        </tr>

        <tr>
          <td
            className={cn({
              [`theme-debug__background--color-theme-${appTheme}`]: appTheme,
            })}
          >
            Background
          </td>
          <td
            className={cn({
              [`theme-debug__surface--color-theme-${appTheme}`]: appTheme,
            })}
          >
            Surface
          </td>
          <td
            className={cn({
              [`theme-debug__error--color-theme-${appTheme}`]: appTheme,
            })}
          >
            Error
          </td>
        </tr>

        <tr>
          <td
            className={cn({
              [`theme-debug__primary-color--theme-${appTheme}`]: appTheme,
            })}
          >
            On primary
          </td>
          <td
            className={cn({
              [`theme-debug__secondary-color--theme-${appTheme}`]: appTheme,
            })}
          >
            On secondary
          </td>
          <td
            className={cn({
              [`theme-debug__background--color-theme-${appTheme}`]: appTheme,
            })}
          >
            On background
          </td>
          <td
            className={cn({
              [`theme-debug__surface--color-theme-${appTheme}`]: appTheme,
            })}
          >
            On surface
          </td>
          <td
            className={cn({
              [`theme-debug__error--color-theme-${appTheme}`]: appTheme,
            })}
          >
            On error
          </td>
        </tr>
      </table>
      <hr />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default ThemeDebug;
