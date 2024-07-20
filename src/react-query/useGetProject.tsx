import menzilService from "@/services/menzil.service";
import { useQuery } from "@tanstack/react-query";

const useGetProject = (id: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["projectData"],
    queryFn: () => menzilService.getProject(id),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetProject;
