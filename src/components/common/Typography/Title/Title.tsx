import React from 'react';
import './Title.scss';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
  cursor?: string;
  color?: string;
  fontSize?: number;
  weight?: number;
  textDecoration?: 'underline' | 'strikethrough';
}
const Title: React.FC<Props> = ({
  level,
  children,
  fontSize,
  color,
  textDecoration,
  weight,
  className,
  cursor = 'unset',
}) => {
  const OuterTag: any = `h${level}`;
  return (
    <OuterTag
      className={`title-level-${level} ${className}`}
      style={{ fontSize, color, cursor, weight, textDecoration }}
    >
      {children}
    </OuterTag>
  );
};

export default Title;
