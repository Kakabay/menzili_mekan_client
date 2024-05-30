import React from 'react';
import Container from '../Container';
import CartoonCard from './CartoonCard';

const WorksSection = () => {
  const emptyArray = new Array(6).fill(null);

  return (
    <section className="mt-[40px]">
      <Container>
        <div className="grid grid-cols-4 gap-x-[16px] gap-y-[32px]">
          {emptyArray.map((item) => (
            <CartoonCard />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorksSection;
