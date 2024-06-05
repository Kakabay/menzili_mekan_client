import Container from '../Container';
import CartoonCard from './CartoonCard';

const WorksSection = () => {
  const emptyArray = new Array(6).fill(null);
  const arr = [
    {
      img: 'project1.png',
      text: 'Guild of Guardians eSports Announcement',
    },
    {
      img: 'project2.png',
      text: 'Guild of Guardians eSports Announcement',
    },
    {
      img: 'project3.png',
      text: 'Guild of Guardians eSports Announcement',
    },
    {
      img: 'project4.png',
      text: 'Guild of Guardians eSports Announcement',
    },
    {
      img: 'project5.png',
      text: 'Guild of Guardians eSports Announcement',
    },
  ];

  return (
    <section className="mt-[40px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 md:gap-y-8 gap-4">
          {arr.map((item, i) => (
            <div key={i}>
              <CartoonCard text={item.text} img={item.img} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorksSection;
