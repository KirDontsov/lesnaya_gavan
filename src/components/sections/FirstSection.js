import React, { Fragment } from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import Fade from "react-reveal/Fade";
import Arrow from "../Arrow";
import "../../scss/sections/FirstSection.scss";

const FirstSection = props => {
	return (
		<Fragment>
			<div className="sectionWrapper">
				<div
					className="firstSection"
					// id="firstSection"
				>
					<div className="header">
						<Fade duration={2000}>
							<h1 className="white">
								Имущественный комплекс
								<br />
								Санаторий <span>Лесная Гавань</span>
							</h1>
						</Fade>
					</div>
				</div>
				<Fade duration={2000} delay={1000}>
					<GlassMagnifier
						imageSrc="/static/media/KIR_2320.775f86cc.jpg"
						imageAlt="Имущественный комплекс Лесная Гавань"
						largeImageSrc="/assets/img/KIR_2320_1.jpg" // Optional
						magnifierBorderSize={0}
						magnifierSize={"30%"}
						allowOverflow={false}
						className="heroBanner"
					/>
				</Fade>
				<Arrow direction="vertical" type="secondSection" />
			</div>
		</Fragment>
	);
};

export default FirstSection;
