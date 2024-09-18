import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			style={{ cssText: "background-color: #151514 !important" }}
		>
			<Container fluid>
				<Link
					to={"/"}
					style={{
						padding: "5px 0",
						color: "#fff",
						fontWeight: "bold",
						textDecoration: "none",
						fontSize: "1.4rem",
						marginRight: "10px",
					}}
				>
					Art Tools
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link
							to={"/"}
							style={{
								color: "#fff",
								textDecoration: "none",
								padding: "8px",
							}}
						>
							Home
						</Link>
						<Link
							to={"/hoapooh"}
							style={{
								color: "#fff",
								textDecoration: "none",
								padding: "8px",
							}}
						>
							Art Tools
						</Link>
						<Link
							to={"/contact"}
							style={{
								color: "#fff",
								textDecoration: "none",
								padding: "8px",
							}}
						>
							Contact
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
