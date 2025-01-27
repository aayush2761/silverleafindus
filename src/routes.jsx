import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/navigation/header/header";
import Home from "./section/home/home";
import Product from "./section/products/products";
import UserProfile from "./section/profile/userProfile";
import Footer from "./components/navigation/footer/footer";

function RoutesApp() {
	return (
		<Router>
			<Header />
			{/* <MainRoutes /> */}
			<Footer />
		</Router>
	);
}

function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:productID" element={<Product />} />
			<Route path="/user" element={<UserProfile />} />
		</Routes>
	);
}

export default RoutesApp;