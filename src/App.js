import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MoviesContainer from "./components/MoviesContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Hero />
			<MoviesContainer />
		</div>
	);
};

export default App;
