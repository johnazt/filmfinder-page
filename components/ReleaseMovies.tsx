"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useGlobalContext } from "../context/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const ReleaseMovies = () => {
  const { releaseData } = useGlobalContext();
  return (
    <div>
      <h2 className="my-2 text-2xl">Películas en Estreno</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay
      >
        {releaseData.map((m) => (
          <Link key={m.id} href={`/movie/${m.id}`} className="block">
            <div className="relative h-96">
              <Image
                src={`${baseUrl}original${m?.backdrop_path}`}
                alt={m.original_title}
                height={0}
                width={500}
                className="h-full w-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90"></div>
              <div className="absolute inset-0 flex justify-center items-end">
                <p className="text-white text-center text-2xl mb-8">
                  {m.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ReleaseMovies;
