import { getReviews } from 'Fetch_API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getReviews(movieID);
      setReviews(response.results);
    };
    fetchReviews();
  }, [movieID]);

  return (
    <>
      {!reviews.results ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
