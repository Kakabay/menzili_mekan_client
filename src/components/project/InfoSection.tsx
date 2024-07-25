import { useParams } from 'react-router-dom';
import Container from '../Container';
import useGetProject from '@/react-query/useGetProject';

export const InfoSection = () => {
  const { id } = useParams();

  const { data } = useGetProject(id ? id : '');

  return (
    <Container>
      <div id="project" className="sm:mt-20 mt-10">
        <div className="flex md:flex-nowrap flex-wrap text-white md:justify-between justify-center md:gap-0 gap-x-3 tab:px-20 md:px-[60px] px-0 sm:mb-14 mb-10">
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              {data ? data[0].information_number_1 : ''}
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              {data ? data[0].information_text_1 : ''}
            </div>
          </div>
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              {data ? data[0].information_number_2 : ''}
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              {data ? data[0].information_text_2 : ''}
            </div>
          </div>
          <div className="project-info-ellips">
            <div className="tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold">
              {data ? data[0].information_number_3 : ''}
            </div>
            <div className="tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium">
              {data ? data[0].information_text_3 : ''}
            </div>
          </div>
        </div>

        <p className="text-bauhaus leading-[150%] sm:text-[24px] text-[18px] text-center font-light">
          {data ? data[0].information : ''}
        </p>
      </div>
    </Container>
  );
};
