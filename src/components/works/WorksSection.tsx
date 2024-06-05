import Container from '../Container';
import CartoonCard from './CartoonCard';

const WorksSection = () => {
  const emptyArray = new Array(6).fill(null);

  return (
    <section className="mt-[40px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 md:gap-y-8 gap-4">
          {emptyArray.map((_, i) => (
            <div key={i}>
              <CartoonCard />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorksSection;
