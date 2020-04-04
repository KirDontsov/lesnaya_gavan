import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { Route, Link } from "react-router-dom";
import Arrow from "../components/Arrow";

const NotFound = () => {
	return (
		<Route
			render={({ staticContext }) => {
				if (staticContext) {
					staticContext.status = 404;
				}
				return (
					<>
						<Helmet>
							<title>404</title>
							<meta name="description" content="404" />
						</Helmet>
						<Fade delay={300}>
							<div className="container__margin">
								<div className="centerSection">
									<Link to="/">
										<p>Вернуться на главную ></p>
									</Link>
									<h1 style={{ color: "#000" }}>Упс... 404 Страница не существует</h1>
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
								</div>
							</div>
						</Fade>
					</>
				);
			}}
		/>
	);
};

export default NotFound;
