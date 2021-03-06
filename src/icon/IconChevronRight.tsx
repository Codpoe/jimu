import React from 'react';

export interface IconChevronRightProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconChevronRight: React.SFC<IconChevronRightProps> = (
  props: IconChevronRightProps
): React.ReactElement => {
  const { color, size, style, ...restProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className="feather feather-chevron-right"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

IconChevronRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconChevronRight;
