import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			style={{ cssText: "background-color: #1376f8 !important;" }}
		>
			<Container fluid>
				<Navbar.Brand>
					<Link
						to={"/"}
						style={{
							color: "#fff",
							fontWeight: "bold",
							textDecoration: "none",
						}}
					>
						Art Tools
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link
								to={"/"}
								style={{
									color: "#fff",
									textDecoration: "none",
								}}
							>
								Home
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to={"/arttools"}
								style={{
									color: "#fff",
									textDecoration: "none",
								}}
							>
								Art Tools
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to={"/contact"}
								style={{
									color: "#fff",
									textDecoration: "none",
								}}
							>
								Contact
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
