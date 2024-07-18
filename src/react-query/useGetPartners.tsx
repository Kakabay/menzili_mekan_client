import menzilService from "@/services/menzil.service";
import { useQuery } from "@tanstack/react-query";

const useGetPartners = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["partnersData"],
    queryFn: () => menzilService.getPartners(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isSuccess,
    isError,
  };
};

export default useGetPartners;
