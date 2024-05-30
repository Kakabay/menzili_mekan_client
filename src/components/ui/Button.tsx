import clsx from 'clsx';

type IProps = {
  text: string;
  type: 'primary' | 'secondary';
};

const Button = ({ text, type }: IProps) => {
  return (
    <button
      className={clsx(
        ' tracking-[1%] text-center rounded-full',
        {
          'uppercase text-[18px] px-[32px] py-[16px] leading-[24.3px] bg-blue': type === 'primary',
        },
        {
          'uppercase text-[16px] px-[24px] py-[12px] leading-[21.6px] border border-white':
            type === 'secondary',
        },
      )}>
      {text}
    </button>
  );
};

export default Button;
