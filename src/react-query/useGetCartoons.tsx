import menzilService from '@/services/menzil.service';
import { useQuery } from '@tanstack/react-query';

const useGetCartoons = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['cartoonsData'],
    queryFn: () => menzilService.getCartoons(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCartoons;
