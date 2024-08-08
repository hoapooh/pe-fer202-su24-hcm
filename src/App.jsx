import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ArtTools from "./pages/ArtTools";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Detail from "./pages/Detail";

function App() {
	return (
		<>
			<NavBar />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/arttools" element={<ArtTools />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
