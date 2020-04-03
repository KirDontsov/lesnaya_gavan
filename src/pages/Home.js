import React, { Fragment } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import FirstSection from "../components/sections/FirstSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";
import ThirdSectionCopy from "../components/sections/ThirdSectionCopy";
import FourthSection from "../components/sections/FourthSection";
import FifthSection from "../components/sections/FifthSection";
import SixthSection from "../components/sections/SixthSection";
import FirstSectionMob from "../components/sections_mobile/FirstSectionMob";
import SecondSectionMob from "../components/sections_mobile/SecondSectionMob";
import ThirdSectionMob from "../components/sections_mobile/ThirdSectionMob";
import ThirdSectionCopyMob from "../components/sections_mobile/ThirdSectionCopyMob";
import FourthSectionMob from "../components/sections_mobile/FourthSectionMob";
import FifthSectionMob from "../components/sections_mobile/FifthSectionMob";
import SixthSectionMob from "../components/sections_mobile/SixthSectionMob";
import slideData from "../categories/Categories";

const Home = props => {
	const ready = props.isMobile;
	if (ready) {
		return (
			<Fragment>
				<Helmet>
					<title>Гостиница Лесная Гавань</title>
					<meta name="description" content="Продается имущественный комплекс Гостиница Лесная Гавань" />
				</Helmet>
				<FirstSectionMob slides={slideData} />
				<SecondSectionMob />
				<ThirdSectionMob slides={slideData} />
				<FourthSectionMob />
				<ThirdSectionCopyMob title="Внутренний вид помещений" slides={slideData} />
				<FifthSectionMob />
				<SixthSectionMob />
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<Helmet>
					<title>Гостиница Лесная Гавань</title>
					<meta name="description" content="Продается имущественный комплекс Гостиница Лесная Гавань" />
				</Helmet>
				<FirstSection slides={slideData} />
				<SecondSection />
				<ThirdSection slides={slideData} />
				<FourthSection />
				<ThirdSectionCopy title="Внутренний вид помещений" slides={slideData} />
				<FifthSection />
				<SixthSection />
			</Fragment>
		);
	}
};

const mapState = state => ({
	isMobile: state.scroll.isMobile
});

export default connect(mapState)(Home);
