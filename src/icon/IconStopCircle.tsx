import React from 'react';

export interface IconStopCircleProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconStopCircle: React.SFC<IconStopCircleProps> = (
  props: IconStopCircleProps
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
      className="feather feather-stop-circle"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <circle cx="12" cy="12" r="10" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  );
};

IconStopCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconStopCircle;
