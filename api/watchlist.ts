export const fetchWatchlistMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/account/21050033/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2Q5OTI2YWJhM2FiYzRlYjZjNTFmY2ZhNDhkNzMyMyIsInN1YiI6IjY1ZmQ3NjkyMDQ3MzNmMDE2NGU4OTQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84bPB-R9RIzo38fi89sC4PP1UJlTrpoJ_MgVdZd8aOA',
      },
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const json = await res.json();
    return json.results;
  };
  
  export const addMovieToWatchList = async (movieId: number) => {
    const url = 'https://api.themoviedb.org/3/account/21050033/watchlist';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2Q5OTI2YWJhM2FiYzRlYjZjNTFmY2ZhNDhkNzMyMyIsInN1YiI6IjY1ZmQ3NjkyMDQ3MzNmMDE2NGU4OTQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84bPB-R9RIzo38fi89sC4PP1UJlTrpoJ_MgVdZd8aOA',
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        watchlist: true,
      }),
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const json = await res.json();
    return json;
  };