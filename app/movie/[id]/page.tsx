import React from "react";
import InfoMovies from "../../../components/InfoMovies";
import CastMovies from "../../../components/CastMovies";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const DetailsMovie = ({ params }: { params: { id: string } }) => {
  async function getDetailsMovie() {
    return await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=es-ES`
      )
    ).json();
  }
  async function getCastMovie() {
    return await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}&language=es-ES`
      )
    )
      .json()
      .then((res) => res.cast);
  }

  const detailMovieData = React.use(getDetailsMovie());
  const castMovieData = React.use(getCastMovie());

  return (
    <main className="container lg:container-md mx-auto px-4 lg:w-[1140px]">
      <InfoMovies detailMovieData={detailMovieData} />
      <CastMovies castMovieData={castMovieData} />
    </main>
  );
};

export default DetailsMovie;
