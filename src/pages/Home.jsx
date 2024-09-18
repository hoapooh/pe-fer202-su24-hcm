import { useEffect, useState } from "react";
import { MainAPI } from "../MainAPI";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Home() {
	const [API, setAPI] = useState([]);
	const sectionRef = useAnimateOnScroll(0.2); // Adjust the delay increment as needed

	useEffect(() => {
		const fetchAPI = async () => {
			await fetch(MainAPI, {
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((response) => {
					if (!response.ok) throw new Error("Network response was not ok");
					return response.json();
				})
				.then((data) => setAPI(data))
				.catch((error) => console.log(error));
		};

		fetchAPI();
	}, []);

	useEffect(() => {
		const currentElements = sectionRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
					}
				});
			},
			{
				threshold: 0.1, // Adjust this value as needed
			}
		);

		currentElements.forEach((element, index) => {
			if (element) {
				element.style.transitionDelay = `${index * 0.2}s`; // Adjust the delay as needed
				observer.observe(element);
			}
		});

		return () => {
			currentElements.forEach((element) => {
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [API, sectionRef]);

	return (
		<div>
			<Container style={{ padding: "50px 0" }}>
				<Row>
					{API.map((art, index) => {
						if (art.limitedTimeDeal !== 0) return null;
						return (
							<Col xs={12} md={4} key={art.id} style={{ marginTop: "30px" }}>
								<Card
									ref={(el) => (sectionRef.current[index] = el)}
									className="element-to-animate"
									style={{ width: "100%", height: "100%" }}
								>
									<Link to={`/detail/${art.id}`} style={{ textAlign: "center" }}>
										<Card.Img
											variant="top"
											src={art.image}
											style={{
												height: "300px",
												width: "auto",
												objectFit: "cover",
											}}
										/>
									</Link>
									<Card.Body>
										<Card.Title>{art.artName}</Card.Title>
										<Card.Text>Price: {art.price}</Card.Text>
										<Card.Text
											style={{
												fontStyle: "italic",
												color: `${art.glassSurface ? "#9362f5" : "tomato"}`,
												fontWeight: "bold",
											}}
										>
											{art.glassSurface ? "This is a Glass Surface" : "This is not a Glass Surface"}
										</Card.Text>
										<Card.Text>Brand: {art.brand}</Card.Text>
										<Link to={`/detail/${art.id}`}>
											<Button variant="primary" className="btn-main-style">
												View Details
											</Button>
										</Link>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}
