import { getQuery } from 'Fetch_API';
import { ListMovie } from 'components/ListMovie/ListMovie';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const serchMovie = newMovie => {
    const query = `${newMovie}`;
    setQuery(query);
  };

  useEffect(() => {
    async function fetchMovie() {
      if (query === '') return;
      try {
        setIsLoading(true);
        const response = await getQuery(query);
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [query]);

  return (
    <>
      <SearchBar onSearch={serchMovie} />
      <ListMovie movies={movies} isLoading={isLoading} />
    </>
  );
};
