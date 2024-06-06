import { useRef, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../Container';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 } from 'uuid';
import { useOnClickOutside } from 'usehooks-ts';

const selectOptions = [
  {
    id: 0,
    value: '10,000 - 50,000 conventional unit',
  },
  {
    id: 1,
    value: '50,000 - 100,000 conventional unit',
  },
  {
    id: 2,
    value: 'Higher than 250,000 conventional unit',
  },
  {
    id: 3,
    value: 'To be discussed',
  },
];

const phoneNumberRegex = /^\+\d{11}$/;

const schema = z.object({
  name: z.string({ required_error: 'Fill in the blank!' }).min(2, 'Min length 2 symbols'),
  email: z.string({ required_error: 'Fill in the blank!' }).email('Invalid e-mail address'),
  phone: z
    .string({ message: 'Fill in the blank!' })
    .refine((value) => phoneNumberRegex.test(value.trim()), {
      message: 'Fill in the following format +993 6X XXXXXX',
    }),
  message: z.string({ required_error: 'Fill in the blank!' }).min(5, 'Min length 5 symbols'),
  budget: z.string({ required_error: 'Select your budget' }).min(2, 'Select your budget'),
});

type FormFields = z.infer<typeof schema>;

const Form = () => {
  const [selectOpened, setSelectOpened] = useState(false);
  const [activeSelectId, setActiveSelectId] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    // setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const handleSelectOption = (id: number) => {
    setSelectOpened(false);
    setActiveSelectId(id);
    setOptionSelected(true);
    setValue('budget', selectOptions[id].value, { shouldValidate: true });
  };

  const handleClickOutsideSelect = () => {
    setSelectOpened(false);
  };

  useOnClickOutside(selectRef, handleClickOutsideSelect);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section className="section-mt">
      <Container>
        <form
          className="flex flex-col gap-10 items-center max-w-[580px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}>
          <SectionTitle
            type="small"
            text="START YOUR PROJECT"
            subtitle="Do you have an idea or project that need our help? We love to hear!"
          />
          <div className="flex flex-col w-full gap-4 sm:gap-6">
            <div className="flex flex-col gap-[8px]">
              <input
                {...register('name')}
                type="text"
                className={clsx(
                  'block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200',
                  {
                    'border-orochimaru': !errors.name,
                  },
                  {
                    'border-lust': errors.name,
                  },
                )}
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="text-lust leading-[18.2px] text-[14px]">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex sm:flex-row flex-col gap-[16px]">
              <div className="flex w-full flex-col gap-[8px]">
                <input
                  {...register('email')}
                  type="text"
                  className={clsx(
                    'block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200',
                    {
                      'border-orochimaru': !errors.email,
                    },
                    {
                      'border-lust': errors.email,
                    },
                  )}
                  placeholder="Your email"
                />
                {errors.email && (
                  <span className="text-lust leading-[18.2px] text-[14px]">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-[8px]">
                <input
                  {...register('phone')}
                  type="text"
                  className={clsx(
                    'block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200',
                    {
                      'border-orochimaru': !errors.phone,
                    },
                    {
                      'border-lust': errors.phone,
                    },
                  )}
                  placeholder="Your phone"
                />
                {errors.phone && (
                  <span className="text-lust leading-[18.2px] text-[14px]">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="text-area flex flex-col w-full gap-[100px]">
              <label
                htmlFor="message"
                className="text-uniformGrey hover:text-gray focus:text-eerieBlack">
                Describe your request. Details like reference links or target deadline would
                definitely help.
              </label>
              <div className="flex w-full flex-col gap-[8px]">
                <input
                  {...register('message')}
                  type="text"
                  id="message"
                  className={clsx(
                    'block w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200',
                    {
                      'border-orochimaru': !errors.message,
                    },
                    {
                      'border-lust': errors.message,
                    },
                  )}
                />
                {errors.message && (
                  <span className="text-lust leading-[18.2px] text-[14px]">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col gap-[8px]">
                <div className="relative ">
                  <input
                    {...register('budget')}
                    onClick={() => setSelectOpened((prev) => !prev)}
                    type="text"
                    className={clsx(
                      'block group cursor-pointer placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray transition-all duration-200',
                      {
                        'border-transparent hover:border-transparent hover:placeholder-uniformGrey':
                          selectOpened,
                        'border-orochimaru hover:border-gray': !selectOpened && !errors.budget,
                        'hover:text-eerieBlack ': optionSelected,
                        'border-lust': errors.budget,
                      },
                    )}
                    placeholder="Please select your budget range"
                    value={optionSelected ? selectOptions[activeSelectId].value : ''}
                    readOnly={true}
                  />
                  <svg
                    className={clsx(
                      'absolute right-0 top-[50%] -translate-y-[50%] transition-all duration-200 fill-uniformGrey group-hover:fill-red group-focus:fill-eerieBlack',
                      {
                        'fill-eerieBlack group-hover:fill-eerieBlack': optionSelected,
                        'fill-uniformGrey group-hover:fill-gray': !optionSelected,
                        'rotate-180': selectOpened,
                      },
                    )}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.55 15.4875C11.799 15.7365 12.2028 15.7365 12.4519 15.4875L20.9403 6.99908C21.2332 6.70619 21.708 6.70619 22.0009 6.99908C22.2938 7.29197 22.2938 7.76685 22.0009 8.05974L12.5024 17.5583C12.2254 17.8352 11.7764 17.8352 11.4995 17.5583L2.00092 8.05974C1.70802 7.76685 1.70803 7.29197 2.00092 6.99908C2.29381 6.70619 2.76869 6.70619 3.06158 6.99908L11.55 15.4875Z"
                      fill="current"
                    />
                  </svg>
                </div>
                {errors.budget && (
                  <span className="text-lust leading-[18.2px] text-[14px]">
                    {errors.budget.message}
                  </span>
                )}
              </div>

              <AnimatePresence>
                {selectOpened && (
                  <motion.div
                    ref={selectRef}
                    className="flex flex-col border-orochimaru absolute top-[100%] left-0 right-0 z-20 bg-white"
                    initial={{
                      opacity: 0,
                      y: '-5%',
                    }}
                    animate={{
                      opacity: 1,
                      y: '0%',
                    }}
                    exit={{
                      opacity: 0,
                      y: '-5%',
                    }}
                    transition={{
                      duration: 0.2,
                    }}>
                    {selectOptions.map((option) => (
                      <span
                        key={v4()}
                        className={clsx(
                          'py-[4px] cursor-pointer px-[8px] text-[16px] text-eerieBlack leading-[24px] block hover:bg-blue hover:text-white transition-all duration-200',
                          {
                            'bg-blue text-white': option.id === activeSelectId,
                          },
                        )}
                        onClick={() => handleSelectOption(option.id)}>
                        {option.value}
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-center">
            <div className="flex sm:flex-row flex-col items-center gap-[8px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_37_3180)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 5C11.4477 5 11 5.44772 11 6V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V6C13 5.44772 12.5523 5 12 5ZM12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z"
                    fill="#1A1A1A"
                  />
                  <circle cx="12" cy="12" r="11.25" stroke="#1A1A1A" stroke-width="1.5" />
                </g>
                <defs>
                  <clipPath id="clip0_37_3180">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-[16px] leading-[130%] text-eerieBlack text-center">
                To send an application you need to fill in all fields
              </span>
            </div>
            <button className="font-bold" type="submit" disabled={isSubmitting}>
              <Button type="primary" text="send request" />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
