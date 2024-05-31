import clsx from 'clsx';

type Props = {
  type: 'big' | 'small';
  text: string;
  subtitle?: string;
};

const SectionTitle = ({ type, text, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-[16px] items-center">
      <h2
        className={clsx('uppercase leading-[40px]', {
          'text-[48px] leading-[60px] tracking-[4%]': type === 'big',
          'text-[32px] leading-[40px] tracking-[3%]': type === 'small',
        })}>
        {text}
      </h2>
      {type === 'big' && <div className="h-[3px] w-[64px] bg-eerieBlack"></div>}
      {subtitle && <h3 className="text-[16px] leading-[24px] text-gray">{subtitle}</h3>}
    </div>
  );
};

export default SectionTitle;
