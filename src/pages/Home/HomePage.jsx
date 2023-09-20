import { useEffect, useState } from 'react';
import getTrendList from 'Fetch_API';
import { TrendMovies } from '../../components/TrendMovies/TrendMovies';
import { GlobalStyle } from '../../components/GlobalStyles';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const movieList = await getTrendList();
      setTrendMovies(movieList);
      console.log(movieList);
    };
    fetchAPI();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <TrendMovies movies={trendMovies} />
      <GlobalStyle />
    </>
  );
};

export default HomePage;
