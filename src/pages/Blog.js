import React, { Fragment, Suspense, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

import "../scss/pages/Galery.scss";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import LazyImage from "../components/LazyImage";
import Pagination from "../components/Pagination";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Blog = ({ scrollPosition }) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [articlesPerPage, setArticlesPerPage] = useState(10);

	useEffect(() => {
		const fetchArticles = async () => {
			setLoading(true);
			const res = await axios.get("/photos.json");
			setArticles(res.data);
			setLoading(false);
		};

		fetchArticles();
	}, []);

	let currentArticles = [];
	if (!loading) {
		const indexOfLastCard = currentPage * articlesPerPage;
		const indexOfFirstCard = indexOfLastCard - articlesPerPage;
		currentArticles = articles.slice(indexOfFirstCard, indexOfLastCard);
	}

	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		scrollToTop();
	};

	const scrollToTop = () => {
		let div = document.querySelector(".wrapper");
		div.scrollTop = 0;
	};

	return (
		<div className="galerySection">
			<Fade delay={500} duration={2000}>
				<div className="centerSection">
					<Link to="/">
						<Arrow />
					</Link>
					<h1>Блог</h1>

					<div className="colCenter">
						<LazyLoadComponent>
							{!loading
								? currentArticles.map((img, i) => {
										return <LazyImage image={img} key={i} alt={img.alt} scrollPosition={scrollPosition} />;
								  })
								: null}
						</LazyLoadComponent>

						<div className="pagination">
							{!loading ? (
								<Pagination
									cardsPerPage={articlesPerPage}
									totalCards={articles.length}
									paginate={paginate}
									scroll={scrollToTop}
								/>
							) : null}
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default trackWindowScroll(Blog);
