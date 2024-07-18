import menzilService from "@/services/menzil.service";
import { useQuery } from "@tanstack/react-query";

const useGetHomeProjects = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["homeProjectsData"],
    queryFn: () => menzilService.getHomeProjects(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetHomeProjects;
