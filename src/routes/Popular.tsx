import { useQuery } from '@tanstack/react-query';
import { getPopular, IMovie } from '../api';

export const Popular = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['popularData'],
    queryFn: getPopular,
  });

  const movies = data.results;
  return (
    <div>
      <h1>Popular</h1>
      {isLoading
        ? 'LOADING'
        : movies.map((movie: IMovie) => <Movie key={movie.id} />)}
      <button className="btn btn-primary">Button</button>
    </div>
  );
};
