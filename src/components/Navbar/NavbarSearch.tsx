import cn from 'classnames';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Search } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '@/context/ThemeContext';

const NavbarSearch = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const { t } = useTranslation('Navbar'); // WARN: This component use useTranslation()
  const [query, setQuery] = useState<string>('');

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <div className={cn('navbar__search')}>
      <form onSubmit={onFormSubmit} className={cn('navbar__search-form')}>
        <input
          value={query}
          onChange={onSearchInputChange}
          placeholder={t('search_placeholder')}
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
