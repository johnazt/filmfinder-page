"use client";
import { MovieDetails } from "../interfaces";
import { MdOutlineArrowBack } from "react-icons/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoMovieProps {
  detailMovieData: MovieDetails;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const InfoMovies = ({ detailMovieData }: InfoMovieProps) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="py-6 text-4xl">{detailMovieData.title}</h2>
        <Link className="text-lg lg:text-2xl" href={"/"}>
          <MdOutlineArrowBack size={"1.7em"} />
        </Link>
      </div>
      <Image
        src={`${baseUrl}original${detailMovieData?.backdrop_path}`}
        alt={detailMovieData.original_language}
        height={100}
        width={1500}
        className="w-full object-cover object-top max-h-[666px]"
        priority
      />
      <div className="flex py-8 flex-col text-center lg:text-right gap-4 items-center md:flex-row lg:max-w-5xl m-auto">
        <Image
          src={`${baseUrl}original${detailMovieData?.poster_path}`}
          alt={detailMovieData.original_language}
          height={180}
          width={180}
          className="h-auto w-auto object-contain"
          priority
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
