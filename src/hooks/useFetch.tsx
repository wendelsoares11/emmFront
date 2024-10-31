import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

function useFetch<T>(url: string, token?: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(url, {
            headers: token ? { Authorization: `Token ${token}` } : undefined
        });
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
