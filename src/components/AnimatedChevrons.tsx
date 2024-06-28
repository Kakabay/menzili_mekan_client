const AnimatedChevrons = ({}) => {
  return (
    <a onClick={() => window.scrollTo} className="chevrons-container cursor-pointer">
      <div className="relative w-full h-full">
        <div className="chevron chevron--one ">
          <img src="/hero/shape-blue.svg" alt="blue shape" />
        </div>
        <div className="chevron chevron--two ">
          <img src="/hero/shape-green.svg" alt="green shape" />
        </div>
        <div className="chevron chevron--three ">
          <img src="/hero/shape-blue.svg" alt="blue shape" />
        </div>
      </div>
    </a>
  );
};

export default AnimatedChevrons;
