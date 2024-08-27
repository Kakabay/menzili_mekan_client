import HeroSection from "@/components/HeroSection";
import { CharactersSection } from "@/components/project/CharactersSection";
import { InfoSection } from "@/components/project/InfoSection";
import { PostersSection } from "@/components/project/PostersSection";
import { ShotsSection } from "@/components/project/ShotsSection";
import useGetProject from "@/react-query/useGetProject";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  const { data } = useGetProject(id ? id : "");

  console.log(data ? data : "asdas");

  return (
    <div>
      <HeroSection
        project
        size="big"
        page="project"
        banner={data && data[0] ? data[0].banner_image : ""}
        icon={data && data[0] ? data[0].logo : ""}
        btnText="Watch trailer"
      />

      {data && data[0].information_number_1 && <InfoSection />}
      {data && data[0].list_characters && <CharactersSection />}
      {data && data[0].list_shots && <ShotsSection />}
      {data && data[0].list_posters && <PostersSection />}
    </div>
  );
};

export default Project;
