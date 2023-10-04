import { useQuery } from '@tanstack/react-query';
import { getPopular, IAPIResponse } from '../api';

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
        <MovieList>
          {data?.map((movie) => (
            <Movie key={movie.id} movie={movie} viewDetail={viewDetail} />
          ))}
      <button className="btn btn-primary">Button</button>
    </div>
  );
};
