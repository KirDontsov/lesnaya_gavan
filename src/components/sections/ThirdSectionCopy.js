import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import "../../scss/sections/ThirdSection.scss";
import LazyImage from "../LazyImage";
import ArrowHorizontal from "../ArrowHorizontal";
import { connect } from "react-redux";
import { trackWindowScroll } from "react-lazy-load-image-component";

const ThirdSectionCopy = props => {
	const handleClick = e => {
		scrollToTop();
		props.slide(true);
	};

	const scrollToTop = () => {
		let div = document.querySelector(".wrapper");
		div.scrollTop = 0;
	};
	return (
		<Fragment>
			<div className="thirdSectionCopy " id="thirdSectionCopy">
				<Fade duration={2000}>
					<div className="centerSection">
						{props.title ? (
							<h2>
								Внутренний <span>вид помещений</span>
							</h2>
						) : (
							<h2>
								Внешний <span>вид</span>
							</h2>
						)}

						{props.slides !== undefined ? (
							<div className="colWrapper">
								<div className="col">
									<LazyImage image={props.slides[4]} scrollPosition={props.scrollPosition} />
									<LazyImage image={props.slides[5]} scrollPosition={props.scrollPosition} />
								</div>
								<div className="col">
									<LazyImage image={props.slides[6]} scrollPosition={props.scrollPosition} />
									<LazyImage image={props.slides[7]} scrollPosition={props.scrollPosition} />
								</div>
							</div>
						) : null}

						<div className="galleryLink" onClick={() => handleClick()}>
							<ArrowHorizontal direction="horizontal" title="галерея" to="/galery" />
						</div>
					</div>
				</Fade>
			</div>
		</Fragment>
	);
};

const mapState = state => ({
	width: state.scroll.width
});

const mapDispatch = ({ shutter: { slide } }) => ({
	slide
});

export default trackWindowScroll(
	connect(
		mapState,
		mapDispatch
	)(ThirdSectionCopy)
);
