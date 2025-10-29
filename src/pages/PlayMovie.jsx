import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import React, { useEffect } from "react";

export const PlayMovie = () => {
  useTitle("Player");
  const params = useParams();
  console.log(params);
  useEffect(() => {});
  console.log("Inside movie player");

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-b from-zinc-900 to-black p-4 rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
        <iframe
          src={`https://www.vidking.net/embed/movie/${params.id}`}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Optional overlay gradient for style */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

      {/* Optional floating label or header */}
      <div className="absolute top-6 left-8 text-white font-semibold text-lg bg-black/40 px-4 py-1.5 rounded-lg backdrop-blur-sm">
        🎬 Now Playing
      </div>
    </div>
  );
};
