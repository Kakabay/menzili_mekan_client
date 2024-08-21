interface IProps {
  list_image: string;
  name: string;
}

const CartoonCard = ({ list_image, name }: IProps) => {
  return (
    <div className="flex flex-col gap-[16px] overflow-hidden">
      <div className="h-[161px] w-full transition-all hover:scale-110 duration-300">
        <img src={list_image} alt="cover" className="w-full h-full object-cover" />
      </div>
      <h4 className="text-[16px] px-2 text-center font-medium leading-[19.6px] tracking-[-1%]">
        {name}
      </h4>
    </div>
  );
};

export default CartoonCard;
