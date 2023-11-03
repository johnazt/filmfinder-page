"use client";
import React from "react";
import { Movie } from "../interfaces/movie";
import { useMovies } from "../hooks/useMovies";

interface ContextProps {
  popularData: Movie[];
  releaseData: Movie[];
}

const GlobalContext = React.createContext<ContextProps>({
  popularData: [],
  releaseData: [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1&region=US`;
  const popularData = useMovies(popularUrl);

  const releaseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1&region=US`;
  const releaseData = useMovies(releaseUrl);

  return (
    <GlobalContext.Provider value={{ popularData, releaseData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
