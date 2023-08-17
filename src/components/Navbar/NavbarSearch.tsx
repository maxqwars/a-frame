import cn from 'classnames';
import { useContext } from 'react';
import { Search } from 'react-feather';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '@/context/ThemeContext';

const NavbarSearch = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={cn('navbar__search')}>
      <form action="" className={cn('navbar__search-form')}>
        <input
          placeholder={t('search-placeholder')}
          className={cn('navbar__search-input', {
            [`navbar__search-input_${theme}`]: theme,
          })}
          type="text"
        />

        <button
          className={cn('navbar__search-button', {
            [`navbar__search-button_${theme}`]: theme,
          })}
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default NavbarSearch;
