"use client";
import React, { useState } from "react";
import { Actor } from "../interfaces/actor";
import Image from "next/image";

interface CastMoviesProps {
  castMovieData: Actor[];
  baseUrl: string;
}

const CastMovies = ({ castMovieData, baseUrl }: CastMoviesProps) => {
  const [showAllActors, setShowAllActors] = useState(false);
  const actorsToDisplay = showAllActors
    ? castMovieData
    : castMovieData.slice(0, 12);

  const onError = (e: any) => {
    e.target.src = "/assets/default-image.jpg";
  };

  return (
    <section className="my-6">
      <h2 className="py-4 text-2xl">Reparto</h2>
      <div className="grid grid-cols-2 gap-4 items-center justify-center sm:grid-cols-3 md:grid-cols-4 mb-6 lg:grid-cols-5">
        {actorsToDisplay.map((actor) => (
          <div key={actor.id}>
            <Image
              src={
                actor.profile_path
                  ? `${baseUrl}/original/${actor?.profile_path}`
                  : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              }
              alt={`Foto de ${actor.name}`}
              width={170}
              height={200}
              className="h-auto w-full"
              loading="lazy"
            />
            <p className="text-lg font-medium">{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
      {!showAllActors && (
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded my-4 mx-auto block lg:text-2xl lg:my-16"
          onClick={() => setShowAllActors(true)}
        >
          Ver más
        </button>
      )}
    </section>
  );
};

export default CastMovies;
