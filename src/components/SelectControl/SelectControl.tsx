import cn from 'classnames';
import { useContext } from 'react';
import Select from 'react-select';

import { ThemeContext } from '@/context/ThemeContext';

import './SelectControl.css';

type SelectControlProps = {
  label: string;
  options: { label: string; value: string }[];
  selected: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const SelectControl = ({ label, options, selected, onChange }: SelectControlProps) => {
  const theme = useContext(ThemeContext);
  const value = options.find((options) => options.value === selected);

  console.log(selected);

  return (
    <div className={cn('select-control', { [`select-control_${theme}`]: theme })}>
      <div>
        <span className={cn('select-control__label')}>{label}</span>
      </div>

      <div className="select-control_select-container">
        <Select
          options={options}
          value={value}
          onChange={(value) => {
            onChange(value?.value as string);
          }}
        />
      </div>
    </div>
  );
};

export default SelectControl;
