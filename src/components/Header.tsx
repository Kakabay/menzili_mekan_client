import Container from './Container';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import LanguageDropdown from './ui/LanguageDropdown';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useZusBurger } from '@/zustand/useZusBurger';
import { BurgerMenu } from './header/BurgerMenu';

interface IProps {
  position: 'fixed' | 'normal';
}

const Header = ({ position }: IProps) => {
  const [scrollY, setScrollY] = useState(false);
  const tab = useMediaQuery('(min-width: 980px)');

  const burgerIsOpen = useZusBurger((state) => state.burgerIsOpen);
  const setBurgerIsOpen = useZusBurger((state) => state.setBurgerIsOpen);

  const handleScroll = () => {
    setScrollY(window.scrollY > 20 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={clsx('z-[1000] transition-all duration-300', {
        'fixed top-0 left-0 right-0': position === 'fixed',
        'bg-white/100 text-black drop-shadow-headerShadow': scrollY || burgerIsOpen,
        'bg-white/0 text-white': !scrollY,
      })}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="hidden tab:block w-10 h-10 bg-transparent"></div>
          <nav
            className={clsx(
              'flex items-center justify-center uppercase text-base font-[500] leading-[130%] tracking-[3%]',
              {
                'gap-[56px] py-6 tab:py-[48px]': !scrollY,
                'gap-8 py-6': scrollY || burgerIsOpen,
              },
            )}>
            <Link to={'/'} className="hidden tab:block">
              home
            </Link>
            <Link to={'/works'} className="hidden tab:block">
              cartoons
            </Link>
            <Link to={'/'}>
              <AnimatePresence>
                {scrollY || burgerIsOpen ? (
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
                    src={tab ? '/scroll-logo.svg' : 'mob-logo.svg'}
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
            <Link to={'/services'} className="hidden tab:block">
              services
            </Link>
            <Link to={'/contact'} className="hidden tab:block">
              contact
            </Link>
          </nav>
          <div className="flex items-center gap-6 tab:mr-4 mr-0">
            {!burgerIsOpen && <LanguageDropdown scrollY={scrollY} />}
            <div
              onClick={() => setBurgerIsOpen(!burgerIsOpen)}
              className="tab:hidden flex flex-col items-center justify-center gap-1 w-6 h-6 cursor-pointer">
              <div
                className={clsx('w-[17.5px] h-[2px] rounded-[10px]', {
                  'bg-white': !scrollY,
                  'bg-black': scrollY,
                  'bg-black/100 rotate-[45deg] translate-y-[2px]': burgerIsOpen,
                })}></div>
              <div
                className={clsx('w-[17.5px] h-[2px] rounded-[10px]', {
                  'bg-white': !scrollY,
                  'bg-black': scrollY,
                  'bg-black/100 hidden': burgerIsOpen,
                })}></div>
              <div
                className={clsx('w-[17.5px] h-[2px] rounded-[10px]', {
                  'bg-white': !scrollY,
                  'bg-black': scrollY,
                  'bg-black/100 rotate-[-45deg] translate-y-[-4px]': burgerIsOpen,
                })}></div>
            </div>
          </div>
        </div>
      </Container>
      <AnimatePresence>{burgerIsOpen && <BurgerMenu />}</AnimatePresence>
    </motion.header>
  );
};

export default Header;
