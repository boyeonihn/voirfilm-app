import { useQuery } from '@tanstack/react-query';
import { getPopular, IAPIResponse } from '../api';
import { Loading, Movie, MovieList } from '../components/';

export const Popular = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['popularData'],
    queryFn: async () => {
      const data: IAPIResponse = await getPopular();
      return data.results;
    },
  });

  const movies = data.results;
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
      <button className="btn btn-primary">Button</button>
    </div>
  );
};
