import { useEffect, useState } from "react";
import { Movie } from "../interfaces";

export const useMovies = (url: string) => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    };

    fetchData();
  }, [url]);

  return data;
};