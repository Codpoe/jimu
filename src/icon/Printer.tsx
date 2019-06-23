import React from 'react';

export interface PrinterProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const Printer: React.SFC<PrinterProps> = (
  props: PrinterProps
): React.ReactElement => {
  const { color, size, ...restProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className="feather feather-printer"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
};

Printer.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Printer;