"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Movie } from "../interfaces";

interface ContextProps {
  popularData: Movie[]; // o any[]
  releaseData: Movie[];
  baseUrl: string;
}

const GlobalContext = createContext<ContextProps>({
  popularData: [],
  releaseData: [],
  baseUrl: "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [popularData, setPopularData] = useState<Movie[]>([]);
  const [releaseData, setReleaseData] = useState<Movie[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setPopularData(data.results);
    };

    getPopularMovies();
  }, []);

  useEffect(() => {
    const getReleaseMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`
      );
      const data = await response.json();
      setReleaseData(data.results);
    };

    getReleaseMovies();
  }, []);

  return (
    <GlobalContext.Provider value={{ popularData, baseUrl, releaseData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
