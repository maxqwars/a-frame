import { ReactNode } from 'react';
import cn from 'classnames';
import './Typography.css';

/* Declare variants map */
const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

type TypographyProps = {
  variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  color?: 'primary' | 'error' | 'text';
  children?: ReactNode;
};

const Typography = ({ variant = 'body1', align = 'inherit', children, color = 'text' }: TypographyProps) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  // FIXME: Property 'children' does not exist on type 'IntrinsicAttributes'.ts(2322)
  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
      align={align}
    >
      {children}
    </Component>
  );
};

export default Typography;
