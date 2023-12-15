import Button from "../Button";
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const handleDecrement = () => {
		setCount(count - 1);
	};
	const handleIncrement = () => {
		setCount(count + 1);
	};
	return (
		<div className="d-flex align-items-center gap-3">
			<Button action={handleDecrement} ghost={true} color="secondary">
				-
			</Button>
			<span>{count}</span>
			<Button action={handleIncrement} ghost={true} color="secondary">
				+
			</Button>
		</div>
	);
};

export default Counter;
