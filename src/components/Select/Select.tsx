/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useRef, useEffect, useContext, MouseEventHandler } from 'react';
import cn from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';
import { ChevronDown } from 'react-feather';
import SelectOption from './SelectOption';

import './Select.css'

export type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  // eslint-disable-next-line no-unused-vars
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
};

const Select = ({
  selected,
  options,
  placeholder,
  mode = 'rows',
  status = 'default',
  onChange,
  onClose,
}: SelectProps) => {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleClick = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev);
      }
    };

    placeholderEl.addEventListener('keydown', handleClick);

    return () => {
      placeholderEl.removeEventListener('keydown', handleClick);
    };
  }, []);

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn('app-select', { [`app-select_${theme}`]: theme })}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className={cn('app-select__arrow', { [`app-select__arrow_${theme}`]: theme })}>
        <ChevronDown />
      </div>
      <div
        className={cn('app-select__placeholder', { [`app-select__placeholder_${theme}`]: theme })}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
      >
        {selected?.label || placeholder}
      </div>
      {isOpen && (
        <ul className={cn('app-select__select', { [`app-select__select_${theme}`]: theme })}>
          {options.map((option) => (
            <SelectOption key={option.value} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
