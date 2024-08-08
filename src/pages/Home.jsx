import { useEffect, useState } from "react";
import { MainAPI } from "../MainAPI";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
	const baseURL = `${MainAPI}`;
	const [API, setAPI] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			await fetch(baseURL, {
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((response) => {
					if (!response.ok)
						throw new Error("Network response was not ok");
					return response.json();
				})
				.then((data) => setAPI(data))
				.catch((error) => console.log(error));
		};

		fetchAPI();
	}, [baseURL]);

	return (
		<div>
			<Container style={{ padding: "50px 0" }}>
				<Row>
					{API.map((art) => {
						if (art.limitedTimeDeal !== 0) return null;
						return (
							<Col
								xs={12}
								md={4}
								key={art.id}
								style={{ marginTop: "30px" }}
							>
								<Card style={{ width: "100%", height: "100%" }}>
									<Link
										to={`/detail/${art.id}`}
										style={{ textAlign: "center" }}
									>
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
										<Card.Text>
											Price: {art.price}
										</Card.Text>
										<Card.Text
											style={{
												fontStyle: "italic",
												color: `${
													art.glassSurface
														? "#1376f8"
														: "tomato"
												}`,
												fontWeight: "bold",
											}}
										>
											{art.glassSurface
												? "This is a Glass Surface"
												: "This is not a Glass Surface"}
										</Card.Text>
										<Card.Text>
											Brand: {art.brand}
										</Card.Text>
										<Link to={`/detail/${art.id}`}>
											<Button
												variant="primary"
												style={{
													width: "100%",
													fontWeight: "bold",
												}}
											>
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
