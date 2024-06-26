import HeroSection from '@/components/HeroSection';
import { CharactersSection } from '@/components/project/CharactersSection';
import { InfoSection } from '@/components/project/InfoSection';
import { PostersSection } from '@/components/project/PostersSection';
import { ShotsSection } from '@/components/project/ShotsSection';

const Project = () => {
  return (
    <div>
      <HeroSection
        project
        size="big"
        page="project"
        banner="/project/cover.png"
        icon="/project/cartoon-logo.png"
        btnText="Watch trailer"
      />

      <InfoSection />
      <CharactersSection />
      <ShotsSection />
      <PostersSection />
    </div>
  );
};

export default Project;
