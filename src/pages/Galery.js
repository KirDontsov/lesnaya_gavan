import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Helmet from "react-helmet";

import "../scss/pages/Galery.scss";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import LazyImage from "../components/LazyImage";
import Pagination from "../components/Pagination";
import { trackWindowScroll } from "react-lazy-load-image-component";

const Galery = ({ scrollPosition }) => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage, setPhotosPerPage] = useState(10);

	useEffect(() => {
		const fetchPhotos = async () => {
			setLoading(true);
			const res = await axios.get("/photos.json");
			setPhotos(res.data);
			setLoading(false);
		};

		fetchPhotos();
	}, []);

	let currentPhotos = [];
	if (!loading) {
		const indexOfLastCard = currentPage * photosPerPage;
		const indexOfFirstCard = indexOfLastCard - photosPerPage;
		currentPhotos = photos.slice(indexOfFirstCard, indexOfLastCard);
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
			<Helmet>
				<title>Фотогалерея Лесная Гавань</title>
				<meta name="description" content="Продается имущественный комплекс Гостиница Лесная Гавань" />
			</Helmet>
			<Fade delay={500} duration={2000}>
				<div className="centerSection">
					<Link to="/">
						<Arrow />
					</Link>
					<h1>Галерея</h1>

					<div className="colCenter">
						{!loading
							? currentPhotos.map((img, i) => {
									return <LazyImage image={img} key={i} alt={img.alt} scrollPosition={scrollPosition} />;
							  })
							: null}

						<div className="pagination">
							{!loading ? (
								<Pagination cardsPerPage={photosPerPage} totalCards={photos.length} paginate={paginate} scroll={scrollToTop} />
							) : null}
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default trackWindowScroll(Galery);
