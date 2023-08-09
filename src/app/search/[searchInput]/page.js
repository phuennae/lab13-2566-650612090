"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true
*/

  const filteredMovies = movieDB.filter((movie) =>
    movie.title
      .toLocaleLowerCase()
      .includes(processedSearchInput.toLocaleLowerCase())
  );

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {filteredMovies.length} result(s)
      </p>
      {filteredMovies.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}