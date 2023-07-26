import React from "react";
import { ReleaseMovies, PopularMovies } from "../components";

const Home = () => {
  return (
    <main className="container lg:container-md mx-auto px-4 lg:w-[1140px]">
      <ReleaseMovies />
      <PopularMovies />
    </main>
  );
};

export default Home;
