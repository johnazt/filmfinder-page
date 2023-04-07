"use client";
import React from "react";
import { Movie } from "../interfaces/movie";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ReleaseMoviesProps {
  allReleaseMovies: Movie[];
  baseUrl: string;
}

const ReleaseMovies = ({ allReleaseMovies, baseUrl }: ReleaseMoviesProps) => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay
      >
        {allReleaseMovies.map((m) => (
          <Link key={m.id} href="/">
            <Image
              src={`${baseUrl}original${m.backdrop_path}`}
              alt={m.original_title}
              height={0}
              width={500}
            />
            <p>{m.title}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ReleaseMovies;
