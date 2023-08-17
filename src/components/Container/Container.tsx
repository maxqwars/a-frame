import { ReactNode } from 'react';
import cn from 'classnames';
import './Container.css';

type ContainerProps = {
  children?: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={cn('container')}>{children}</div>;
};

export default Container;
