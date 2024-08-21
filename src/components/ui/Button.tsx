import clsx from 'clsx';
import { ReactNode } from 'react';

type IProps = {
  text: string;
  type: 'primary' | 'secondary';
  children?: ReactNode;
};

const Button = ({ text, type, children }: IProps) => {
  return (
    <button
      className={clsx(
        ' tracking-[1%] text-center rounded-full transition-all',
        {
          'uppercase text-[18px] px-[32px] py-[16px] leading-[24.3px] bg-summerSky border-[1px] border-white font-medium text-white  transition-all duration-300 ease-out button-primary':
            type === 'primary',
        },
        {
          'uppercase text-[16px] px-[24px] py-[12px] leading-[21.6px] border border-white':
            type === 'secondary',
        },
      )}>
      <span className="z-10">
        {text}
        {children}
      </span>
    </button>
  );
};

export default Button;
