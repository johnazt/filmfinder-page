"use client";
import React from "react";
import { MovieDetails } from "../interfaces";
import Image from "next/image";

interface InfoMovieProps {
  detailMovieData: MovieDetails;
  baseUrl: string;
}

const InfoMovies = ({ detailMovieData, baseUrl }: InfoMovieProps) => {
  return (
    <section>
      <h2 className="py-6 text-4xl">{detailMovieData.title}</h2>
      <Image
        src={`${baseUrl}original${detailMovieData.backdrop_path}`}
        alt={detailMovieData.original_language}
        height={200}
        width={200}
        className="w-full object-cover max-h-[350px]"
        loading="lazy"
      />
      <div className="flex py-8 flex-col text-center lg:text-right gap-4 items-center md:flex-row lg:max-w-5xl m-auto">
        <Image
          src={`${baseUrl}original${detailMovieData?.poster_path}`}
          alt={detailMovieData.original_language}
          height={180}
          width={180}
          className="h-auto w-auto"
          loading="lazy"
        />
        <p className="lg:text-xl">
          {detailMovieData.overview
            ? detailMovieData.overview
            : "Descripción no disponible"}
        </p>
      </div>
    </section>
  );
};
export default InfoMovies;
