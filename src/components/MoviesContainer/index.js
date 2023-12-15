import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

const getMovies = async () => {
	const url = `https://api.themoviedb.org/3/movie/now_playing?include_adult=false&include_videos=true&language=en-US&page=1&api_key=${process.env.REACT_APP_TMDB_KEY}`;
	const options = {
		method: "GET",
		redirect: "follow",
	};
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		// console.log(data);
		return data.results;
	} catch (error) {
		console.log(error);
	}
};

const MoviesContainer = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getMovies().then((movies) => {
			setMovies(movies);
		});
	}, []);
	return (
		<div className="container">
			<div className="row row-gap-4">
				{movies.length === 0 ? <h1>Loading</h1> : movies.map((movie) => <MovieCard movie={movie} />)}
			</div>
		</div>
	);
};
export default MoviesContainer;
