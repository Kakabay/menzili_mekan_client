import Container from '../Container';

export const InfoSection = () => {
  return (
    <Container>
      <div id="project" className="sm:mt-20 mt-10">
        <div className="flex md:flex-nowrap flex-wrap text-white md:justify-between justify-center md:gap-0 gap-x-3 tab:px-20 md:px-[60px] px-0 sm:mb-14 mb-10">
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              234
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              episodes
            </div>
          </div>
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              5.5
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              minutes
            </div>
          </div>
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              3-6
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              years old
            </div>
          </div>
        </div>

        <p className="text-bauhaus leading-[150%] sm:text-[24px] text-[18px] text-center font-light">
          The adventures of energetic mischief-makers: Bucky, the brown bear, a white bear named
          Bjorn, and their friend Littlefox. Bucky is all about gadgets and technology, Bjorn
          is a child of nature, and Littlefox loves to bake pies and treat her many friends. In each
          episode, children learn something new: how take care of nature, what it means to be a good
          friend, and what to do when electronics break down.
        </p>
      </div>
    </Container>
  );
};
