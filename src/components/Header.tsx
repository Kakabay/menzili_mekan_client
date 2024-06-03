import Container from './Container';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import LanguageDropdown from './ui/LanguageDropdown';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

interface IProps {
  position: 'fixed' | 'normal';
}

const Header = ({ position }: IProps) => {
  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY > 100 ? true : false);
  };

  console.log(scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={clsx('z-20 transition-all duration-300', {
        'fixed top-0 left-0 right-0': position === 'fixed',
        'bg-white/100 text-black drop-shadow-headerShadow': scrollY,
        'bg-white/0 text-white': !scrollY,
      })}>
      <Container>
        <nav
          className={clsx(
            'flex items-center justify-center uppercase  text-base font-[500] leading-[24px] tracking-[3%]',
            {
              'gap-[56px] py-[48px]': !scrollY,
              'gap-8 py-6': scrollY,
            },
          )}>
          <Link to={'/'}>home</Link>
          <Link to={'/works'}>cartoons</Link>
          <Link to={'/'}>
            <AnimatePresence>
              {scrollY ? (
                <motion.img
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  src="/scroll-logo.svg"
                />
              ) : (
                <motion.img
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  src="/logo-text.svg"
                  alt="logo"
                />
              )}
            </AnimatePresence>
          </Link>
          <Link to={'/services'}>services</Link>
          <Link to={'/contact'}>contact</Link>
        </nav>
        <div
          className={clsx('absolute right-[80px] text-white', {
            'top-[56px]': !scrollY,
            'top-[44px]': scrollY,
          })}>
          <LanguageDropdown scrollY={scrollY} />
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
