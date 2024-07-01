import { navData } from '@/lib/database/Navigation.data';
import { useZusBurger } from '@/zustand/useZusBurger';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

export const BurgerMenu = () => {
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => document.body.classList.remove('overflow-y-hidden');
  }, []);

  const setBurgerIsOpen = useZusBurger((state) => state.setBurgerIsOpen);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        x: '100%',
      }}
      className="min-h-[100vh] pt-16 w-full h-full fixed top-[88px] overflow-y-auto bottom-0 bg-eerieBlack">
      <div className="flex flex-col items-center gap-4">
        {navData.map((item) => (
          <Link
            key={v4()}
            onClick={() => setBurgerIsOpen(false)}
            to={item.link}
            className="text-[40px] text-white uppercase leading-[120%] font-medium">
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
