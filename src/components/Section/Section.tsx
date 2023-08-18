import { ReactNode } from 'react';

import './Section.css'

type SectionProps = {
  children?: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className="section">{children}</section>;
};

export default Section;
