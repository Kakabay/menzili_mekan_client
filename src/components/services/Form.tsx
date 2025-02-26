import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import Container from "../Container";
import clsx from "clsx";
import Button from "../ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import menzilService from "@/services/menzil.service";
import { useForm } from "react-hook-form";

const phoneNumberRegex = /^\+\d{11}$/;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  name: z
    .string({ required_error: "Fill in the blank!" })
    .min(2, "Min length 2 symbols"),
  email: z
    .string({ required_error: "Fill in the blank!" })
    .email("Invalid e-mail address"),
  phone: z
    .string({ message: "Fill in the blank!" })
    .refine((value) => phoneNumberRegex.test(value.trim()), {
      message: "Fill in the following format +993 6X XXXXXX",
    }),
  message: z
    .string({ required_error: "Fill in the blank!" })
    .min(5, "Min length 5 symbols"),
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `Файл должен быть меньше ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
    })
    .optional(),
});

type FormFields = z.infer<typeof schema>;

const Form = () => {
  const uploadFileRef = useRef<HTMLDivElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const isHover = useHover(uploadFileRef);

  const generateSecureRandom = () => {
    const array = new Uint32Array(10);
    crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(36)).slice(-8)).join(
      ""
    );
  };

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    // setError,
    setValue,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setValue("file", files[0]); // Устанавливаем первый файл из FileList
    }
  };

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
      setLoading(true);
      menzilService.postContactForm(body, generateSecureRandom);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-mt">
      <Container>
        <form
          className="flex flex-col gap-10 items-center max-w-[580px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center flex flex-col gap-2">
            <h4 className="text-[15px] leading-[130%] md:leading-[150%] md:text-[16px] text-gray"></h4>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6">
            <div className="flex flex-col gap-[8px]">
              <input
                {...register("name")}
                type="text"
                className={clsx(
                  "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                  {
                    "border-orochimaru": !errors.name,
                  },
                  {
                    "border-lust": errors.name,
                  }
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
                  {...register("email")}
                  type="text"
                  className={clsx(
                    "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                    {
                      "border-orochimaru": !errors.email,
                    },
                    {
                      "border-lust": errors.email,
                    }
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
                  {...register("phone")}
                  type="text"
                  className={clsx(
                    "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                    {
                      "border-orochimaru": !errors.phone,
                    },
                    {
                      "border-lust": errors.phone,
                    }
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
                className="text-uniformGrey hover:text-gray focus:text-eerieBlack"
              >
                Describe your request. Details like reference links or target
                deadline would definitely help.
              </label>
              <div className="flex w-full flex-col gap-[8px]">
                <input
                  {...register("message")}
                  type="text"
                  id="message"
                  className={clsx(
                    "block w-full border-b  outline-none  text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                    {
                      "border-orochimaru": !errors.message,
                    },
                    {
                      "border-lust": errors.message,
                    }
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
              <div
                ref={uploadFileRef}
                className="relative cursor-pointer sm:mt-0 mt-6"
              >
                <input
                  {...register("file")}
                  ref={inputFileRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".rar, .pdf, .png, .jpeg, .jpg"
                  className={clsx(
                    "border-b-[1px] relative z-[100] border-b-orochimaru w-full py-2 file:hidden cursor-pointer text-uniformGrey transition-all duration-200 text-opacity-0 hover:text-opacity-0"
                  )}
                />
                <div
                  className={clsx(
                    "absolute bottom-2 transition-all left-0 text-uniformGrey",
                    {
                      "text-[#808080]": isHover,
                    }
                  )}
                >
                  {inputFileRef.current?.value ? (
                    inputFileRef.current?.value
                  ) : (
                    <div>
                      Please upload your file <br className="sm:hidden" /> (rar
                      or pdf, less than 15 MB)
                    </div>
                  )}
                </div>
                <img
                  src="/form/upload.svg"
                  alt="upload"
                  className="absolute top-2 right-0 h-6 w-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-center">
            <div className="flex sm:flex-row flex-col items-center gap-[8px]">
              <span
                className={clsx(
                  "text-[16px] leading-[130%] text-eerieBlack text-center",
                  {
                    "text-green-600": isSubmitSuccessful,
                  }
                )}
              >
                {isSubmitSuccessful
                  ? "Application sent successfully!"
                  : "To send an application you need to fill in all fields"}
              </span>
            </div>
            <button
              className="font-bold relative transition-all"
              type="submit"
              disabled={loading}
            >
              <Button
                type="primary"
                text={loading ? "Loading..." : "send request"}
              />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
