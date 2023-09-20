import { getCast } from 'Fetch_API';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Cast.style';

const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    const response = await getCast(movieID);
    setActors(response);
  };
  fetchActors();

  return (
    <>
      {actors.cast && (
        <List>
          {actors.cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width={150}
                />
                <p>{actor.name}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Cast;
