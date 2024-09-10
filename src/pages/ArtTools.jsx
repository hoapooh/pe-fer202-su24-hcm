import React, { useCallback, useEffect, useState } from "react";
import { MainAPI } from "../MainAPI";
import { Button, Col, Container, Image, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

export default function ArtTools() {
	const baseURL = `${MainAPI}`;
	const [API, setAPI] = useState([]);

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
			.then((data) => setAPI(data))
			.catch((error) => console.log(error));
	}, [baseURL]);

	useEffect(() => {
		fetchAPI();
	}, [fetchAPI]);

	const handleDelete = (id) => {
		const confirmed = window.confirm("Are you sure you want to delete this item ?");

		if (confirmed) {
			fetch(`${baseURL}/${id}`, {
				method: "DELETE",
			}).then(() => {
				toast.success("Delete successfully!!", {
					position: "top-right",
					autoClose: 2000,
				});
				fetchAPI();
			});
		}
	};

	// ============ PAGINATION ============
	const numRowsPerPage = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedData, setPaginatedData] = useState([]);

	useEffect(() => {
		const sortedApi = [...API].sort((a, b) => b.id - a.id);

		const start = (currentPage - 1) * numRowsPerPage;
		const end = start + numRowsPerPage;
		setPaginatedData(sortedApi.slice(start, end));
	}, [API, currentPage]);

	const numPages = Math.ceil(API.length / numRowsPerPage);

	const paginationItems = [];
	const addEllipsis = (key) => paginationItems.push(<Pagination.Ellipsis key={key} disabled />);

	if (numPages <= 8) {
		paginationItems.push(
			<Pagination.Prev
				key="prev"
				onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
				disabled={currentPage === 1}
			/>
		);
		for (let i = 1; i <= numPages; i++) {
			paginationItems.push(
				<Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
					{i}
				</Pagination.Item>
			);
		}
	} else {
		if (currentPage > 2) {
			paginationItems.push(
				<Pagination.Item key={1} onClick={() => setCurrentPage(1)}>
					1
				</Pagination.Item>
			);
			if (currentPage > 3) addEllipsis("ellipsis-prev");
		}

		const startPage = Math.max(1, currentPage - 1);
		const endPage = Math.min(numPages, currentPage + 1);
		for (let i = startPage; i <= endPage; i++) {
			paginationItems.push(
				<Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
					{i}
				</Pagination.Item>
			);
		}

		if (currentPage < numPages - 1) {
			if (currentPage < numPages - 2) addEllipsis("ellipsis-next");
			paginationItems.push(
				<Pagination.Item key={numPages} onClick={() => setCurrentPage(numPages)}>
					{numPages}
				</Pagination.Item>
			);
		}
	}

	paginationItems.push(
		<Pagination.Next
			key="next"
			onClick={() => setCurrentPage(Math.min(currentPage + 1, numPages))}
			disabled={currentPage === numPages}
		/>
	);

	return (
		<div className="dashboard">
			<Container fluid="lg">
				<Row className="justify-content-md-end">
					<Col md={12}>
						<Link to={"/add"}>
							<Button variant="primary" style={{ fontWeight: "bold" }}>
								Add new Art Tools
							</Button>
						</Link>
					</Col>
				</Row>
				<Row className="justify-content-md-center" style={{ marginTop: "20px" }}>
					<Col md={12}>
						<Table striped bordered hover className="dashboard__table">
							<thead>
								<tr>
									<th>Id</th>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>Glass Surface</th>
									<th>Brand</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{paginatedData.map((art) => (
									<tr key={art.id}>
										<td>{art.id}</td>
										<td className="image">
											<Link to={`/edit/${art.id}`}>
												<Image src={art.image} rounded width={100} />
											</Link>
										</td>
										<td>{art.artName}</td>
										<td>{art.price}</td>
										<td>
											{art.glassSurface ? (
												<i style={{ color: "green" }} className="fa-solid fa-check"></i>
											) : (
												<i style={{ color: "tomato" }} className="fa-solid fa-xmark"></i>
											)}
										</td>
										<td>{art.brand}</td>
										<td>
											<div className="btn-wrapper">
												<Link to={`/edit/${art.id}`}>
													<Button variant="primary">
														<MdModeEdit />
													</Button>
												</Link>
												<Button variant="danger" onClick={() => handleDelete(art.id)}>
													<FaTrashAlt />
												</Button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
					<Pagination id="pagination">{paginationItems}</Pagination>
				</Row>
			</Container>
		</div>
	);
}
