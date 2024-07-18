import menzilService from "@/services/menzil.service";
import { useQuery } from "@tanstack/react-query";

const useGetHomeServices = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["homeServicesData"],
    queryFn: () => menzilService.getHomeServices(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetHomeServices;
