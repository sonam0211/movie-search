const defaultState = { movieList: [], movieDetail: null, posterData: null };

const movieListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return { ...state, movieList: action.payload };

    case "FETCH_MOVIE_DETAIL":
      return { ...state, movieDetail: action.payload };

    case "FETCH_POSTER_DATA":
      return { ...state, posterData: action.payload };
    default:
      return state;
  }
};

export default movieListReducer;
