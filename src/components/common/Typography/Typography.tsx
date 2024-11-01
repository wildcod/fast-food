import React from 'react';
import './Typography.scss';

interface Props {
  component?: string;
  children: React.ReactNode;
  variant?: 'body' | 'medium' | 'small' | 'xsmall' | 'mini';
  weight?: number;
  color?: string;
  fontSize?: number | string;
  style?: React.CSSProperties;
  cursor?: string;
  textDecoration?: 'underline' | 'strikethrough';
  className?: string;
}

const Typography: React.FC<Props> = ({
  component = 'p',
  children,
  variant,
  weight,
  fontSize,
  color,
  textDecoration,
  className,
  cursor = 'unset',
}) => {
  const OuterTag: any = component;
  return (
    <OuterTag
      className={`typography-${variant} ${className ?? ''}`}
      style={{ fontSize, cursor, color, weight, textDecoration }}
    >
      {children}
    </OuterTag>
  );
};

export default Typography;
