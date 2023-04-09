import React from "react";
import { ReleaseMovies, PopularMovies } from "../components";

const Home = () => {
  return (
    <main className="container mx-auto px-4">
      <ReleaseMovies />
      <PopularMovies />
    </main>
  );
};

export default Home;
