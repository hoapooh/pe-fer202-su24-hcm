import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ArtTools from "./pages/ArtTools";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
	return (
		<>
			<NavBar />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hoapooh" element={<ArtTools />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/add" element={<Add />} />
				<Route path="/edit/:id" element={<Edit />} />
			</Routes>
		</>
	);
}

export default App;
