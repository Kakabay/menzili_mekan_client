import Container from '../Container';

export const ShotsSection = () => {
  return (
    <section className="section-mt">
      <div className="w-full h-[330px] relative flex justify-center items-center mb-20">
        <img src="/project/shots-bg.png" alt="bg-image" className="w-full h-full" />
        <div className="uppercase text-center text-white text-[48px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          shots
        </div>
      </div>

      <Container>
        <div className="">
          <div className="">
            <img src="/project/shots-slide1.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};
