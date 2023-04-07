import Image from "next/image";
import React from "react";
import { Movie } from "../interfaces/movie";
import styles from "../../styles/popular.module.css";

interface PopularMoviesProps {
  allPopularMovies: Movie[];
  baseUrl: string;
}

const PopularMovies = ({ allPopularMovies, baseUrl }: PopularMoviesProps) => {
  return (
    <section className="px-4">
      <h2 className="my-4 text-2xl">Películas más populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allPopularMovies.map((m: Movie) => (
          <div
            key={m.id}
            className="border rounded-lg overflow-hidden min-h-[400px]"
          >
            <Image
              src={`${baseUrl}original${m.poster_path}`}
              alt={m.original_language}
              height={200}
              width={200}
              className={`${styles.img}`}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-center">{m.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularMovies;
