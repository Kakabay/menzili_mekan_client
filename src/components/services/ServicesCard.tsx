type Props = {
  title: string;
  text: string;
  features: string[];
};

const ServicesCard = ({ title, text, features }: Props) => {
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-eerieBlack font-medium text-[24px] tracking-[-1%] leading-[30px]">
          {title}
        </h3>
        <p className="text-bauhaus text-[16px] leading-[24px] ">{text}</p>
      </div>
      <div className="flex flex-col gap-[16px]">
        {features.map((item) => (
          <div className="flex gap-[8px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.7803 4.71967C22.0732 5.01256 22.0732 5.48744 21.7803 5.78033L8.98744 18.5732C8.30402 19.2566 7.19598 19.2566 6.51256 18.5732L2.21967 14.2803C1.92678 13.9874 1.92678 13.5126 2.21967 13.2197C2.51256 12.9268 2.98744 12.9268 3.28033 13.2197L7.57322 17.5126C7.67085 17.6102 7.82914 17.6102 7.92678 17.5126L20.7197 4.71967C21.0126 4.42678 21.4874 4.42678 21.7803 4.71967Z"
                fill="#1A1A1A"
              />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
