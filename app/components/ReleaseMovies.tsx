import React from "react";
import { Movie } from "../interfaces/movie";
import Link from "next/link";
import Image from "next/image";

interface ReleaseMoviesProps {
  allReleaseMovies: Movie[];
  baseUrl: string;
}

const ReleaseMovies = ({ allReleaseMovies, baseUrl }: ReleaseMoviesProps) => {
  return (
    <div>
      {allReleaseMovies.map((m) => (
        <Link key={m.id} href="/">
          <Image
            src={`${baseUrl}original${m.backdrop_path}`}
            alt={m.original_title}
            height={200}
            width={200}
          />
          <p>{m.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ReleaseMovies;
