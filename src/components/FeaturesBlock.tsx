interface IProps {
  title: string;
  text: string;
}

const FeaturesBlock = ({ title, text }: IProps) => {
  return (
    <div className="flex flex-col w-full gap-[16px] text-center">
      <h2 className="uppercase lg:text-[32px] md:text-[24px] text-[22px] tex leading-[125%] text-blue font-[300] tracking-[3%]">
        {title}
      </h2>
      <p className="text-[16px] leading-[24px] text-gray">{text}</p>
    </div>
  );
};

export default FeaturesBlock;
