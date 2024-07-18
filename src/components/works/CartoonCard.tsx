interface IProps {
  image: string;
  name: string;
}

const CartoonCard = ({ image, name }: IProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="max-h-[161px] w-full overflow-hidden">
        <img src={image} alt="cover" className="w-full h-full object-cover" />
      </div>
      <h4 className="text-[16px] px-2 text-center font-medium leading-[19.6px] tracking-[-1%]">
        {name}
      </h4>
    </div>
  );
};

export default CartoonCard;
