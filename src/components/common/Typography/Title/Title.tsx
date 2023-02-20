import React from 'react';
import './Title.scss';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  fontSize?: number;
}
const Title: React.FC<Props> = ({ level, children, fontSize }) => {
  const OuterTag: any = `h${level}`;
  return (
    <OuterTag
      className={`fast-food-title ${`title-level-${level}`}`}
      style={{ fontSize }}
    >
      {children}
    </OuterTag>
  );
};

export default Title;
