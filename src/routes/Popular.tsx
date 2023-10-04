import { useQuery } from '@tanstack/react-query';
import { getPopular, IAPIResponse } from '../api';
import { Loading, Movie, MovieList } from '../components/';
import { useState } from 'react';

export const Popular = () => {
  const [clickedMovie, setClickedMovie] = useState<string | null>(null);

  const { isLoading, data } = useQuery({
    queryKey: ['popularData'],
    queryFn: async () => {
      const data: IAPIResponse = await getPopular();
      return data.results;
    },
  });

  const viewDetail = () => {
    console.log('click');
    setClickedMovie('SYO');
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <MovieList>
          {data?.map((movie) => (
            <Movie key={movie.id} movie={movie} viewDetail={viewDetail} />
          ))}
        </MovieList>
      )}
      {clickedMovie ? 'something is clicked' : 'nothing is clicked'}
      <button className="btn btn-primary">Button</button>
    </div>
  );
};
