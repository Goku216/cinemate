import { useEffect, useState } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [apiPath]);

  return { data };
};
