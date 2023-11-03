import React from "react";
import { Movie } from "../interfaces/movie";

export const useMovies = (url: string) => {
  const [data, setData] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    };

    fetchData();
  }, [url]);

  return data;
};
