import { useState } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence, motion, stagger } from 'framer-motion';

const languages = ['en', 'tm', 'ru', 'tr', 'ch'];
const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(languages[0]);

  const langVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const langVarsContainer = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const linkVars = {
    initial: {
      y: '100%',
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    // exit: {
    //   y: '100%',
    //   transition: {
    //     duration: 0.5,
    //   },
    // },
  };

  const handleLanguageClick = (language: string) => {
    setActiveLanguage(language);
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-[4px] items-center">
      <div
        className="border border-white flex items-center justify-center py-[2px] px-[3px] cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}>
        <span className="uppercase text-[14px] leading-[19.6px] tracking-[-3%]">
          {activeLanguage}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={langVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-[4px] items-center origin-top">
            {languages
              .filter((language) => language !== activeLanguage)
              .map((item) => (
                <motion.div
                  variants={linkVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={v4()}
                  className="flex items-center justify-center py-[2px] px-[3px] cursor-pointer origin-top"
                  onClick={() => handleLanguageClick(item)}>
                  <span className="uppercase text-[14px] leading-[19.6px] tracking-[-3%]">
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
