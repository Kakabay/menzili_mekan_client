interface IProps {
  img: string;
  text: string;
}

const CartoonCard = ({ img, text }: IProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="max-h-[161px] w-full overflow-hidden">
        <img src={img} alt="cover" className="w-full h-full object-cover" />
      </div>
      <h4 className="text-[14px] font-medium leading-[19.6px] tracking-[-1%]">{text}</h4>
    </div>
  );
};

export default CartoonCard;
