const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2Q5OTI2YWJhM2FiYzRlYjZjNTFmY2ZhNDhkNzMyMyIsInN1YiI6IjY1ZmQ3NjkyMDQ3MzNmMDE2NGU4OTQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84bPB-R9RIzo38fi89sC4PP1UJlTrpoJ_MgVdZd8aOA';

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + apiKey,
};

const fetchTopRatedMovies = async ({ pageParam }) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json.results;
};
 const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json;
};

export {fetchTopRatedMovies,fetchMovie}