import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "./routes";

import NavigationBar from "./components/NavBar";
import Burger from "./mob_components/Burger";
import Footer from "./components/Footer";
import Shutter from "./mob_components/Shutter";
import "./scss/App.scss";

class App extends Component {
	componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", this.handleWindowSizeChange);
		}
	}

	componentWillUnmount() {
		if (typeof window !== "undefined") {
			window.removeEventListener("resize", this.handleWindowSizeChange);
		}
	}

	handleWindowSizeChange = () => {
		if (typeof window !== "undefined") {
			this.props.setWidth(window.innerWidth);
		}
	};

	render() {
		const { width, isMobile } = this.props;

		if (width <= 768) {
			this.props.setIsMobile(true);
		}
		if (width > 768) {
			this.props.setIsMobile(false);
		}
		const renderSwitch = () => (
			<Switch>
				{routes.map(route => {
					const component = route.component;
					return <Route key={route.id} exact={route.isExact} path={route.path} component={component} status={route.status} />;
				})}
			</Switch>
		);

		if (isMobile) {
			return (
				<Fragment>
					<div className="wrapper">
						<Burger routes={routes.filter(route => route.isMobile)} />
						{/* <h1>Mobile</h1> */}
						{renderSwitch()}
						<Footer routes={routes.filter(route => route.isFooter)} />
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<div className="wrapper">
						<Shutter />
						<NavigationBar routes={routes.filter(route => route.isNavBar)} />
						{renderSwitch()}
						<Footer routes={routes.filter(route => route.isFooter)} />
					</div>
				</Fragment>
			);
		}
	}
}

const mapState = state => ({
	width: state.scroll.width,
	isMobile: state.scroll.isMobile
});

const mapDispatch = ({ scroll: { setWidth, setIsMobile } }) => ({
	setWidth,
	setIsMobile
});

export default connect(
	mapState,
	mapDispatch
)(App);
