import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
// import { useZusBurger } from '@/zustand/useZusBurger';

const languages = ['en', 'tm', 'ru', 'tr', 'ch'];
const LanguageDropdown = ({ scrollY }: { scrollY: boolean }) => {
  const [open, setOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(languages[0]);
  // const burgerIsOpen = useZusBurger((state) => state.burgerIsOpen);

  useEffect(() => {
    setOpen(false);
  }, [scrollY]);

  const handleLanguageClick = (language: string) => {
    setActiveLanguage(language);
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-[4px] items-center relative">
      <div
        className={clsx(
          'border flex items-center justify-center py-[2px] px-[3px] cursor-pointer',
          {
            'border-black': scrollY,
            'border-white': !scrollY,
          },
        )}
        onClick={() => setOpen((prev) => !prev)}>
        <span
          className={clsx('uppercase text-[14px] leading-[19.6px] tracking-[-3%]', {
            'text-black': scrollY,
          })}>
          {activeLanguage}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              // height: '0%',
            }}
            animate={{
              opacity: 1,

              // height: '100%',
            }}
            exit={{
              opacity: 0,

              // height: '0%',
            }}
            transition={{
              duration: 0.3,
            }}
            className={clsx(
              'absolute top-8 left-0 flex flex-col gap-[4px] items-center origin-top overflow-hidden',
              {
                'bg-white/100': scrollY,
                'bg-white/0': !scrollY,
              },
            )}>
            {languages
              .filter((language) => language !== activeLanguage)
              .map((item, index) => (
                <motion.div
                  initial={{
                    y: '-100%',
                    opacity: 0,
                  }}
                  animate={{
                    y: '0%',
                    opacity: 1,
                  }}
                  exit={{
                    y: '-100%',
                    opacity: 0,
                  }}
                  transition={{
                    delay: index * 0.1 + 0.1,
                  }}
                  key={v4()}
                  className="flex items-center justify-center py-[2px] px-[3px] cursor-pointer origin-top"
                  onClick={() => handleLanguageClick(item)}>
                  <span
                    className={clsx('uppercase text-[14px] leading-[19.6px] tracking-[-3%]', {
                      'text-white': !scrollY,
                      'text-black': scrollY,
                    })}>
                    {item}
                  </span>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
