import menzilService from '@/services/menzil.service';
import { useQuery } from '@tanstack/react-query';

const useGetMainServices = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['mainServicesData'],
    queryFn: () => menzilService.getMainServices(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetMainServices;
