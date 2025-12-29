import { fetcher } from "@/utils/helpers";
import useSWR from "swr";

type useDataProps = {
  endpoint: string;
}

type useDataReturn<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}


export const useData = <T>({ endpoint }: useDataProps): useDataReturn<T> => {

  const { data, isLoading, error } = useSWR(endpoint, fetcher);

  return { data: data, isLoading: isLoading, error: error };
}