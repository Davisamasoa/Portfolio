import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Default } from "./pages/default";
import { ThankYou } from "./pages/thanks";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Default />} />
				<Route exact path="/thanks" element={<ThankYou />} />
			</Routes>
		</BrowserRouter>
	);
}
