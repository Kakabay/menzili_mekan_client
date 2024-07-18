import { useQuery } from "@tanstack/react-query";
import menzilService from "@/services/menzil.service";

const useGetPages = () => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["pagesData"],
    queryFn: () => menzilService.getPages(),
    select: ({ data }) => data.data,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    data,
  };
};

export default useGetPages;
