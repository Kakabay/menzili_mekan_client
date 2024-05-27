import { useState } from 'react';
import { v4 } from 'uuid';
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

      {open && (
        <div className="flex flex-col gap-[4px] items-center">
          {languages
            .filter((language) => language !== activeLanguage)
            .map((item) => (
              <div
                key={v4()}
                className="flex items-center justify-center py-[2px] px-[3px] cursor-pointer"
                onClick={() => handleLanguageClick(item)}>
                <span className="uppercase text-[14px] leading-[19.6px] tracking-[-3%]">
                  {item}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
