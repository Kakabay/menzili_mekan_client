import useGetCartoons from '@/react-query/useGetCartoons';
import Container from '../Container';
import CartoonCard from './CartoonCard';
import { Link } from 'react-router-dom';
import { easeOut, motion } from 'framer-motion';

const WorksSection = () => {
  const { data } = useGetCartoons();

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: 'blur(3px)',
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0)',

      transition: {
        delay: 0.3 * index,
        easeOut,
      },
    }),
  };

  return (
    <section className="mt-10">
      <Container>
        {data ? (
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 md:gap-y-8 gap-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}>
                <Link
                  key={index}
                  to={''}
                  // to={`project/${item.id}`}
                >
                  <CartoonCard {...item} />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default WorksSection;
