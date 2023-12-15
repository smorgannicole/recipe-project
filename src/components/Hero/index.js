import BigCircle from "../BigCircle";

const Hero = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col d-flex text-center justify-content-center">
					<h1>Visual Design & Web Development</h1>
				</div>
			</div>
			<div className="row">
				<div className="col d-flex text-center justify-content-center">
					<h2>From Park City, Utah</h2>
				</div>
			</div>
			<div className="d-flex align-items-center flex-wrap justify-content-center">
				<BigCircle text="Design" color="#ES563B" />
				<BigCircle text="Develop" color="#EB9D3A" />
				<BigCircle text="Support" color="#7BB06C" />
				<BigCircle text="Host" color="#00AAA9" />
			</div>
		</div>
	);
};

export default Hero;
