import React from 'react';
import './Typography.scss';

interface Props {
  component: string;
  children: React.ReactNode;
  variant?: 'body' | 'medium' | 'small' | 'xsmall' | 'mini';
  weight?: number;
  color?: string;
  fontSize?: number | string;
  style?: React.CSSProperties;
  cursor?: string;
  textDecoration?: 'underline' | 'strikethrough';
}

const Typography: React.FC<Props> = ({
  component,
  children,
  variant,
  weight,
  fontSize,
  color,
  textDecoration,
  style = {},
  cursor = 'unset',
}) => {
  const OuterTag: any = component;
  return (
    <OuterTag
      className={`typography-${variant}`}
      style={{ ...style, fontSize, cursor, color, weight, textDecoration }}
    >
      {children}
    </OuterTag>
  );
};

export default Typography;
