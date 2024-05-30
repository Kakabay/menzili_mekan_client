import { useState } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';

const languages = ['en', 'tm', 'ru', 'tr', 'ch'];
const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(languages[0]);

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
            initial={{
              height: '0%',
            }}
            animate={{
              height: '100%',
            }}
            exit={{
              height: '0%',
            }}
            className="flex flex-col gap-[4px] items-center origin-top overflow-hidden">
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