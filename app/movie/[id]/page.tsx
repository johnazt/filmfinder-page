import React, { use } from "react";
import InfoMovies from "../../components/InfoMovies";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/";

const DetailsMovie = ({ params }: { params: { id: string } }) => {
  async function getDetailsMovie() {
    return await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
      )
    ).json();
  }

  const detailMovieData = use(getDetailsMovie());
  console.log(detailMovieData);
  return (
    <main className="container mx-auto px-4">
      <InfoMovies detailMovieData={detailMovieData} baseUrl={baseUrl} />
      {/* <CastMovies allCastMovie={allCastMovie} baseUrl={baseUrl} /> */}
    </main>
  );
};

export default DetailsMovie;
