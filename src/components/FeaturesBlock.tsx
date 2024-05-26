interface IProps {
  title: string;
  text: string;
}

const FeaturesBlock = ({ title, text }: IProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2 className="uppercase text-[32px] leading-[40px] text-blue font-[300] tracking-[3%]">
        {title}
      </h2>
      <p className="text-[16px] leading-[24px] text-gray">{text}</p>
    </div>
  );
};

export default FeaturesBlock;
