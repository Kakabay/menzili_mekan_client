import menzilService from '@/services/menzil.service';
import { useQuery } from '@tanstack/react-query';

const useGetContact = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['contactData'],
    queryFn: () => menzilService.getContact(),
    select: ({ data }) => data.data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetContact;
