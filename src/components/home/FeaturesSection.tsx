import Container from '../Container';
import FeaturesBlock from '../FeaturesBlock';
import { v4 } from 'uuid';

const featuresData = [
  {
    title: 'awesome creativity',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
  {
    title: 'high-quality 2d and 3d animation',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
  {
    title: 'popularity and recognition',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-[40px]">
      <Container>
        <div className="flex gap-[32px]">
          {featuresData.map((block) => (
            <FeaturesBlock key={v4()} text={block.text} title={block.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
