import { useRef } from 'react';
import { useHover } from 'usehooks-ts';
import Container from '../Container';
import clsx from 'clsx';
import Button from '../ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useOnClickOutside } from 'usehooks-ts';
import menzilService from '@/services/menzil.service';
import { useForm } from 'react-hook-form';

// const selectOptions = [
//   {
//     id: 0,
//     value: "10,000 - 50,000 conventional unit",
//   },
//   {
//     id: 1,
//     value: "50,000 - 100,000 conventional unit",
//   },
//   {
//     id: 2,
//     value: "Higher than 250,000 conventional unit",
//   },
//   {
//     id: 3,
//     value: "To be discussed",
//   },
// ];

const phoneNumberRegex = /^\+\d{11}$/;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  name: z.string({ required_error: 'Fill in the blank!' }).min(2, 'Min length 2 symbols'),
  email: z.string({ required_error: 'Fill in the blank!' }).email('Invalid e-mail address'),
  phone: z
    .string({ message: 'Fill in the blank!' })
    .refine((value) => phoneNumberRegex.test(value.trim()), {
      message: 'Fill in the following format +993 6X XXXXXX',
    }),
  message: z.string({ required_error: 'Fill in the blank!' }).min(5, 'Min length 5 symbols'),
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `Файл должен быть меньше ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
    })
    .optional(), // Запятая добавлена здесь
});

type FormFields = z.infer<typeof schema>;

const Form = () => {
  // const [selectOpened, setSelectOpened] = useState(false);
  // const [activeSelectId, setActiveSelectId] = useState(0);
  // const [optionSelected, setOptionSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const uploadFileRef = useRef<HTMLDivElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const isHover = useHover(uploadFileRef);

  const {
    register,
    handleSubmit,
    // setError,
    setValue,
    reset,

    formState: { errors, isSubmitSuccessful, isLoading },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  // const handleSelectOption = (id: number) => {
  //   setSelectOpened(false);
  //   setActiveSelectId(id);
  //   // setOptionSelected(true);
  //   setValue("budget", selectOptions[id].value, { shouldValidate: true });
  // };

  const handleClickOutsideSelect = () => {
    // setSelectOpened(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setValue('file', files[0]); // Устанавливаем первый файл из FileList
    }
  };

  useOnClickOutside(selectRef, handleClickOutsideSelect);

  const onSubmit = async (data: FormFields) => {
    const body = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      file: inputFileRef.current?.files?.[0],
    };

    console.log(inputFileRef.current?.files?.[0]);

    try {
      menzilService.postContactForm(body);
      // await axios.post("https://menzilmekan.com.tm/app/api/v1/contact", user);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="section-mt">
      <Container>
        <form
          className="flex flex-col gap-10 items-center max-w-[580px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center flex flex-col gap-2">
            <h4 className="text-[15px] leading-[130%] md:leading-[150%] md:text-[16px] text-gray"></h4>
          </div>

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
                    'block w-full border-b  outline-none  text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200',
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
              {/* <div className="flex flex-col gap-[8px]">
                <div className="relative ">
                  <input
                    {...register('budget')}
                    // onClick={() => setSelectOpened((prev) => !prev)}
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
                )} */}
              <div ref={uploadFileRef} className="relative cursor-pointer sm:mt-0 mt-6">
                <input
                  {...register('file')}
                  ref={inputFileRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".rar, .pdf, .png, .jpeg, .jpg"
                  className={clsx(
                    'border-b-[1px] relative z-[100] border-b-orochimaru w-full py-2 file:hidden cursor-pointer text-uniformGrey transition-all duration-200 text-opacity-0 hover:text-opacity-0',
                  )}
                />
                <div
                  className={clsx('absolute bottom-2 transition-all left-0 text-uniformGrey', {
                    'text-[#808080]': isHover,
                  })}>
                  {inputFileRef.current?.value ? (
                    inputFileRef.current?.value
                  ) : (
                    <div>
                      Please upload your file <br className="sm:hidden" /> (rar or pdf, less than 15
                      MB)
                    </div>
                  )}
                </div>
                <img
                  src="/form/upload.svg"
                  alt="upload"
                  className="absolute top-2 right-0 h-6 w-6"
                />
              </div>
              {/* {render && !inputFileRef.current?.files?.[0] && (
                <span className="text-lust leading-[18.2px] text-[14px]">File is not upload</span>
              )} */}
            </div>

            {/* <AnimatePresence>
              {selectOpened && (
                <motion.div
                  ref={selectRef}
                  className="flex flex-col border-orochimaru absolute top-[100%] left-0 right-0 z-20 bg-white"
                  initial={{
                    opacity: 0,
                    y: "-5%",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                  }}
                  exit={{
                    opacity: 0,
                    y: "-5%",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {selectOptions.map((option) => (
                    <span
                      key={v4()}
                      className={clsx(
                        "py-[4px] cursor-pointer px-[8px] text-[16px] text-eerieBlack leading-[24px] block hover:bg-blue hover:text-white transition-all duration-200",
                        {
                          "bg-blue text-white": option.id === activeSelectId,
                        }
                      )}
                      onClick={() => handleSelectOption(option.id)}
                    >
                      {option.value}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>
          {/* </div> */}

          <div className="flex flex-col gap-[24px] items-center">
            <div className="flex sm:flex-row flex-col items-center gap-[8px]">
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_37_3180)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
 */}
              <span
                className={clsx('text-[16px] leading-[130%] text-eerieBlack text-center', {
                  'text-green-600': isSubmitSuccessful,
                })}>
                {isSubmitSuccessful
                  ? 'Application sent successfully!'
                  : 'To send an application you need to fill in all fields'}
              </span>
            </div>
            <button
              className="font-bold relative transition-all"
              type="submit"
              disabled={isLoading}>
              <Button type="primary" text={isLoading ? 'Loading...' : 'send request'} />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
