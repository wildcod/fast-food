import React from 'react';
import './Typography.scss';

interface Props {
  component: string;
  children: React.ReactNode;
  variant?: 'body' | 'medium' | 'small' | 'mini';
  weight?: number;
  color?: string;
  fontSize?: number | string;
}

const Typography: React.FC<Props> = ({
  component,
  children,
  variant,
  weight,
  fontSize,
  color,
}) => {
  const OuterTag: any = component;
  return (
    <OuterTag
      className={`fast-food-typography ${`typography-${variant}`}`}
      style={{ fontSize, color, weight }}
    >
      {children}
    </OuterTag>
  );
};

export default Typography;
