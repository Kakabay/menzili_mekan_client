import menzilService from '@/services/menzil.service';
import { useQuery } from '@tanstack/react-query';

const useGetContactUs = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['contactUsData'],
    queryFn: () => menzilService.getContactUs(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetContactUs;
