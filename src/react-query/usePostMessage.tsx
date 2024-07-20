import menzilService from "@/services/menzil.service";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  name: string;
  email: string;
  message: string;
  phone: string;
  file: string | File;
}

const usePostMessage = ({ name, email, message, phone, file }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["postMessage"],
    queryFn: () =>
      menzilService.postContactForm({ name, email, message, phone, file }),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default usePostMessage;
