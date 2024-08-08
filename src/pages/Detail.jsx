import { Link, useParams } from "react-router-dom";
import { MainAPI } from "../MainAPI";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function Detail() {
	const { id } = useParams();
	const baseURL = `${MainAPI}/${id}`;
	const [API, setAPI] = useState({});

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
		<div
			style={{
				height: "calc(100vh - 56px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<Button
						variant="primary"
						style={{ fontWeight: "bold", marginBottom: "20px" }}
					>
						Back to Home page
					</Button>
				</Link>
				<div
					style={{
						border: "1px solid #d4d4d4",
						borderRadius: "15px",
						padding: "20px",
						height: "453px",
						position: "relative",
					}}
				>
					{API.glassSurface && (
						<div className="ribbon ribbon-top-left">
							<span>Glass Surface</span>
						</div>
					)}
					<Row style={{ height: "100%" }}>
						<Col
							xs={12}
							md={6}
							style={{ height: "100%", textAlign: "center" }}
						>
							<Image
								variant="top"
								src={API.image}
								style={{
									width: "auto",
									height: "100%",
									objectFit: "cover",
									borderRadius: "15px",
								}}
							/>
						</Col>
						<Col xs={12} md={6}>
							<h1 style={{ fontWeight: "bold" }}>
								{API.artName}
							</h1>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Price:
								</span>{" "}
								{API.price}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Brand:
								</span>{" "}
								{API.brand}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Description:
								</span>{" "}
								{API.description}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Limited Time Deal:
								</span>{" "}
								{API.limitedTimeDeal > 0
									? `${API.limitedTimeDeal * 100}%`
									: "There is no deal here"}
							</p>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}
