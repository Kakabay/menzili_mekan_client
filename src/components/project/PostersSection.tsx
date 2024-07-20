import useGetProject from "@/react-query/useGetProject";
import Container from "../Container";
import { useParams } from "react-router-dom";

export const PostersSection = () => {
  const { id } = useParams();

  const { data } = useGetProject(id ? id : "");

  return (
    <section className="section-mt">
      <div className="w-full tab:h-[330px] sm:h-[188px] h-[84px] relative flex justify-center items-center section-mb">
        <img
          src={data ? data[0].posters_image : ""}
          alt="bg-image"
          className="w-full h-full"
        />
        <div className="uppercase text-center text-white sm:text-[48px] text-[28px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          {data ? data[0].posters_text : ""}
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-8">
          <img src="/project/poster1.png" alt="" className="row-span-2" />
          <img src="/project/poster2.png" alt="" />
          <img src="/project/poster3.png" alt="" />
        </div>
      </Container>
    </section>
  );
};
