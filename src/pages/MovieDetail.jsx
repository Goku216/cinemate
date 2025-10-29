import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Backup from "../assets/backup.png";
import { useTitle } from "../hooks/useTitle";
import { Play } from "lucide-react";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);

  useTitle(movie.title);
  console.log(movie.id)

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <div className="flex items-center gap-8 justify-start my-3">
            <h1 className="text-4xl font-bold text-center lg:text-left">
              {movie.title}
            </h1>
            <Link to={`/playing/movie/${movie.id}`}>
              <button className="relative group" aria-label="Play video">
                {/* Outer glow effect */}
                <div
                  className={`absolute inset-0 rounded-lg bg-red-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Button */}
                <div
                  className={`relative px-3 py-1 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center gap-2 shadow-lg transition-all duration-200 
          hover:scale-105 hover:shadow-xl scale-100 `}
                >
                  <Play className="w-5 h-5 text-white fill-white" />
                  <span className="text-white font-semibold text-lg">Play</span>
                </div>
              </button>
            </Link>
          </div>
          <p className="my-4">{movie.overview}</p>

          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreffer"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
