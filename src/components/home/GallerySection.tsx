import Container from '../Container';

const GallerySection = () => {
  return (
    <section className="mt-[140px]">
      <Container>
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className="text-[48px] leading-[60px] tracking-[4%] uppercase">our projects</h2>
            <div className="h-[3px] w-[64px] bg-eerieBlack"></div>
          </div>
          <div className="grid grid-cols-3 gap-[32px]">
            <div className="h-[376px] overflow-hidden">
              <img
                src="/placeholder.png"
                alt="random image"
                className="hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="h-[376px] grid grid-cols-2 gap-[32px]">
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="h-[376px] overflow-hidden">
              <img
                src="/placeholder.png"
                alt="random image"
                className="hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
