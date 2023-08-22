import { ReactNode } from 'react';
import NavigationLayout from './NavigationLayout';
import BottomNavigationLayout from './BottomNavigationLayout';

type CommonPageLayoutProps = {
  children?: ReactNode;
};

const CommonPageLayout = ({ children }: CommonPageLayoutProps) => {
  return (
    <>
      <NavigationLayout />
      {children}
      <BottomNavigationLayout />
    </>
  );
};

export default CommonPageLayout;
