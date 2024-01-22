import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Route path="/" element={Home} />
				<Route path="/notFound" element={NotFound} />
			</div>
		</Router>
	);
}

export default App;
