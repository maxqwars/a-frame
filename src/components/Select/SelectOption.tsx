/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MouseEventHandler, useContext, useEffect, useRef } from 'react';
import { Option } from './Select';
import cn from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

type SelectOptionProps = {
  option: Option;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: Option['value']) => void;
};

const SelectOption = ({ option, onClick }: SelectOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);
  const { label, value } = option;
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterPress);

    return () => {
      option.removeEventListener('keydown', handleEnterPress);
    };
  }, [value, onClick]);

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li
      className={cn('app-select__option', { [`app-select__option_${theme}`]: theme })}
      value={value}
      onClick={handleClick(value)}
      ref={optionRef}
    >
      {label}
    </li>
  );
};

export default SelectOption;
