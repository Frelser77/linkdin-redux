import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Container>
					<Routes>
						<Route path="/profile/:userId" element={<Profile />} />
						<Route path="/notFound" element={<NotFound />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
