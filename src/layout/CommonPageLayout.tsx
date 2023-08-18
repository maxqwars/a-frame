import { ReactNode } from 'react';
import NavigationLayout from './NavigationLayout';

type CommonPageLayoutProps = {
  children?: ReactNode;
};

const CommonPageLayout = ({ children }: CommonPageLayoutProps) => {
  return (
    <>
      <NavigationLayout />
      {children}
    </>
  );
};

export default CommonPageLayout;
