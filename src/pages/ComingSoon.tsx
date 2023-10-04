import { useQuery } from '@tanstack/react-query';
import { getComingSoon, IMovie } from '@/types';
import { Movie } from '@/components/Movie';

export const ComingSoon = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['popularData'],
    queryFn: getComingSoon,
  });

  const movies = data.results;
  return (
    <div>
      <h1>COMING SOON</h1>
      {isLoading
        ? 'LOADING'
        : movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
      <button className="btn btn-primary">Button</button>
    </div>
  );
};
