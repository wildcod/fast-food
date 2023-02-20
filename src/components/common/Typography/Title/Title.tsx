import React from 'react';
import './Title.scss';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  style?: React.CSSProperties;
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
  style = {},
  cursor = 'unset',
}) => {
  const OuterTag: any = `h${level}`;
  return (
    <OuterTag
      className={`title-level-${level}`}
      style={{ ...style, fontSize, color, cursor, weight, textDecoration }}
    >
      {children}
    </OuterTag>
  );
};

export default Title;
