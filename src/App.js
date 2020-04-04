import React, { Component } from "react";
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
				{routes.map(route => (
					<Route key={route.name} exact={route.isExact} path={route.path} component={route.component} status={route.status} />
				))}
			</Switch>
		);

		if (isMobile) {
			return (
				<div className="wrapper">
					<Burger routes={routes.filter(route => route.isMobile)} />
					{renderSwitch()}
					<Footer routes={routes.filter(route => route.isFooter)} />
				</div>
			);
		} else {
			return (
				<div className="wrapper">
					<Shutter />
					<NavigationBar routes={routes.filter(route => route.isNavBar)} />
					{renderSwitch()}
					<Footer routes={routes.filter(route => route.isFooter)} />
				</div>
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
