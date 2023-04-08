import React from "react";
import { use } from "react";
import { ReleaseMovies, PopularMovies } from "./components";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/";

async function getReleaseMovies() {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`
    )
  )
    .json()
    .then((res) => res.results);
}

async function getPopularMovies() {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
  )
    .json()
    .then((res) => res.results);
}

const Home = () => {
  const allReleaseMovies = use(getReleaseMovies());
  const allPopularMovies = use(getPopularMovies());

  return (
    <main className="container mx-auto px-4">
      <ReleaseMovies allReleaseMovies={allReleaseMovies} baseUrl={baseUrl} />
      <PopularMovies allPopularMovies={allPopularMovies} baseUrl={baseUrl} />
    </main>
  );
};

export default Home;
