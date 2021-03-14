import { useState } from "react";

import { Display } from "./components/display/Display";

import { Buttons } from "./components/buttonContainer/Buttons";

import "./App.css";

const App = () => {
	//declare local variable for disply text
	const [displayText, setDisplayText] = useState("");
	const [history, setHistory] = useState("");
	const [total, setTotal] = useState();
	const [calculatorOn, setCalculatorOn] = useState(true);

	// receive value when button is clicked
	const handleOnButtonClick = buttonValue => {
		if (total) {
			setTotal(null);
		}

		// total and return
		if (buttonValue === "=") {
			const ttl = eval(displayText);

			// make total prank
			let extra = Math.ceil(Math.random() * 10);
			if (extra > 3) {
				extra = 0;
			}

			setTotal(ttl + extra);
			setHistory(displayText);
			setDisplayText("");
			return;
		}

		//backspace on C click
		if (buttonValue === "C") {
			const str = displayText.slice(0, -1);
			return setDisplayText(str);
		}

		//Empty Display on AC click
		if (buttonValue === "AC") {
			return setDisplayText("");
		}

		// Turn calculator off on OFF clicked

		if (buttonValue === "OFF") {
			return setCalculatorOn(false);
		}

		// concat all the input value
		setDisplayText(displayText + buttonValue);
	};

	return (
		<div className="App">
			<h1 style={{ textAlign: "center", color: "blue" }}>Prank Calculator</h1>
			<div className="container">
				<div className="calculator">
					<div style={{ textAlign: "right", margin: "10px" }}>
						{total && history}
					</div>
					<Display txtDisp={displayText} total={total} history={history} />

					{calculatorOn ? (
						<Buttons buttonClick={handleOnButtonClick} />
					) : (
						<button className="btnOn" onClick={() => setCalculatorOn(true)}>
							ON
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
