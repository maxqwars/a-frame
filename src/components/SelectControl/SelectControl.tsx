import cn from 'classnames';
import { useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext';

import './SelectControl.css';

type SelectControlProps = {
  label: string;
  options: { label: string; value: string }[];
};

const SelectControl = ({ label, options }: SelectControlProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={cn('select-control', { [`select-control_${theme}`]: theme })}>
      <div>
        <span className={cn('select-control__label')}>{label}</span>
      </div>

      <div className="select-control_select-container">
        <select
          className={cn('select-control_select-selector', { [`select-control_select-selector_${theme}`]: theme })}
          name=""
          id=""
        >
          {options.map((optionKeyVal) => (
            <option key={optionKeyVal.value} value={optionKeyVal.value}>
              {optionKeyVal.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectControl;
