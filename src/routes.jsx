import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Header from "./components/navigation/header/header";
import Home from "./section/home/home";
import Product from "./section/products/products";
import Contact from "./section/contact/contact";
import Footer from "./components/navigation/footer/footer";
import Profile from "./section/profile/profile";

function RoutesApp() {
	return (
		<Router>
			<Header />
			<Analytics />
			<MainRoutes />
			<Footer />
		</Router>
	);
}

function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:productID" element={<Product />} />
			<Route path="/profile" element={<Profile />}/>
			<Route path="/contact" element={<Contact />}/>
		</Routes>
	);
}

export default RoutesApp;