import { Link, useNavigate, useParams } from "react-router-dom";
import { MainAPI } from "../MainAPI";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useCallback, useEffect } from "react";
import { useFormik } from "formik";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

function Edit() {
	const { id } = useParams();
	const baseURL = `${MainAPI}/${id}`;
	const navigate = useNavigate();

	const fetchAPI = useCallback(() => {
		fetch(baseURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) throw new Error("Network response was not ok");
				return response.json();
			})
			.then((data) => formik.setValues(data))
			.catch((error) => console.log(error));
	}, [baseURL]);

	useEffect(() => {
		fetchAPI();
	}, [fetchAPI]);

	const formik = useFormik({
		initialValues: {
			artName: "",
			image: "",
			glassSurface: false,
			price: 0,
			description: "",
			brand: "",
			limitedTimeDeal: 0,
		},
		onSubmit: (values) => {
			fetch(baseURL, {
				method: "PUT",
				body: JSON.stringify(values),
				headers: { "Content-Type": "application/json" },
				credentials: "same-origin",
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP Status: ${response.status}`);
					}
					return response.json();
				})
				.then(() => {
					toast.success("Update Art Tool successfully!", {
						onClose: () => {
							navigate("/hoapooh");
						},
						autoClose: 1500,
					});
					setTimeout(() => navigate("/hoapooh"), 2000);
				});
		},
		validationSchema: Yup.object({
			artName: Yup.string()
				.required("Required.")
				.test(
					"is-more-than-one-letter",
					"Must be more than one word.",
					(value) => value && value.trim().split(/\s+/).length > 1
				)
				.matches(/^[a-z\s]+$/, "Must be lowercase."),
			image: Yup.string().required("Required").url("Invalid url"),
			price: Yup.number().required("Required.").min(10, "Must be greater or equal to 10."),
			description: Yup.string().required("Required."),
			limitedTimeDeal: Yup.number().required("Required.").max(1, "Must be smaller or equal to 1"),
		}),
	});

	return (
		<div
			className="Add__container"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container fluid="lg">
				<Row className="justify-content-md-center">
					<Col md={12}>
						<Form onSubmit={formik.handleSubmit}>
							<Row>
								<Col md={6}>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Name</Form.Label>
										<Form.Control
											size="lg"
											style={{ fontSize: "18px" }}
											type="text"
											placeholder="name"
											name="artName"
											value={formik.values.artName}
											onChange={formik.handleChange}
										/>
										{formik.touched.artName && formik.errors.artName && (
											<Alert variant="warning">{formik.errors.artName}</Alert>
										)}
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<Form.Label>Brand</Form.Label>
										<Form.Select
											style={{ fontSize: "18px" }}
											aria-label="Default select example"
											name="brand"
											value={formik.values.brand}
											onChange={formik.handleChange}
										>
											<option value="KingArt">KingArt</option>
											<option value="Color Splash">Color Splash</option>
											<option value="Edding">Edding</option>
											<option value="Arteza">Arteza</option>
										</Form.Select>
									</Form.Group>
								</Col>
								<Col md={12}>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Image</Form.Label>
										<Form.Control
											size="lg"
											style={{ fontSize: "18px" }}
											type="text"
											placeholder="image"
											name="image"
											value={formik.values.image}
											onChange={formik.handleChange}
										/>
										{formik.touched.image && formik.errors.image && (
											<Alert variant="warning">{formik.errors.image}</Alert>
										)}
									</Form.Group>
								</Col>
								<Form.Group>
									<Form.Label>Glass Surface or Not ?</Form.Label>
									<Form.Check // prettier-ignore
										type="switch"
										id="custom-switch"
										label={
											formik.values.glassSurface ? "It is Glass Surface" : "It is not Glass Surface"
										}
										name="glassSurface"
										checked={formik.values.glassSurface}
										onChange={formik.handleChange}
									/>
								</Form.Group>

								<Col md={6}>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Price</Form.Label>
										<Form.Control
											size="lg"
											style={{ fontSize: "18px" }}
											type="number"
											step={10}
											placeholder="Price"
											name="price"
											value={formik.values.price}
											onChange={formik.handleChange}
										/>
										{formik.touched.price && formik.errors.price && (
											<Alert variant="warning">{formik.errors.price}</Alert>
										)}
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Limited Deal</Form.Label>
										<Form.Control
											size="lg"
											style={{ fontSize: "18px" }}
											type="number"
											min={0}
											step={0.01}
											placeholder="Date Of Birth"
											name="limitedTimeDeal"
											value={formik.values.limitedTimeDeal}
											onChange={formik.handleChange}
										/>
										{formik.touched.limitedTimeDeal && formik.errors.limitedTimeDeal && (
											<Alert variant="warning">{formik.errors.limitedTimeDeal}</Alert>
										)}
									</Form.Group>
								</Col>
								<Col md={12}>
									<Form.Group>
										<Form.Label>Description</Form.Label>
										<Form.Control
											style={{ fontSize: "18px" }}
											aria-label="Default select example"
											as="textarea"
											name="description"
											value={formik.values.description}
											onChange={formik.handleChange}
										></Form.Control>
									</Form.Group>
									{formik.touched.description && formik.errors.description && (
										<Alert variant="warning">{formik.errors.description}</Alert>
									)}
								</Col>
								<Form.Group style={{ marginTop: "20px" }}>
									<Button variant="primary" type="submit" size="lg">
										Submit
									</Button>
									<Link to={"/hoapooh"} style={{ marginLeft: "10px" }}>
										<Button variant="warning" type="button" size="lg">
											Back to Dashboard
										</Button>
									</Link>
								</Form.Group>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Edit;
