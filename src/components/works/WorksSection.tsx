import Container from '../Container';
import CartoonCard from './CartoonCard';

const WorksSection = () => {
  const arr = [
    {
      img: '/portfolio/1.png',
      text: '“Freckled Friends” – Our animation series',
    },
    {
      img: 'project1.png',
      text: '“Lost Ball” – The most viewed cartoon in Turkmenistan',
    },
    {
      img: 'project2.png',
      text: '“My Game” – Another adventure of Mammetjan',
    },
    {
      img: 'project3.png',
      text: '“Bad Habit” – Mergen and Merjen',
    },
    {
      img: 'project4.png',
      text: '“Ynamly” – Represents the company “Ynamly Maksat”',
    },
    {
      img: 'project5.png',
      text: '“Robo” – Well known mascot of ASTU',
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
